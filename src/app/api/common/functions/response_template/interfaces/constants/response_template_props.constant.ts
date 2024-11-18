import { ResponseTemplateProps } from "@/app/api/common/functions/response_template/interfaces/response_template_props.interface";

const no_error_popup_key: keyof ResponseTemplateProps =
  "no_error_popup" as const;

const output_key: keyof ResponseTemplateProps = "output" as const;

export const ResponseTemplatePropsConstant = {
  no_error_popup_key,
  output_key,
};
