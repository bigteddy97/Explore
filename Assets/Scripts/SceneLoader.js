#pragma strict

var SceneName = "";

function Start () {
	var async : AsyncOperation = Application.LoadLevelAsync(SceneName);
	yield async;
	Debug.Log("Scene " + SceneName + " Loaded!");
	Application.LoadLevel(SceneName);
}

function Update () {
}