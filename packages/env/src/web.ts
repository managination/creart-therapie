import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_WEB3FORMS_ACCESS_KEY: z.string().min(1, "Web3Forms access key is required"),
  },
  runtimeEnv: {
    VITE_WEB3FORMS_ACCESS_KEY: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  },
  emptyStringAsUndefined: true,
});
