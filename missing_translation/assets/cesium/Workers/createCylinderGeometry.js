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
  CylinderGeometry_default
} from "./chunk-TC4NTWIJ.js";
import "./chunk-NUAXNUP5.js";
import "./chunk-ASYGMBRG.js";
import "./chunk-4FHUY275.js";
import "./chunk-BABDQOWA.js";
import "./chunk-Z4QVAZM6.js";
import "./chunk-CMCR2ZK4.js";
import "./chunk-KFHZFU5O.js";
import "./chunk-X3EPFVG3.js";
import "./chunk-K6PDUSH6.js";
import "./chunk-YDEBBUNQ.js";
import "./chunk-6RAEC3AW.js";
import "./chunk-EGGJIATZ.js";
import "./chunk-C33B4KHN.js";
import "./chunk-KYGXRFA6.js";
import "./chunk-2PFJ45KC.js";
import {
  defined_default
} from "./chunk-LWN2B3KW.js";

// packages/engine/Source/Workers/createCylinderGeometry.js
function createCylinderGeometry(cylinderGeometry, offset) {
  if (defined_default(offset)) {
    cylinderGeometry = CylinderGeometry_default.unpack(cylinderGeometry, offset);
  }
  return CylinderGeometry_default.createGeometry(cylinderGeometry);
}
var createCylinderGeometry_default = createCylinderGeometry;
export {
  createCylinderGeometry_default as default
};
