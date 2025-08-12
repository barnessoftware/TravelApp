import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ProfileSection {
  id: string;
  title: string;
  icon: string;
}

const sections: ProfileSection[] = [
  { id: "personal", title: "Personal Information", icon: "👤" },
  { id: "travelers", title: "Travel Companions", icon: "👥" },
  { id: "preferences", title: "Travel Preferences", icon: "⚙️" },
  { id: "documents", title: "Travel Documents", icon: "📄" },
  { id: "emergency", title: "Emergency Contacts", icon: "🚨" },
  { id: "settings", title: "App Settings", icon: "🔧" },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="px-6 py-4 bg-white border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-900">Profile</Text>
        </View>

        <ScrollView className="flex-1">
          <View className="bg-white px-6 py-8 items-center border-b border-gray-200">
            <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-4">
              <Text className="text-4xl">👤</Text>
            </View>
            <Text className="text-xl font-semibold text-gray-900 mb-1">
              John Traveler
            </Text>
            <Text className="text-gray-600">john.traveler@example.com</Text>
          </View>

          <View className="px-6 py-4">
            {sections.map((section) => (
              <Pressable
                key={section.id}
                className="bg-white rounded-lg p-4 mb-3 flex-row items-center justify-between active:opacity-80"
              >
                <View className="flex-row items-center">
                  <Text className="text-2xl mr-3">{section.icon}</Text>
                  <Text className="text-gray-900 font-medium">{section.title}</Text>
                </View>
                <Text className="text-gray-400 text-lg">›</Text>
              </Pressable>
            ))}
          </View>

          <View className="px-6 py-4">
            <Pressable className="bg-red-50 rounded-lg p-4 active:opacity-80">
              <Text className="text-red-600 font-medium text-center">Sign Out</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}