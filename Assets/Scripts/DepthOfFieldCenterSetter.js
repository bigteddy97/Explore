#pragma strict

var dofCenter : Transform;
var speed = 1.0;

private var targetPos = Vector3.zero;
private var startTime: float;

function Update () {
	var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2, Screen.height / 2));
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 1000)) {
    	if(!hit.point.Equals(targetPos)) {
    		targetPos = hit.point;
    		startTime = Time.time;
    	}
    	
    	var a = dofCenter.position;
    	var b = targetPos;
    	dofCenter.position = Vector3.Lerp(a, b,  (Time.time - startTime) * speed / Vector3.Distance(a, b));
    }
}