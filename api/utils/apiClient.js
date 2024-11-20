const axios = require('axios');
const operationLog = require("./logHandler").operationLog;

const apiClient = (apiEndPoint, apiHeader) => {
    const api = axios.create({
        baseURL: apiEndPoint,
        headers: {
            ...apiHeader,
        },
    });

    api.interceptors.request.use(async (config) => {
        const section = config.metadata?.section ?? '';
        const opId = await operationLog({ section, request: JSON.stringify(config.data), url: `${config.baseURL}${config.url}` });
        config.metadata = {
            ...config.metadata,
            opId,
        };
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    api.interceptors.response.use(async (response) => {
        const { config, data } = response;
        await operationLog({ response: JSON.stringify(data) }, config.metadata.opId);
        return response;
    }, (error) => {
        return Promise.reject(error);
    });

    return api;
};

module.exports = apiClient;
