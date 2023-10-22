import { Stack } from '@chakra-ui/react';

import Workspace from '@/components/Workspace/Workspace';
import { NavbarHeight } from '@/utils/constants';
import { problems } from '@/utils/problems';

type ProblemPageProps = {
  params: { pid: string };
};

// Return a list of `params` to populate the [pid] dynamic segment
export async function generateStaticParams() {
  return Object.keys(problems).map((key) => ({
    pid: key,
  }));
}

const ProblemPage: React.FC<ProblemPageProps> = ({ params: { pid } }) => {
  return (
    <Stack overflow={'auto'} spacing={0} h={`calc(100vh - ${NavbarHeight}px)`}>
      <Workspace pid={pid} />
    </Stack>
  );
};

export default ProblemPage;
