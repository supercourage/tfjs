/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
 * =============================================================================
 */

import {Tensor, TensorInfo} from '@tensorflow/tfjs-core';

import {WebGPUBackend} from '../backend_webgpu';

import {BinaryOpType, getBinaryProgram} from './binary_ops';

export function divImpl(
    a: TensorInfo, b: TensorInfo, backend: WebGPUBackend): TensorInfo {
  const program = getBinaryProgram(BinaryOpType.DIV, a.shape, b.shape);
  const output = backend.compileAndRun(program, [a as Tensor, b as Tensor]);
  return output;
}
