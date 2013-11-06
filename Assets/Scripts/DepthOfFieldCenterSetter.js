#pragma strict

var dofCenter : Transform;

function Update () {
	var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2, Screen.height / 2));
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 1000)) {
    	dofCenter.position = (hit.point);
    }
}