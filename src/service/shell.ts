import { execSync } from 'child_process'

/**chạy lệnh terminal */
export const exec = (command: string) => execSync(command, { stdio: 'inherit' })