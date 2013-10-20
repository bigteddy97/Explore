#pragma strict

import System.Collections.Generic;

var walkSoundsGrass : AudioClip[];
var walkSoundsDirt : AudioClip[];
var walkSoundsStone : AudioClip[];
var walkSoundsSand : AudioClip[];

var audioStepLength = .3f;

function Start () {
	var controller : CharacterController = GetComponent(CharacterController);
    while (true) {
        if (controller.isGrounded && controller.velocity.magnitude > 0.3) {
            
            var terrainIndex = TerrainSurface.GetMainTexture(controller.transform.position);
            Debug.Log(terrainIndex);
            audio.clip = GetRandomSoundWithTerrainIndex(terrainIndex);
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

function GetRandomSoundWithTerrainIndex(terrainIndex : int) {
	var selectedArray : AudioClip[] = walkSoundsGrass;
	
	switch(terrainIndex) {
		case 0: selectedArray = walkSoundsGrass; break;
		case 1: selectedArray = walkSoundsDirt; break;
		case 2: selectedArray = walkSoundsStone; break;
		case 3: selectedArray = walkSoundsSand; break;
	}
	
	if(selectedArray.Length > 0)
		return walkSoundsGrass[Random.Range(0, walkSoundsGrass[terrainIndex].length)];
	
	return null;
}

function Update () {

}