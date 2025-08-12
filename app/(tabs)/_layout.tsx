import { Tabs } from "expo-router";
import { View, Text } from "react-native";

function TabBarIcon({ name, color }: { name: string; color: string }) {
  const icons: { [key: string]: string } = {
    trips: "✈️",
    plan: "📅",
    pack: "🎒",
    profile: "👤",
  };

  return (
    <View className="items-center justify-center">
      <Text style={{ fontSize: 24, color }}>{icons[name] || "?"}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="trips"
        options={{
          title: "My Trips",
          tabBarIcon: ({ color }) => <TabBarIcon name="trips" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          title: "Plan",
          tabBarIcon: ({ color }) => <TabBarIcon name="plan" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pack"
        options={{
          title: "Pack",
          tabBarIcon: ({ color }) => <TabBarIcon name="pack" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="profile" color={color} />,
        }}
      />
    </Tabs>
  );
}