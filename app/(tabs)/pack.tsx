import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

interface PackingItem {
  id: string;
  name: string;
  category: string;
  packed: boolean;
}

export default function PackScreen() {
  const [items, setItems] = useState<PackingItem[]>([
    { id: "1", name: "Passport", category: "Documents", packed: true },
    { id: "2", name: "Travel Insurance", category: "Documents", packed: false },
    { id: "3", name: "T-shirts (5)", category: "Clothing", packed: false },
    { id: "4", name: "Jeans (2)", category: "Clothing", packed: false },
    { id: "5", name: "Toiletries", category: "Personal Care", packed: false },
    { id: "6", name: "Phone Charger", category: "Electronics", packed: false },
  ]);

  const togglePacked = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
  };

  const categories = [...new Set(items.map(item => item.category))];
  const packedCount = items.filter(item => item.packed).length;
  const progress = (packedCount / items.length) * 100;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="px-6 py-4 bg-white border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-900">Packing List</Text>
          <View className="mt-3">
            <View className="flex-row justify-between mb-1">
              <Text className="text-sm text-gray-600">Progress</Text>
              <Text className="text-sm text-gray-600">{packedCount}/{items.length}</Text>
            </View>
            <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className="h-full bg-green-500"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>
        </View>

        <ScrollView className="flex-1 px-6 py-4">
          {categories.map((category) => (
            <View key={category} className="mb-6">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                {category}
              </Text>
              {items
                .filter(item => item.category === category)
                .map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() => togglePacked(item.id)}
                    className="bg-white rounded-lg p-4 mb-2 flex-row items-center justify-between active:opacity-80"
                  >
                    <Text className={`text-gray-900 ${item.packed ? 'line-through opacity-60' : ''}`}>
                      {item.name}
                    </Text>
                    <View className={`w-6 h-6 rounded border-2 items-center justify-center ${
                      item.packed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                    }`}>
                      {item.packed && <Text className="text-white text-xs">✓</Text>}
                    </View>
                  </Pressable>
                ))}
            </View>
          ))}

          <Pressable className="bg-blue-600 rounded-full py-3 px-6 mb-4 active:bg-blue-700">
            <Text className="text-white font-semibold text-center">
              Add Item
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}