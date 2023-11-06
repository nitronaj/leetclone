import { createServerSideHelpers } from '@trpc/react-query/server';

import { type AppRouter, appRouter } from '@/server/api/root';
import { db } from '@/server/db';

import { transformer } from './shared';

export const trcpHelper = createServerSideHelpers<AppRouter>({
  router: appRouter,
  ctx: {
    db,
  },
  transformer,
});
