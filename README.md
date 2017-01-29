# turf-deintersect

[![Greenkeeper badge](https://badges.greenkeeper.io/stepankuzmin/turf-deintersect.svg)](https://greenkeeper.io/)

[![build status](https://secure.travis-ci.org/stepankuzmin/turf-deintersect.png)](http://travis-ci.org/stepankuzmin/turf-deintersect)

Delete GeoJSON polygon intersections


### `turf.deintersect(polygons)`

Delete Polygon|polygons intersections by clipping from next polygon
each previous polygon.

### Parameters

| parameter  | type               | description            |
| ---------- | ------------------ | ---------------------- |
| `polygons` | Array\.\<Polygon\> | input polygon features |


### Example

```js
var poly1 = {
  "type": "Feature",
  "properties": {
    "fill": "#0f0"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-46.738586, -23.596711],
      [-46.738586, -23.458207],
      [-46.560058, -23.458207],
      [-46.560058, -23.596711],
      [-46.738586, -23.596711]
    ]]
  }
};
var poly2 = {
  "type": "Feature",
  "properties": {
    "fill": "#00f"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-46.650009, -23.631314],
      [-46.650009, -23.5237],
      [-46.509246, -23.5237],
      [-46.509246, -23.631314],
      [-46.650009, -23.631314]
    ]]
  }
};

var deintersected = turf.deintersect([poly1, poly2]);

var polygonsBefore = {
  "type": "FeatureCollection",
  "features": [poly1, poly2]
};

var polygonsAfter = {
  "type": "FeatureCollection",
  "features": deintersected
};

//=polygonsBefore

//=polygonsAfter
```


**Returns** `Array.<Polygon>`, a polygon features without intersections

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-deintersect
```

## Tests

```sh
$ npm test
```


