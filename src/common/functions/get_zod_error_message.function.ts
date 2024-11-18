import { z } from "zod";

export function GetZodErrorMessage(_err: z.ZodFormattedError<any>): string {
  const first_key = Object.keys(_err)[1] as keyof typeof _err;
  const first_error = _err[first_key] as Record<string, any>;

  const first_message =
    Object.values(first_error)?.[0]?.[0] ?? "Could not get error message";

  return `[\"${first_key}\"]: ${first_message}`;
}
