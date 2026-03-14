import type { User } from '../../../types/user';

export const getJobTitle = (data: User[]) => {
  const result = new Set<string>();

  for (const { group } of data) {
    result.add(group);
  }

  return Array.from(result);
};
