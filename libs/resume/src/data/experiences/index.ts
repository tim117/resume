import { Prisma } from '@prisma/client';
import prisma from '../client';

export type FindExperiencesOptions = {
  activeOnly: boolean;
  where?: Prisma.ExperienceWhereInput;
};

export function findExperiences(
  { activeOnly, where }: FindExperiencesOptions = { activeOnly: true },
) {
  if (activeOnly) {
    where = { ...(where ?? {}), active: true };
  }
  return prisma.experience.findMany({
    select: {
      id: true,
      start: true,
      end: true,
      position: true,
      company: true,
      project: true,
    },
    where,
  });
}
