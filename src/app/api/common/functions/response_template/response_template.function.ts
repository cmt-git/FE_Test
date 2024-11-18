import { NextResponse } from "next/server";
import { ResponseTemplateProps } from "./interfaces/response_template_props.interface";
import { ResponseTemplateFormatter } from "./functions/response_template_formatter.function";

export function ResponseTemplate<
  T extends ResponseTemplateProps["data"] = ResponseTemplateProps["data"],
  K extends Record<string, any> = Record<string, any>
>(
  _data: ResponseTemplateProps<NonNullable<T>>,
  _cookie?: K
): NextResponse<ResponseTemplateProps<NonNullable<T>>> {
  const new_data = ResponseTemplateFormatter<typeof _data>(_data);

  const response = NextResponse.json(new_data);

  return response;
}
