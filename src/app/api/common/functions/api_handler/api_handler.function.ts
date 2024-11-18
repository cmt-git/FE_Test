import { ResponseTemplateProps } from "@/app/api/common/functions/response_template/interfaces/response_template_props.interface";
import { NextResponse } from "next/server";
import { ResponseTemplate } from "../response_template/response_template.function";

//region: API Handler
export async function APIHandler<
  T extends NonNullable<ResponseTemplateProps["data"]>
>(
  _data: () => Promise<NextResponse<ResponseTemplateProps<T>>>,
  _settings?: {
    no_error_popup: ResponseTemplateProps["no_error_popup"];
  }
): Promise<NextResponse<ResponseTemplateProps<T>>> {
  try {
    return await _data();
  } catch (err) {
    if (err instanceof Error) {
      try {
        const data = JSON.parse(err.message) as ResponseTemplateProps<T>;
        return ResponseTemplate({
          ...data,
          no_error_popup: _settings?.no_error_popup,
        });
      } catch (e) {
        return ResponseTemplate({
          success: false,
          output: err.message,
          no_error_popup: _settings?.no_error_popup,
        });
      }
    } else {
      return ResponseTemplate({
        success: false,
        output: "Something went wrong. Please try again later.",
        no_error_popup: _settings?.no_error_popup,
      });
    }
  }
}
