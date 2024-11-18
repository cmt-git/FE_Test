import { ResponseTemplateDataType } from "@/app/api/common/functions/response_template/interfaces/types/response_template_props.type";
import { AxiosClient } from "../axios.client";
import { AxiosReturnType } from "../types/axios_return.type";

export async function AxiosGet<T extends ResponseTemplateDataType>(
  _url: string,
  headers: { "Content-Type": "application/json" }
): Promise<AxiosReturnType<T>> {
  return await AxiosClient.get(_url, {
    headers,
  })
    .then(async (res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("[!] Axios GET Error: ", err);
      return null;
    });
}
