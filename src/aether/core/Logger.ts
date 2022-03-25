import chalk from 'chalk';

class Logger {
    name?: string;
    errorhex!: string;
    infohex!: string;
    warnhex!: string;
    
    constructor(name, errorhex, infohex, warnhex) {
        this.name = name;
        this.errorhex = errorhex;
        this.infohex = infohex;
        this.warnhex = warnhex;
    }

    errorc = chalk.hex(this.errorhex);
    infoc = chalk.hex(this.infohex);
    warnc = chalk.hex(this.warnhex);
    overridec = chalk.blue;

    info(logs: string) {
        console.log(this.infoc(`[${this.name}/INFO]: ${logs}`));
    }

    warn(logs: string) {
        console.log(this.warnc(`[${this.name}/WARN]: ${logs}`));
    }

    error(logs: string) {
        console.log(this.errorc(`[${this.name}/ERROR]: ${logs}`));
    }

    override(logs: string) {
        console.log(this.overridec(`[${this.name}/OVERRIDE]: ${logs}`));
    }
}

export default Logger;
