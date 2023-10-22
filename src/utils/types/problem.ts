export interface Example {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
}

// type Callback<I, O, TResult> = (_input: I, _output: O) => TResult;

export interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string | string[];
  order: number;
  starterCode: string;
  // eslint-disable-next-line no-unused-vars
  handlerFunction: ((_callback: <I, O, TResult>(_input: I, _output: O) => TResult) => boolean) | string;
  starterFunctionName: string;
}
