import { green, blue, red, cyan } from 'chalk'

/**log ra màu xanh blue */
export const info = (...argv: any) => console.log(blue(argv))

/**log ra màu xanh cyan */
export const primary = (...argv: any) => console.log(cyan(argv))

/**log ra màu xanh lá cây */
export const success = (...argv: any) => console.log(green(argv))

/**log màu đỏ */
export const error = (...argv: any) => console.log(red(argv))