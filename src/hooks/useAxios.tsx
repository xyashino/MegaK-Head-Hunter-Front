import { useState } from "react";
import { AxiosResponse, isAxiosError } from "axios";
import { AxiosSetup } from "@utils/network/AxiosSetup";
interface AxiosProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object | null;
  headers?: object | null;
}

type AxiosMethod = (
  url: string,
  data?: any,
  config?: any
) => Promise<AxiosResponse<any>>;

const getAxiosMethod = (method: AxiosProps["method"]): AxiosMethod => {
  switch (method) {
    case "GET":
      return AxiosSetup.get;
    case "POST":
      return AxiosSetup.post;
    case "PUT":
      return AxiosSetup.put;
    case "DELETE":
      return AxiosSetup.delete;
    default:
      throw new Error(`Invalid method: ${method}`);
  }
};

export const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: AxiosProps) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const axiosMethod = getAxiosMethod(method);

  const requestLogic = async (
    fetchMethod: () => Promise<AxiosResponse<any, any>>,
    afterSuccessMethod?: () => void
  ) => {
    try {
      setLoading(true);
      const res = await fetchMethod();
      if (afterSuccessMethod) afterSuccessMethod();
      setResponse(response?.data);
      return res.data;
    } catch (e) {
      let message = "Unknown Error";
      console.log(e);
      if (isAxiosError(error)) {
        message =
          error.response?.data.message ??
          error.response?.data.error ??
          error.message;
      }
      setLoading(false);
      console.error(message);
      setError(error);
    }
  };

  const fetchData = (afterSuccessMethod?: () => void) => {
    if (body && headers) {
      return requestLogic(
        () => axiosMethod(url, body, { headers }),
        afterSuccessMethod
      );
    }
    if (body) {
      return requestLogic(() => axiosMethod(url, body), afterSuccessMethod);
    }
    return requestLogic(() => axiosMethod(url), afterSuccessMethod);
  };
  return { fetchData, response, error, loading };
};
