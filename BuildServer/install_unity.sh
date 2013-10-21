dmg=$1
 
# A script to install Unity3d automatically from the command line given a dmg file.
# The resulting file is stored under /Applications/Unity$VERSION
 
# check assumptions
unityhome=/Applications/Unity4.2.2f
 
if [[ -d "$unityhome" ]]; then
    echo "ERROR: $unityhome already present"
    exit -1
fi
 
tempfoo=`basename $0`
TMPFILE=`mktemp /tmp/${tempfoo}.XXXXXX` || exit 1
hdiutil verify $dmg
hdiutil mount -readonly -nobrowse -plist $dmg > $TMPFILE
vol=`grep Volumes $TMPFILE  | sed -e 's/.*>\(.*\)<\/.*/\1/'`
pkg=`ls -1 "$vol"/*.pkg`
sudo installer -pkg "$pkg" -target /
hdiutil unmount "$vol"
 
if [[ ! -d "$unityhome" ]]; then
    echo "ERROR: $unityhome not present after installation. Something went wrong"
    exit -1
fi
 
unityversion=`grep -A 1 CFBundleVersion "$unityhome"/Unity.app/Contents/Info.plist | grep string | sed -e 's/.*>\(.*\)<\/.*/\1/'`
if [[ -d "$unityhome$unityversion" ]]; then
    echo "ERROR: "$unityhome$unityversion" already present on disk. Something went wrong"
    sudo rm -rf "$unityhome"
    exit -1
fi
 
sudo mv "$unityhome" "$unityhome$unityversion"

UNITY_PATH=$unityhome$unityversion
 
echo "Unity $unityversion installed at $unityhome$unityversion"

. ./BuildServer/activate_unity.sh