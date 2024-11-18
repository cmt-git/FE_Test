import { NextRequest, NextResponse } from "next/server";
import { APIHandler } from "./functions/api_handler/api_handler.function";
import { ResponseTemplate } from "./functions/response_template/response_template.function";
import { ResponseTemplateProps } from "./functions/response_template/interfaces/response_template_props.interface";

/**
 *
 *
 *
 *  ? FOR COPYING ONLY!!
 *
 *
 *
 */

export async function POST(
  req: NextRequest
): Promise<NextResponse<ResponseTemplateProps>> {
  // ! ROUTER MIDDLEWARE
  // ! ROUTER MIDDLEWARE
  // ! ROUTER MIDDLEWARE
  // ! ROUTER MIDDLEWARE
  // ! ROUTER MIDDLEWARE
  // ! ROUTER MIDDLEWARE
  // const req_body = await RequestMiddleware<{
  //   data: z.infer<typeof request_schema>;
  //   rateLimitAllow: true;
  //   requireAuthentication: false;
  // }>(req, {
  //   uuid: ,
  //   auth: false,
  //   ratelimit: { minutes: 1, request_per_minute: 10 },
  // });

  return await APIHandler(async () => {
    return ResponseTemplate({
      success: false,
    });
  });
}
