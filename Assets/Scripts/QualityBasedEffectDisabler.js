#pragma strict

function Start () {
	if(QualitySettings.GetQualityLevel() <= QualityLevel.GetValues(QualityLevel).Length / 2)
		GetComponent(DepthOfFieldScatter).enabled = false;
}

function Update () {

}