export interface ResponseTemplateProps<
  T extends Record<string, any> = Record<string, any>
> {
  success: boolean;
  output?: string;
  data?: T;
  reason?: string;
  no_error_popup?: true;
}
