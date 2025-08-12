import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PlanCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const categories: PlanCategory[] = [
  {
    id: "hotels",
    title: "Hotels & Stays",
    icon: "🏨",
    description: "Book accommodations",
  },
  {
    id: "transport",
    title: "Transportation",
    icon: "🚗",
    description: "Flights, trains, car rentals",
  },
  {
    id: "activities",
    title: "Activities",
    icon: "🎭",
    description: "Tours, experiences, attractions",
  },
  {
    id: "dining",
    title: "Dining",
    icon: "🍽️",
    description: "Restaurants and reservations",
  },
  {
    id: "itinerary",
    title: "Itinerary",
    icon: "📋",
    description: "Day-by-day planning",
  },
  {
    id: "budget",
    title: "Budget",
    icon: "💰",
    description: "Track expenses",
  },
];

export default function PlanScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="px-6 py-4 bg-white border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-900">Plan Your Trip</Text>
        </View>

        <ScrollView className="flex-1 px-6 py-4">
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-2">
              Current Trip
            </Text>
            <View className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <Text className="text-blue-900 font-semibold">Summer in Paris</Text>
              <Text className="text-blue-700 text-sm">July 15-22, 2025</Text>
            </View>
          </View>

          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Planning Tools
          </Text>

          <View className="flex-row flex-wrap -mx-2">
            {categories.map((category) => (
              <View key={category.id} className="w-1/2 p-2">
                <Pressable className="bg-white rounded-xl p-4 shadow-sm active:opacity-80">
                  <Text className="text-3xl mb-2">{category.icon}</Text>
                  <Text className="font-semibold text-gray-900 mb-1">
                    {category.title}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {category.description}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}