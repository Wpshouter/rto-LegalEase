import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin, jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db(process.env.DATABASE_NAME)

export const auth = betterAuth({
  //...other options
    database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  user: {
    additionalFields: {
      role: {
      type: "string",
      required: false,
      default: "client",
      input: true,
    },
    },
  },
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 

  }, 
  plugins: [
    jwt(),
    admin()
  ]
});