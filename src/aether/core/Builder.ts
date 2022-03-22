/* eslint-disable @typescript-eslint/no-explicit-any */ // fix this
import Logger from "./Logger";

class Builder {
    name: string;
    type: any;
    args: any[];
    
    constructor(name, type, ...args) {
        this.name = name;
        this.type = type;
        this.args = args;
    }

    build() {
        const log = new Logger("Builder", "#ff0000", "#00ff00", "#ffff00");
        log.info("Building Class " + this.name);
        return new this.type(...this.args);
    }
}
