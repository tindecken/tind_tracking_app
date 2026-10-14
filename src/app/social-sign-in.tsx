import { authClient } from "@/lib/auth-client";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { Button } from "react-native";

export default function SocialSignIn() {
  const handleLogin = async () => {
    console.log("Logging in with Google...");
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: Linking.createURL("/dashboard"),
      additionalParams: { prompt: "select_account" },
    });
    if (error) {
      // handle error
      return;
    }
    router.replace("/dashboard");
  };
  return <Button title="Login with Google" onPress={handleLogin} />;
}
