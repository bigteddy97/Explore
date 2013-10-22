#pragma strict

var materialIndex : int = 0;
var uvAnimationRate : Vector2 = new Vector2(1.0f, 1.0f);
var textureName : String = "_MainTex";

private var uvOffset : Vector2 = Vector2.zero;

function Update () {
	uvOffset += (uvAnimationRate * Time.deltaTime);
	if(renderer.enabled) {
		renderer.materials[materialIndex].SetTextureOffset(textureName, uvOffset);
	}
}