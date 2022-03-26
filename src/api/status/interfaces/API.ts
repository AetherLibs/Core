import { ReportAPI, UpdateAPI, IncidentAPI } from '../api'
import type { StatusUpdates, StatusReports, Incidents } from "./Result";

export interface API {
    getReports(): Promise<StatusReports>;
    getUpdates(): Promise<StatusUpdates>;
    getIncidents(): Promise<Incidents>;

    reports: ReportAPI;
    updates: UpdateAPI;
    incidents: IncidentAPI;
}
