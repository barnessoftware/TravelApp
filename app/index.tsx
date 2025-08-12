import { View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-8">
        <View className="flex-1 justify-center items-center">
          <View className="mb-8">
            <Text className="text-5xl font-bold text-center text-gray-900 mb-4">
              TravelApp
            </Text>
            <Text className="text-xl text-center text-gray-600">
              Plan your perfect holiday
            </Text>
          </View>

          <View className="w-64 h-64 bg-gray-100 rounded-full mb-12 items-center justify-center">
            <Text className="text-6xl">✈️</Text>
          </View>

          <Text className="text-center text-gray-600 mb-12 px-8">
            Organize your trips, manage travel companions, book hotels, plan activities, and never forget what to pack.
          </Text>
        </View>

        <Link href="/(tabs)" asChild>
          <Pressable className="bg-blue-600 rounded-full py-4 px-8 active:bg-blue-700">
            <Text className="text-white text-center text-lg font-semibold">
              Get Started
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}