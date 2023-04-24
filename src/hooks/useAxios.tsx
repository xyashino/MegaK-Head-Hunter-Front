import {useState, useLayoutEffect} from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

interface AxiosProps {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: object | null;
    headers?: object | null;
}

type AxiosMethod = (url: string, data?: any, config?: any) => Promise<AxiosResponse<any>>;

const getAxiosMethod = (method: AxiosProps['method']): AxiosMethod => {
    switch (method) {
        case 'GET':
            return axios.get;
        case 'POST':
            return axios.post;
        case 'PUT':
            return axios.put;
        case 'DELETE':
            return axios.delete;
        default:
            throw new Error(`Invalid method: ${method}`);
    }
};

export const useAxios = ({ url, method, body = null, headers = null }: AxiosProps) => {
    const [response, setResponse] = useState<AxiosResponse | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const axiosMethod = getAxiosMethod(method);

    const fetchData = () => {
        axiosMethod(url, body, { headers })
            .then((res: AxiosResponse) => {
                setResponse(res);
            })
            .catch((err: AxiosError) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useLayoutEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};