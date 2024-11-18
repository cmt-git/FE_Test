import { ResponseTemplateFormatter } from "../../response_template/functions/response_template_formatter.function";
import { ResponseTemplateProps } from "../../response_template/interfaces/response_template_props.interface";

export function APIHandlerError(_data: ResponseTemplateProps): void {
  throw new Error(JSON.stringify(ResponseTemplateFormatter(_data)));
}
