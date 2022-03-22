// Type definitions for aethercore 1.0
// Project: https://github.com/AetherLibs/Core (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: EthanDevelops <https://github.com/AetherLibs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Used for logging.
 * @param name The name of the logger.
 * @param errorhex The hex color for the error log.
 * @param infohex The hex color for the info log.
 * @param warnhex The hex color for the warn log.
 * @returns A Logger object.
 */
declare namespace Logger {
    export interface Logger {
        name?: string;
        errorhex: string;
        infohex: string;
        warnhex: string;
    }

    function info(logs: string): void;
    function warn(logs: string): void;
    function error(logs: string): void;
    function override(logs: string): void;
}

/**
 * Used to create API interfaces easily.
 * @param baseURL The base URL of the API.
 * @returns An API object.
 * @example API.get('/api/v1/user/get').then(res => {// Retrive the response).catch(err => {// Handle error});
 */
declare namespace API {
    export interface API {
        baseURL?: string;
    }

    function get(extender: string): Promise<unknown>;
}
