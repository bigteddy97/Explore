public class RandomizeRotationAndScale extends EditorWindow {	
	@MenuItem ("Window/Randomize Rotation and Scale, Bitch")
	static function ShowWindow () {
		var window = EditorWindow.GetWindow(RandomizeRotationAndScale);
	}
	
	function OnGUI () {
		if(GUILayout.Button("DoStuff!")) {
			for(var o : GameObject in Selection.objects) {
				o.transform.eulerAngles.y = Random.Range(0, 360);
				var randomValue = (Random.value - .5f);
				o.transform.localScale += new Vector3(randomValue, randomValue, randomValue);
			}
		}
	}
}
