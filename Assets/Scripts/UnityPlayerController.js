#pragma strict

var joystickPrefab : GameObject;

function Start() {

}

function Update () {
	Screen.showCursor = false;
	
	if(Input.GetButton("Exit"))
		Application.Quit();


}