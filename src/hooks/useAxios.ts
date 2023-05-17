import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { toast } from "react-hot-toast";
interface AxiosProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: Record<string, any> | null;
  headers?: Record<string, string> | null;
}

type AxiosMethod = (
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
) => Promise<AxiosResponse<unknown>>;

const getAxiosMethod = (method: AxiosProps["method"]): AxiosMethod => {
  switch (method) {
    case "GET":
      return AxiosSetup.get;
    case "POST":
      return AxiosSetup.post;
    case "PATCH":
      return AxiosSetup.patch;
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
  const [loading, setLoading] = useState<boolean>(false);
  const axiosMethod = getAxiosMethod(method);

  const requestLogic = async (
    fetchMethod: () => Promise<AxiosResponse<unknown>>,
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
      let message = "Nieznany błąd";
      if (isAxiosError(error)) {
        message =
          error.response?.data.message ??
          error.response?.data.error ??
          error.message;
      }
      toast.error(Array.isArray(message) ? message.join("\n") : message);
      setError({ show: true, msg: message, type: "error" });
      setLoading(false);
      afterErrorMethod && afterErrorMethod();
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
