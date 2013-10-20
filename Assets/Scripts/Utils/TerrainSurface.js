﻿#pragma strict

public class TerrainSurface {

	public static function GetTextureMix(worldPos:Vector3) {
	    // returns an array containing the relative mix of textures
	    // on the main terrain at this world position.
	 
	    // The number of values in the array will equal the number
	    // of textures added to the terrain.
	 
	    var terrain:Terrain = Terrain.activeTerrain;
	    var terrainData:TerrainData = terrain.terrainData;
	    var terrainPos:Vector3 = terrain.transform.position;
	 
	    // calculate which splat map cell the worldPos falls within (ignoring y)
	    var mapX:int = (((worldPos.x - terrainPos.x) / terrainData.size.x) * terrainData.alphamapWidth);
	    var mapZ:int = (((worldPos.z - terrainPos.z) / terrainData.size.z) * terrainData.alphamapHeight);
	 
	    // get the splat data for this cell as a 1x1xN 3d array (where N = number of textures)
	    var splatmapData = terrainData.GetAlphamaps(mapX,mapZ,1,1);
	 
	    // extract the 3D array data to a 1D array:
	    var cellMix = new float[splatmapData.GetUpperBound(2)+1];
	    for (var n=0; n<cellMix.Length; ++n)
	    {
	        cellMix[n] = splatmapData[0,0,n];    
	    }
	 
	    return cellMix;        
	 
	}
	 
	public static function GetMainTexture(worldPos:Vector3) {
	 
	    // returns the zero-based index of the most dominant texture
	    // on the main terrain at this world position.
	 
	    var mix = GetTextureMix(worldPos);
	 
	 
	    var maxMix = 0f;
	    var maxIndex = 0;
	 
	    // loop through each mix value and find the maximum
	    for (var n=0; n<mix.Length; ++n)
	    {
	        if (mix[n] > maxMix)
	        {
	            maxIndex = n;
	            maxMix = mix[n];
	        }
	    }
	 
	    return maxIndex;
	 
	}

}