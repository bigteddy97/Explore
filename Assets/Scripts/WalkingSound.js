#pragma strict

var walkSounds : AudioClip[];
var audioStepLength = .3f;

function Start () {
	var controller : CharacterController = GetComponent(CharacterController);
    while (true) {
        if (controller.isGrounded && controller.velocity.magnitude > 0.3) {
            audio.clip = walkSounds[Random.Range(0, walkSounds.length)];
			audio.pitch = Random.Range(0.8f, 1.5f);
            
            audio.Play();
            yield WaitForSeconds(audioStepLength);
        }
        else {
        	audio.Stop();
            yield;

        }
    }
}

function Update () {

}