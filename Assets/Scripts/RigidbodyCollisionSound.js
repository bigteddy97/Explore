#pragma strict

@script RequireComponent(AudioSource)

var collisionSounds : AudioClip[];
var possibleColliders : GameObject[];

function OnCollisionEnter(collision : Collision) {
	if(possibleColliders.Length == 0 || Contains(possibleColliders, collision.gameObject)) {
		var clip : AudioClip = collisionSounds[Random.Range(0, collisionSounds.length)];
		audio.PlayOneShot(clip);
	}
	
}

function Contains(array, object) {
	for(var t in array)
		if(t == object) return true;
	return false;
}

function Start () {

}

function Update () {

}