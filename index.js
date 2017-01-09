const difference = require('@turf/difference');

/**
 * Delete {@link Polygon|polygons} intersections by clipping from next polygon
 * each previous polygon.
 *
 * @module turf/deintersect
 * @category transformation
 * @param {Array<Polygon>} polygons input polygon features
 * @return {Array<Polygon>} a polygon features without intersections
 * @example
 * var poly1 = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#0f0"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-46.738586, -23.596711],
 *       [-46.738586, -23.458207],
 *       [-46.560058, -23.458207],
 *       [-46.560058, -23.596711],
 *       [-46.738586, -23.596711]
 *     ]]
 *   }
 * };
 * var poly2 = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#00f"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-46.650009, -23.631314],
 *       [-46.650009, -23.5237],
 *       [-46.509246, -23.5237],
 *       [-46.509246, -23.631314],
 *       [-46.650009, -23.631314]
 *     ]]
 *   }
 * };
 *
 * var deintersected = turf.deintersect([poly1, poly2]);
 *
 * var polygonsBefore = {
 *   "type": "FeatureCollection",
 *   "features": [poly1, poly2]
 * };
 *
 * var polygonsAfter = {
 *   "type": "FeatureCollection",
 *   "features": deintersected
 * };
 *
 * //=polygonsBefore
 *
 * //=polygonsAfter
 */
function differentiate(newPolygons, polygon) {
  newPolygons.push(newPolygons.reduce(difference, polygon));
  return newPolygons;
}

module.exports = function(polygons) {
  return polygons.slice(1).reduce(differentiate, [polygons[0]]);
};
