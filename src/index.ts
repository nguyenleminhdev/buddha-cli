#!/usr/bin/env node

import { program } from 'commander'
import { source } from './constant'
import { info, success, exec, primary, error } from './service'
const { version } = require('../package.json')

import type { CommandCreateType } from './interface'

// lệnh khởi tạo dự án mới
program
    .command('create <type> <name>')
    .description('Tạo mới dự án sử dụng buddha.ts')
    .action((type: CommandCreateType, name: string) => {
        info(`Đang khởi tạo dự án "${name}"...\n`)

        switch (type) {
            case 'backend':
                exec(`git clone ${source.backend} ${name}`)
                break
            case 'frontend':
                exec(`git clone ${source.frontend} ${name}`)
                break
            case 'ext':
                exec(`git clone ${source.ext} ${name}`)
                break
            default: return error('Lệnh không chính xác!')
        }

        exec(`cd ${name} && npm i`)

        success(`\nDự án "${name}" đã được khởi tạo hoàn thành ✔︎`)

        info(`\nSử dụng lệnh:\n`)

        primary(`\tcd  ./${name}`)

        primary(`\tnpm run dev`)

        info(`\nĐể bắt đầu sử dụng!`)
    })

// Sử dụng số phiên bản từ package.json
program.version(version)

// xử lý các dòng lệnh được truyền vào
program.parse(process.argv)