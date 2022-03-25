import type { AxiosInstance } from "axios";

import {Endpoint} from '../Endpoints';
import type { Incidents } from "../interfaces/Result";

export class IncidentAPI {
    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    public async getAll(): Promise<Incidents> {
        const endpoint = Endpoint.Incident.all();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }
}
