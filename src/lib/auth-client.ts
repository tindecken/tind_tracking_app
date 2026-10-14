import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "https://tindapi.tindecken.com/tind_tracking/auth", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "tindtrackingapp",
      storagePrefix: "tindtrackingapp",
      storage: SecureStore,
    }),
  ],
});
