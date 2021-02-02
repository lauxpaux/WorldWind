var wwd = new WorldWind.WorldWindow("canvasOne")
var placemarkLayer = new WorldWind.RenderableLayer("Placemark");


wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());


wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

//placemark layer 
var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer)

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

//image position
placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

//text position
placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0);

//select placemark image
placemarkAttributes.imageSource = WorldWind.configuration.baseURL + "images/pushpins/plain-yellow.png";
//position for the placemark is determined using coordinates
var position = new WorldWind.Position(18.5031, -71.3424, 100.0);
//DR Coordinates not working: 18.56, 71.34
//this determines if the placemark should scale based on zoom in/zoom out of globe - set to false
//also binds the placemark attributes 
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

placemark.label = "Placemark\n" + 
    "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    "Lon " + placemark.position.longitude.toPrecision(5).toString();
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);