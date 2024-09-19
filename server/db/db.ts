import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
const adapter = new PrismaNeon(pool);
export const prisma = new PrismaClient({ adapter });
