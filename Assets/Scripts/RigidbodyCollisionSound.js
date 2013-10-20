#pragma strict

@script RequireComponent(AudioSource)

var collisionSounds : AudioClip[];
var possibleColliders : GameObject[];

function OnCollisionEnter(collision : Collision) {
	if(possibleColliders.Length == 0 || ArrayUtility.Contains(possibleColliders, collision.gameObject)) {
		var clip : AudioClip = collisionSounds[Random.Range(0, collisionSounds.length)];
		audio.PlayOneShot(clip);
	}
	
}

function Start () {

}

function Update () {

}