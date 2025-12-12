import { queryOptions } from '@tanstack/react-query';
import { getGithubGrass } from './getGithubGrass';

export const queriesOptions = {
  githubGrassOptions: (id: string) =>
    queryOptions({
      queryKey: ['githubGrass', id],
      queryFn: () => getGithubGrass(id),
    }),
};
