import { Tabs } from "expo-router/js-tabs";

export default function DashboardLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Summary" }} />
      <Tabs.Screen name="transaction" options={{ title: "Transaction" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
