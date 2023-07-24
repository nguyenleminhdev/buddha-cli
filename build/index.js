#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const constant_1 = require("./constant");
const service_1 = require("./service");
// lệnh khởi tạo dự án mới
commander_1.program
    .command('create <type> <name>')
    .description('Tạo mới dự án sử dụng buddha.ts')
    .action((type, name) => {
    (0, service_1.info)(`Đang khởi tạo dự án "${name}"...\n`);
    switch (type) {
        case 'backend':
            (0, service_1.exec)(`git clone ${constant_1.source.backend} ${name}`);
            break;
        case 'frontend':
            (0, service_1.exec)(`git clone ${constant_1.source.frontend} ${name}`);
            break;
        default: return (0, service_1.error)('Lệnh không chính xác!');
    }
    (0, service_1.exec)(`cd ${name} && npm i`);
    (0, service_1.success)(`\nDự án "${name}" đã được khởi tạo hoàn thành ✔︎`);
    (0, service_1.info)(`\nSử dụng lệnh:\n`);
    (0, service_1.primary)(`\tcd  ./${name}`);
    (0, service_1.primary)(`\tnpm run dev`);
    (0, service_1.info)(`\nĐể bắt đầu sử dụng!`);
});
// nhận lệnh
commander_1.program.parse(process.argv);
