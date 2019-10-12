var MoveCanvasFromFocalPlane = function(canvasName, newDistanceFromOrigin) {
	var focalDistanceObject = require('Scene').root.child("Device").child("Camera").child("Focal Distance");

	var focalLengthSignal = focalDistanceObject.transform.z;

	var canvasToMove = focalDistanceObject.child(canvasName);
	canvasToMove.renderMode = "WORLD_SPACE";
	canvasToMove.transform.z = focalLengthSignal.pinLastValue()*(newDistanceFromOrigin-1);

	canvasToMove.transform.scaleX = canvasToMove.transform.scaleX.pinLastValue()*newDistanceFromOrigin;
	canvasToMove.transform.scaleY = canvasToMove.transform.scaleY.pinLastValue()*newDistanceFromOrigin;
	canvasToMove.transform.scaleZ = canvasToMove.transform.scaleZ.pinLastValue()*newDistanceFromOrigin;
}

MoveCanvasFromFocalPlane("canvas0", 2);
