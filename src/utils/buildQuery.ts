export const buildQueryUrl = (baseUrl: string, params: { [key:string]: string | number }) => {
    const url = new URL(baseUrl);
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value as string);
    }
    return url.toString();
};

