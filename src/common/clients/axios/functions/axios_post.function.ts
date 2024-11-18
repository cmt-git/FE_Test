import { ResponseTemplateDataType } from "@/app/api/common/functions/response_template/interfaces/types/response_template_props.type";
import { AxiosClient } from "../axios.client";
import { AxiosContentType } from "../types/axios.type";
import { AxiosReturnType } from "../types/axios_return.type";

export function AxiosPost<K extends Record<string, any>>(_data: K | FormData) {
  return {
    i: async <T extends ResponseTemplateDataType>(
      _url: string,
      _headers: { "Content-Type": AxiosContentType }
    ): Promise<AxiosReturnType<T>> =>
      await AxiosClient.post(_url, _data, {
        headers: _headers,
      })
        .then(async (res) => {
          return res.data;
        })
        .catch((err) => {
          return null;
        }),
  };
}
