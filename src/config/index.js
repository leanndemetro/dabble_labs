import { config } from "dotenv";

const { parsed } = config()

export const {
    PORT,
    MONGODB_URI
} = parsed