import { Tabs } from "expo-router/js-tabs";

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="summary" options={{ title: "Summary" }} />
      <Tabs.Screen name="transaction" options={{ title: "Transaction" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
