import { Stack } from '@chakra-ui/react';

import Workspace from '@/app/ui/Workspace/Workspace';
import { trcpHelper } from '@/trpc/helper';
import { NavbarHeight } from '@/utils/constants';

interface ProblemPageProps {
  params: { pid: string };
}

// Return a list of `params` to populate the [pid] dynamic segment
export async function generateStaticParams() {
  const data: string[] = await trcpHelper.problem.getProblemIds.fetch();

  return data?.map((key) => ({
    pid: key,
  }));
}

const ProblemPage: React.FC<ProblemPageProps> = ({ params: { pid } }) => {
  return (
    <Stack key={pid} overflow={'auto'} spacing={0} h={`calc(100vh - ${NavbarHeight}px)`}>
      <Workspace pid={pid} />
    </Stack>
  );
};

export default ProblemPage;
