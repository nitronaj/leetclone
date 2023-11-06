import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { problems } from '@/app/lib/problems';

export const problemRouter = createTRPCRouter({
  problemById: publicProcedure.input(z.string()).query(({ input }) => {
    const problem = problems[input];

    return problem;
  }),

  getProblemIds: publicProcedure.query(() => {
    return Object.keys(problems);
  }),

  getProblems: publicProcedure.query(() => {
    console.log('get  problems');
    return Object.values(problems);
  }),
});
