export interface Incidents {
    indidents: Incident[];
}

export interface StatusUpdates {
    statusUpdates: StatusUpdate[];
}

export interface StatusReports {
    statusReports: StatusReport[];
}

export interface StatusUpdate {
    id: string;
    type: string;
    attributes: {
        message: string;
        published_at: string;
        status_report_id: string;
    }
}

export interface StatusReport {
    id: string;
    type: string;
    attributes: {
        title: string;
        report_type: string;
        starts_at: string;
        ends_at: string;
        status_page_id: string;
        affected_components: string[];
    }
    aggregate_state: string;
}

export interface Incident {
    name: string;
    url: string;
    cause: string;
    response_content: string;
    response_options: string;
    regions: string[];
}
