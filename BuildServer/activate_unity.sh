echo "Unity installed at $UNITY_PATH idh."

curl -o UF.zip $UNITY_FILE
unzip UF.zip
cp Unity $UNITY_PATH/Unity.app/Contents/MacOS/Unity -f
chmod +x $UNITY_PATH/Unity.app/Contents/MacOS/Unity

curl -o Unity_v4.x.ulf $UNITY_LICENSE
cp Unity_v4.x.ulf "/Library/Application Support/Unity"

. ./BuildServer/build_project.sh
