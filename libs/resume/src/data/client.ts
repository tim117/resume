import { PrismaClient } from '@prisma/client';

export type CreateInput<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;

export default new PrismaClient();
