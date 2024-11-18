import { ResponseTemplateDataType } from "@/app/api/common/functions/response_template/interfaces/types/response_template_props.type";
import { AxiosContentType } from "../types/axios.type";
import { AxiosReturnType } from "../types/axios_return.type";
import { AxiosClient } from "../axios.client";

export async function AxiosPut<T extends ResponseTemplateDataType>(
  _url: string,
  headers: { "Content-Type": AxiosContentType },
  _data: { [key: string]: any } | FormData
): Promise<AxiosReturnType<T>> {
  return await AxiosClient.put(_url, _data, {
    headers,
  })
    .then(async (res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("[!] Axios PUT Error: ", err);
      return null;
    });
}
