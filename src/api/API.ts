class API {
    baseURL?: string;

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(extender) {
        return fetch(`${this.baseURL}${extender}`);
    }
}

export default API;
