"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const child_process_1 = require("child_process");
/**chạy lệnh terminal */
const exec = (command) => (0, child_process_1.execSync)(command, { stdio: 'inherit' });
exports.exec = exec;
