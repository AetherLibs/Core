import axios, {AxiosInstance} from 'axios';
import {URL} from 'url';

import {Endpoint} from './Endpoints';
import { IncidentAPI, ReportAPI, UpdateAPI } from './api';
import type {API} from './interfaces/API';
import type {StatusReports, StatusUpdates, Incidents} from './interfaces/Result';

export class StatusAPI {
    public readonly api: API;
    private readonly apiClient: AxiosInstance;

    constructor(pageId: string) {
        if (!pageId) {
            throw new Error('StatusAPI requires a pageId');
        }
        const apiUrl = new URL(`https://betteruptime.com/api/v2/status-pages/${pageId}`);

        this.apiClient = axios.create({
            baseURL: apiUrl.href,
        });
        this.api = {
            getIncidents: this.getIncidents,
            getReports: this.getReports,
            getUpdates: this.getUpdates,
            incidents: new IncidentAPI(this.apiClient),
            reports: new ReportAPI(this.apiClient),
            updates: new UpdateAPI(this.apiClient),
        }
    }
    
    public setApiUrl(newUrl: string): void {
        this.apiClient.defaults.baseURL = newUrl;
    }

    private readonly getReports = async (): Promise<StatusReports> => {
        const endpoint = Endpoint.reports();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }

    private readonly getUpdates = async (): Promise<StatusUpdates> => {
        const endpoint = Endpoint.updates();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }

    private readonly getIncidents = async (): Promise<Incidents> => {
        const endpoint = Endpoint.incidents();
        const {data} = await this.apiClient.get(endpoint);
        return data;
    }
}
