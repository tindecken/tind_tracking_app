import { authClient } from "@/lib/auth-client";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";

export default function SocialSignIn() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login with Google" onPress={handleLogin} />
      )}
    </View>
  );
}
