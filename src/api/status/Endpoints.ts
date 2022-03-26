/* eslint-disable @typescript-eslint/no-namespace */
export namespace Endpoint {
    const API_V2_BASE = "https://betteruptime.com/api/v2";

    export function reports(): string {
        return `${API_V2_BASE}/reports`;
    }

    export function updates(): string {
        return `${API_V2_BASE}/updates`;
    }

    export function incidents(): string {
        return `${API_V2_BASE}/incidents`;
    }

    export namespace Report {
        export function all(): string {
            return `${API_V2_BASE}/reports`;
        }
    }

    export namespace Update {
        export function all(): string {
            return `${API_V2_BASE}/updates`;
        }
    }

    export namespace Incident {
        export function all(): string {
            return `${API_V2_BASE}/incidents`;
        }
    }
}
