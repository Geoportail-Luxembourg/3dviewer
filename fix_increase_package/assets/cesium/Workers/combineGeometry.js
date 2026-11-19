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
  PrimitivePipeline_default
} from "./chunk-BQHHGIFB.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-565T3GIE.js";
import "./chunk-EWS5LXAB.js";
import "./chunk-35ALNMG5.js";
import "./chunk-ZXOK77EW.js";
import "./chunk-ADDGROZ6.js";
import "./chunk-JX4A2BCF.js";
import "./chunk-RQ4F6YFU.js";
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
import "./chunk-LWN2B3KW.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(
    packedParameters
  );
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
