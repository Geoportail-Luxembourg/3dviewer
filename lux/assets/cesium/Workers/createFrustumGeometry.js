/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.121.5
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
  FrustumGeometry_default
} from "./chunk-KULZY3XN.js";
import "./chunk-YEONE7RH.js";
import "./chunk-EGAGTCTF.js";
import "./chunk-F4TYWTLA.js";
import "./chunk-HCHTH3IB.js";
import "./chunk-TYFDCGJA.js";
import "./chunk-KQZETAD4.js";
import "./chunk-GULESHYV.js";
import "./chunk-L7QP6H72.js";
import "./chunk-QEMZBTFR.js";
import "./chunk-MYEQIKJN.js";
import "./chunk-FLGO2ZQM.js";
import "./chunk-4OZXCGBJ.js";
import "./chunk-PMC3FYPH.js";
import {
  defined_default
} from "./chunk-NCBLZFLY.js";

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
