import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
}

export default function TripsScreen() {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: "1",
      name: "Summer in Paris",
      destination: "Paris, France",
      startDate: "2025-07-15",
      endDate: "2025-07-22",
      travelers: 2,
    },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="px-6 py-4 bg-white border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-900">My Trips</Text>
        </View>

        <ScrollView className="flex-1 px-6 py-4">
          {trips.length === 0 ? (
            <View className="flex-1 items-center justify-center py-20">
              <Text className="text-6xl mb-4">🌍</Text>
              <Text className="text-xl font-semibold text-gray-900 mb-2">
                No trips yet
              </Text>
              <Text className="text-gray-600 text-center mb-8">
                Start planning your next adventure
              </Text>
              <Pressable className="bg-blue-600 rounded-full py-3 px-6 active:bg-blue-700">
                <Text className="text-white font-semibold">Create New Trip</Text>
              </Pressable>
            </View>
          ) : (
            <>
              {trips.map((trip) => (
                <Pressable
                  key={trip.id}
                  className="bg-white rounded-xl p-4 mb-4 shadow-sm active:opacity-80"
                >
                  <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-lg font-semibold text-gray-900 flex-1">
                      {trip.name}
                    </Text>
                    <Text className="text-2xl">📍</Text>
                  </View>
                  <Text className="text-gray-600 mb-2">{trip.destination}</Text>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-gray-500">
                      {new Date(trip.startDate).toLocaleDateString()} -{" "}
                      {new Date(trip.endDate).toLocaleDateString()}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      {trip.travelers} travelers
                    </Text>
                  </View>
                </Pressable>
              ))}

              <Pressable className="bg-blue-600 rounded-full py-3 px-6 mt-4 active:bg-blue-700">
                <Text className="text-white font-semibold text-center">
                  Add New Trip
                </Text>
              </Pressable>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}