import { useEffect, useRef, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import * as monaco from 'monaco-editor';

interface MonacoEditorProps {
  value: string;
  language?: string;
  theme?: string;
}

export const MonacoEditor1: React.FC<MonacoEditorProps> = ({ value, language, theme }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { colorMode } = useColorMode();
  const defaultTheme = colorMode === 'light' ? 'light' : 'vs-dark';

  // Instantiate Monaco Editor
  useEffect(() => {
    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
      value,
      language,
      theme: theme ?? defaultTheme,
    };

    if (editorRef.current) {
      const myEditor = monaco.editor.create(editorRef.current, options);
      setEditor(myEditor);
    }

    return () => {
      editor?.dispose();
    };
  }, [defaultTheme, editor, editorRef, language, theme, value]);

  return <div ref={editorRef}></div>;
};
