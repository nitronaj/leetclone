import { z } from 'zod';

export const ExampleSchema = z.object({
  id: z.number(),
  inputText: z.string(),
  outputText: z.string(),
  explanation: z.string().optional(),
  img: z.string().optional(),
});

export const ProblemSchema = z.object({
  id: z.string(),
  title: z.string(),
  problemStatement: z.string(),
  examples: z.array(ExampleSchema),
  constraints: z.union([z.string(), z.array(z.string())]),
  order: z.number(),
  starterCode: z.string(),
  handlerFunction: z.union([z.function().args().args().returns(z.boolean()), z.string()]),
  starterFunctionName: z.string(),
});
