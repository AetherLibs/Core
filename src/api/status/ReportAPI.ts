import type { AxiosInstance } from "axios";

import { Endpoint } from './Endpoints';
import type { StatusReports } from "./interfaces/Result";

export class ReportAPI {
    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    public async getAll(): Promise<StatusReports> {
        const endpoint = Endpoint.Report.all();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }
}
