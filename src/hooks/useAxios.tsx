import {useState } from "react";
import { AxiosResponse, isAxiosError } from "axios";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { toast } from "react-hot-toast";
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
  const [error, setError] = useState({ show: false, msg: "", type: "success" });
  const [loading, setLoading] = useState<boolean>(true);
  const axiosMethod = getAxiosMethod(method);

  const requestLogic = async (
    fetchMethod: () => Promise<AxiosResponse<any, any>>,
    afterSuccessMethod?: () => void,
    afterErrorMethod?: () => void
  ) => {
    try {
      setLoading(true);
      const res = await fetchMethod();
      if (afterSuccessMethod) afterSuccessMethod();
      setResponse(response?.data);
      setLoading(false);
      return res.data;
    } catch (error) {
      let message = "Unknown Error";
      if (isAxiosError(error)) {
        message =
          error.response?.data.message ??
          error.response?.data.error ??
          error.message;
      }
      toast["error"](Array.isArray(message) ? message.join("\n") : message);
      setError({ show: true, msg: message, type: "error" });
      setLoading(false);
      if (afterErrorMethod) {
        afterErrorMethod();
      }
    }
  };

  const fetchData = (
    afterSuccessMethod?: () => void,
    afterErrorMethod?: () => void
  ) => {
    if (body && headers) {
      return requestLogic(
        () => axiosMethod(url, body, { headers }),
        afterSuccessMethod,
        afterErrorMethod
      );
    }
    if (body) {
      return requestLogic(
        () => axiosMethod(url, body),
        afterSuccessMethod,
        afterErrorMethod
      );
    }
    return requestLogic(
      () => axiosMethod(url),
      afterSuccessMethod,
      afterErrorMethod
    );
  };
  return { fetchData, setError, error, loading };
};
