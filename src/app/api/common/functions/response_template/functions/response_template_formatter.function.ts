import { ResponseTemplateProps } from "../interfaces/response_template_props.interface";

export function ResponseTemplateFormatter<
  T extends ResponseTemplateProps = ResponseTemplateProps
>(_data: T): T {
  const new_data = {
    ..._data,
  };

  if (new_data.output) {
    if (new_data.output?.[new_data.output?.length - 1] != ".") {
      new_data.output += ".";
    }
  } else {
    if (new_data.success) {
      new_data.output = "Success.";
    } else {
      new_data.output = "Something failed.";
    }
  }

  return new_data;
}
