// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="mahasiswa" options={{ title: "Mahasiswa" }} />
    </Tabs>
  );
}