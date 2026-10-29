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
  EllipseOutlineGeometry_default
} from "./chunk-R5LP2OED.js";
import "./chunk-GKC6HHRY.js";
import "./chunk-DJ3ZQW5L.js";
import "./chunk-H7MDD63F.js";
import "./chunk-F4TYWTLA.js";
import "./chunk-HCHTH3IB.js";
import "./chunk-TYFDCGJA.js";
import "./chunk-KQZETAD4.js";
import "./chunk-GULESHYV.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-L7QP6H72.js";
import "./chunk-QEMZBTFR.js";
import "./chunk-MYEQIKJN.js";
import "./chunk-FLGO2ZQM.js";
import "./chunk-4OZXCGBJ.js";
import "./chunk-PMC3FYPH.js";
import {
  defined_default
} from "./chunk-NCBLZFLY.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
