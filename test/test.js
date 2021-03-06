const fs = require("fs");
var test = require("tape");
const difference = require("@turf/difference");
var deintersect = require("../");

var poly1 = {
  type: "Feature",
  properties: {
    fill: "#0f0"
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-46.738586, -23.596711],
        [-46.738586, -23.458207],
        [-46.560058, -23.458207],
        [-46.560058, -23.596711],
        [-46.738586, -23.596711]
      ]
    ]
  }
};

var poly2 = {
  type: "Feature",
  properties: {
    fill: "#00f"
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-46.650009, -23.631314],
        [-46.650009, -23.5237],
        [-46.509246, -23.5237],
        [-46.509246, -23.631314],
        [-46.650009, -23.631314]
      ]
    ]
  }
};

var result = [
  {
    type: "Feature",
    properties: {
      fill: "#0f0"
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-46.738586, -23.596711],
          [-46.738586, -23.458207],
          [-46.560058, -23.458207],
          [-46.560058, -23.596711],
          [-46.738586, -23.596711]
        ]
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      fill: "#00f"
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-46.650009, -23.631314],
          [-46.509246, -23.631314],
          [-46.509246, -23.5237],
          [-46.560058, -23.5237],
          [-46.560058, -23.596711],
          [-46.650009, -23.596711],
          [-46.650009, -23.631314]
        ]
      ]
    }
  }
];

test("delete-intersections", function(t) {
  var differenced = deintersect([poly1, poly2]);
  t.deepEqual(differenced, result);
  t.end();
});
