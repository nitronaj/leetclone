import { useColorMode } from '@chakra-ui/react';
import Editor, { Theme } from '@monaco-editor/react';

interface MonacoEditorProps {
  value: string;
  language?: string;
  theme?: Theme;
}
export const MonacoEditor: React.FC<MonacoEditorProps> = ({ value, language }) => {
  const { colorMode } = useColorMode();
  const eTheme = colorMode === 'light' ? 'light' : 'vs-dark';

  const options = {
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  };
  return (
    <Editor
      height={'auto'}
      defaultLanguage="javascript"
      defaultValue="// some comment"
      language={language}
      value={value}
      theme={eTheme}
      options={options}
    />
  );
};
