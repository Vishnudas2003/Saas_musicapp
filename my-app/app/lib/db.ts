import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

// create schema, migrate your db, create your client