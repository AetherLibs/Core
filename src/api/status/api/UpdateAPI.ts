import type { AxiosInstance } from "axios";

import { Endpoint } from '../Endpoints';
import type { StatusUpdates } from "../interfaces/Result";

export class UpdateAPI {
    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    public async getAll(): Promise<StatusUpdates> {
        const endpoint = Endpoint.Update.all();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }
}
