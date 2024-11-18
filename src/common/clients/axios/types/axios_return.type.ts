import { ResponseTemplateProps } from "@/app/api/common/functions/response_template/interfaces/response_template_props.interface";

export type AxiosReturnType<
  T extends NonNullable<ResponseTemplateProps["data"]>
> = ResponseTemplateProps<T> | undefined;
