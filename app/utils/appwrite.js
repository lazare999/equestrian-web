import { Client, Databases, Storage } from "appwrite";

// Initialize the Appwrite client
export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('676ff06500098280e966');

// Initialize the Databases service
export const databases = new Databases(client);

// Initialize the Storage service for file uploads
export const storage = new Storage(client);