"use strict";

var _LedgerCommU2F = require("./LedgerCommU2F");

var _LedgerCommU2F2 = _interopRequireDefault(_LedgerCommU2F);

var _LedgerSky = require("./LedgerSky");

var _LedgerSky2 = _interopRequireDefault(_LedgerSky);

var _LedgerEth = require("./LedgerEth");

var _LedgerEth2 = _interopRequireDefault(_LedgerEth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO IMO in the future:
//export { LedgerComm, LedgerSky, LedgerEth };
// for now, non breaking version:
module.exports = {
  comm_u2f: _LedgerCommU2F2.default,
  sky: _LedgerSky2.default,
  eth: _LedgerEth2.default
}; /********************************************************************************
    *   Ledger Node JS API
    *   (c) 2016-2017 Ledger
    *
    *  Licensed under the Apache License, Version 2.0 (the "License");
    *  you may not use this file except in compliance with the License.
    *  You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    *  Unless required by applicable law or agreed to in writing, software
    *  distributed under the License is distributed on an "AS IS" BASIS,
    *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    *  See the License for the specific language governing permissions and
    *  limitations under the License.
    ********************************************************************************/
