import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    PRIVATE_KEY: z.string().min(1),
    NEXT_PUBLIC_BANDADA_SDK_API_KEY:z.string().min(1),
    NEXT_PUBLIC_GASLESS_SIGNER:z.string().min(1),
  },
  runtimeEnv: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    NEXT_PUBLIC_BANDADA_SDK_API_KEY: process.env.NEXT_PUBLIC_BANDADA_SDK_API_KEY,
    NEXT_PUBLIC_GASLESS_SIGNER: process.env.NEXT_PUBLIC_GASLESS_SIGNER,

  },
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0",
});
