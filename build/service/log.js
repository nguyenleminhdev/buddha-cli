"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = exports.primary = exports.info = void 0;
const chalk_1 = require("chalk");
/**log ra màu xanh blue */
const info = (...argv) => console.log((0, chalk_1.blue)(argv));
exports.info = info;
/**log ra màu xanh cyan */
const primary = (...argv) => console.log((0, chalk_1.cyan)(argv));
exports.primary = primary;
/**log ra màu xanh lá cây */
const success = (...argv) => console.log((0, chalk_1.green)(argv));
exports.success = success;
/**log màu đỏ */
const error = (...argv) => console.log((0, chalk_1.red)(argv));
exports.error = error;
