import { problems } from '@/app/lib/problems';

export function GET() {
  const data = Object.values(problems);
  return Response.json({ data, status: 200 });
}
