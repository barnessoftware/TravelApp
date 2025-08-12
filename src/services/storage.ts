import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: string[];
  hotels: Hotel[];
  activities: Activity[];
  packingItems: PackingItem[];
  budget: Budget;
  createdAt: string;
  updatedAt: string;
}

export interface Hotel {
  id: string;
  name: string;
  checkIn: string;
  checkOut: string;
  address: string;
  confirmationNumber?: string;
  notes?: string;
}

export interface Activity {
  id: string;
  name: string;
  date: string;
  time?: string;
  location?: string;
  price?: number;
  notes?: string;
}

export interface PackingItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  packed: boolean;
}

export interface Budget {
  total: number;
  spent: number;
  categories: BudgetCategory[];
}

export interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: {
    currency: string;
    dateFormat: string;
    notifications: boolean;
  };
  emergencyContacts: EmergencyContact[];
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

const STORAGE_KEYS = {
  TRIPS: '@TravelApp:trips',
  USER_PROFILE: '@TravelApp:userProfile',
  CURRENT_TRIP: '@TravelApp:currentTrip',
};

class StorageService {
  async getTrips(): Promise<Trip[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.TRIPS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading trips:', error);
      return [];
    }
  }

  async saveTrips(trips: Trip[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.TRIPS, JSON.stringify(trips));
    } catch (error) {
      console.error('Error saving trips:', error);
      throw error;
    }
  }

  async addTrip(trip: Omit<Trip, 'id' | 'createdAt' | 'updatedAt'>): Promise<Trip> {
    const trips = await this.getTrips();
    const newTrip: Trip = {
      ...trip,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    trips.push(newTrip);
    await this.saveTrips(trips);
    return newTrip;
  }

  async updateTrip(id: string, updates: Partial<Trip>): Promise<Trip | null> {
    const trips = await this.getTrips();
    const index = trips.findIndex(trip => trip.id === id);
    
    if (index === -1) return null;
    
    trips[index] = {
      ...trips[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    await this.saveTrips(trips);
    return trips[index];
  }

  async deleteTrip(id: string): Promise<boolean> {
    const trips = await this.getTrips();
    const filtered = trips.filter(trip => trip.id !== id);
    
    if (filtered.length === trips.length) return false;
    
    await this.saveTrips(filtered);
    return true;
  }

  async getUserProfile(): Promise<UserProfile | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading user profile:', error);
      return null;
    }
  }

  async saveUserProfile(profile: UserProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving user profile:', error);
      throw error;
    }
  }

  async getCurrentTripId(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_TRIP);
    } catch (error) {
      console.error('Error loading current trip:', error);
      return null;
    }
  }

  async setCurrentTripId(tripId: string | null): Promise<void> {
    try {
      if (tripId) {
        await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_TRIP, tripId);
      } else {
        await AsyncStorage.removeItem(STORAGE_KEYS.CURRENT_TRIP);
      }
    } catch (error) {
      console.error('Error setting current trip:', error);
      throw error;
    }
  }

  async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  }
}

export const storage = new StorageService();