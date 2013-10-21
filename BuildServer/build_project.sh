UNITY_EXE="$UNITY_PATH/Unity.app/Contents/MacOS/Unity -batchmode"
PROJECT_PATH=$PWD

$UNITY_EXE -projectPath $PROJECT_PATH -buildWebPlayer ./index -quit