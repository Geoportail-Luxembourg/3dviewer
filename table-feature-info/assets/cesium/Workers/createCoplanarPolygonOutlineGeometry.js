/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.121.3
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  CoplanarPolygonGeometryLibrary_default
} from "./chunk-QLIMO7TQ.js";
import "./chunk-I4NB77NH.js";
import {
  PolygonGeometryLibrary_default
} from "./chunk-TKNA6WSZ.js";
import "./chunk-WPGX7DEA.js";
import {
  GeometryInstance_default
} from "./chunk-WKS5H3VW.js";
import {
  GeometryPipeline_default
} from "./chunk-35ALNMG5.js";
import "./chunk-ZXOK77EW.js";
import "./chunk-ADDGROZ6.js";
import "./chunk-YSVI7YNN.js";
import "./chunk-XH7MSR3A.js";
import "./chunk-LXLABO2L.js";
import {
  arrayRemoveDuplicates_default
} from "./chunk-MZSRINXK.js";
import "./chunk-SB67D3JL.js";
import "./chunk-JX4A2BCF.js";
import "./chunk-RQ4F6YFU.js";
import {
  IndexDatatype_default
} from "./chunk-BABDQOWA.js";
import {
  GeometryAttributes_default
} from "./chunk-Z4QVAZM6.js";
import {
  GeometryAttribute_default,
  Geometry_default,
  PrimitiveType_default
} from "./chunk-CMCR2ZK4.js";
import {
  BoundingSphere_default
} from "./chunk-KFHZFU5O.js";
import "./chunk-X3EPFVG3.js";
import {
  ComponentDatatype_default
} from "./chunk-K6PDUSH6.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-YDEBBUNQ.js";
import "./chunk-6RAEC3AW.js";
import "./chunk-EGGJIATZ.js";
import "./chunk-C33B4KHN.js";
import {
  defaultValue_default
} from "./chunk-KYGXRFA6.js";
import {
  Check_default
} from "./chunk-2PFJ45KC.js";
import {
  defined_default
} from "./chunk-LWN2B3KW.js";

// packages/engine/Source/Core/CoplanarPolygonOutlineGeometry.js
function createGeometryFromPositions(positions) {
  const length = positions.length;
  const flatPositions = new Float64Array(length * 3);
  const indices = IndexDatatype_default.createTypedArray(length, length * 2);
  let positionIndex = 0;
  let index = 0;
  for (let i = 0; i < length; i++) {
    const position = positions[i];
    flatPositions[positionIndex++] = position.x;
    flatPositions[positionIndex++] = position.y;
    flatPositions[positionIndex++] = position.z;
    indices[index++] = i;
    indices[index++] = (i + 1) % length;
  }
  const attributes = new GeometryAttributes_default({
    position: new GeometryAttribute_default({
      componentDatatype: ComponentDatatype_default.DOUBLE,
      componentsPerAttribute: 3,
      values: flatPositions
    })
  });
  return new Geometry_default({
    attributes,
    indices,
    primitiveType: PrimitiveType_default.LINES
  });
}
function CoplanarPolygonOutlineGeometry(options) {
  options = defaultValue_default(options, defaultValue_default.EMPTY_OBJECT);
  const polygonHierarchy = options.polygonHierarchy;
  Check_default.defined("options.polygonHierarchy", polygonHierarchy);
  this._polygonHierarchy = polygonHierarchy;
  this._workerName = "createCoplanarPolygonOutlineGeometry";
  this.packedLength = PolygonGeometryLibrary_default.computeHierarchyPackedLength(
    polygonHierarchy,
    Cartesian3_default
  ) + 1;
}
CoplanarPolygonOutlineGeometry.fromPositions = function(options) {
  options = defaultValue_default(options, defaultValue_default.EMPTY_OBJECT);
  Check_default.defined("options.positions", options.positions);
  const newOptions = {
    polygonHierarchy: {
      positions: options.positions
    }
  };
  return new CoplanarPolygonOutlineGeometry(newOptions);
};
CoplanarPolygonOutlineGeometry.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  Check_default.defined("array", array);
  startingIndex = defaultValue_default(startingIndex, 0);
  startingIndex = PolygonGeometryLibrary_default.packPolygonHierarchy(
    value._polygonHierarchy,
    array,
    startingIndex,
    Cartesian3_default
  );
  array[startingIndex] = value.packedLength;
  return array;
};
var scratchOptions = {
  polygonHierarchy: {}
};
CoplanarPolygonOutlineGeometry.unpack = function(array, startingIndex, result) {
  Check_default.defined("array", array);
  startingIndex = defaultValue_default(startingIndex, 0);
  const polygonHierarchy = PolygonGeometryLibrary_default.unpackPolygonHierarchy(
    array,
    startingIndex,
    Cartesian3_default
  );
  startingIndex = polygonHierarchy.startingIndex;
  delete polygonHierarchy.startingIndex;
  const packedLength = array[startingIndex];
  if (!defined_default(result)) {
    result = new CoplanarPolygonOutlineGeometry(scratchOptions);
  }
  result._polygonHierarchy = polygonHierarchy;
  result.packedLength = packedLength;
  return result;
};
CoplanarPolygonOutlineGeometry.createGeometry = function(polygonGeometry) {
  const polygonHierarchy = polygonGeometry._polygonHierarchy;
  let outerPositions = polygonHierarchy.positions;
  outerPositions = arrayRemoveDuplicates_default(
    outerPositions,
    Cartesian3_default.equalsEpsilon,
    true
  );
  if (outerPositions.length < 3) {
    return;
  }
  const isValid = CoplanarPolygonGeometryLibrary_default.validOutline(outerPositions);
  if (!isValid) {
    return void 0;
  }
  const polygons = PolygonGeometryLibrary_default.polygonOutlinesFromHierarchy(
    polygonHierarchy,
    false
  );
  if (polygons.length === 0) {
    return void 0;
  }
  const geometries = [];
  for (let i = 0; i < polygons.length; i++) {
    const geometryInstance = new GeometryInstance_default({
      geometry: createGeometryFromPositions(polygons[i])
    });
    geometries.push(geometryInstance);
  }
  const geometry = GeometryPipeline_default.combineInstances(geometries)[0];
  const boundingSphere = BoundingSphere_default.fromPoints(polygonHierarchy.positions);
  return new Geometry_default({
    attributes: geometry.attributes,
    indices: geometry.indices,
    primitiveType: geometry.primitiveType,
    boundingSphere
  });
};
var CoplanarPolygonOutlineGeometry_default = CoplanarPolygonOutlineGeometry;

// packages/engine/Source/Workers/createCoplanarPolygonOutlineGeometry.js
function createCoplanarPolygonOutlineGeometry(polygonGeometry, offset) {
  if (defined_default(offset)) {
    polygonGeometry = CoplanarPolygonOutlineGeometry_default.unpack(
      polygonGeometry,
      offset
    );
  }
  polygonGeometry._ellipsoid = Ellipsoid_default.clone(polygonGeometry._ellipsoid);
  return CoplanarPolygonOutlineGeometry_default.createGeometry(polygonGeometry);
}
var createCoplanarPolygonOutlineGeometry_default = createCoplanarPolygonOutlineGeometry;
export {
  createCoplanarPolygonOutlineGeometry_default as default
};
