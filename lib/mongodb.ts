import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import mongoose from 'mongoose';

// Types for our collections
export interface Category {
  _id?: ObjectId;
  name: string;
  nameFr: string;
  nameZh: string;
  description: string;
  descriptionFr: string;
  descriptionZh: string;
  icon: string;
  slug: string;
  vehicleCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Brand {
  _id?: ObjectId;
  name: string;
  logo?: string;
  description: string;
  descriptionFr: string;
  descriptionZh: string;
  country: string;
  website?: string;
  featured: boolean;
  vehicleCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vehicle {
  _id?: ObjectId;
  name: string;
  brandId: ObjectId;
  brandName: string;
  categoryId: ObjectId;
  categoryName: string;
  type: 'suv' | 'sedan' | 'electric' | 'sports' | 'truck' | 'luxury' | 'coupe' | 'convertible';
  price: number;
  year: number;
  mileage: number;
  fuelType: 'electric' | 'gasoline' | 'diesel' | 'hybrid' | 'plugin-hybrid';
  transmission: 'automatic' | 'manual';
  engine?: string;
  horsepower?: number;
  acceleration?: string; // 0-100 km/h
  topSpeed?: number;
  color: string;
  interiorColor?: string;
  location: string;
  images: string[];
  condition: 'new' | 'used';
  featured: boolean;
  available: boolean;
  description: string;
  descriptionFr: string;
  descriptionZh: string;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser {
  _id?: ObjectId;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'superadmin';
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI && process.env.NODE_ENV === 'production') {
  console.warn('MONGODB_URI environment variable is not set');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db('najem');
}

export async function getCollection<T extends object>(name: string): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>(name);
}

// Collection helpers
export async function getCategoriesCollection() {
  return getCollection<Category>('categories');
}

export async function getBrandsCollection() {
  return getCollection<Brand>('brands');
}

export async function getVehiclesCollection() {
  return getCollection<Vehicle>('vehicles');
}

export async function getAdminUsersCollection() {
  return getCollection<AdminUser>('adminUsers');
}

export { clientPromise, ObjectId };

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
