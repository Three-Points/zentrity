import chalk from 'chalk'

/**
 * @description Success response ✔
 * @param {string} message Success message. */
export const complete = (message: string) => {
    console.log(`${chalk.greenBright('✔ Success:')} ${message}`)
}

/**
 * @description Fail response ✖
 * @param {string} message Error message.
 * @param {string} error Error trace message. */
export const fail = (message: string, error?: string) => {
    console.log(`${chalk.redBright('✖ Error:')} ${message}`)
    console.log(`${chalk.cyanBright('◌')} ${error}`)
}

/**
 * @description Info response ℹ
 * @param {string} message Info message. */
export const info = (message: string) => {
    console.log(`${chalk.yellowBright('ℹ Info:')} ${message}`)
}
