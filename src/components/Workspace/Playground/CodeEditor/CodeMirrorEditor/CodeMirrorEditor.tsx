import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { javascript } from '@codemirror/lang-javascript';
import { basicLight } from '@uiw/codemirror-theme-basic';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';

import './CodeMirrorEditor.css';

interface CodeMirrorEditorProps {
  value?: string;
  theme?: 'light' | 'dark' | 'none';
}

const CodeMirrorEditor: React.FC<CodeMirrorEditorProps> = ({ value, theme }) => {
  const { colorMode } = useColorMode();
  const defaultTheme = colorMode === 'light' ? basicLight : vscodeDark;

  const defaultValue = `
/**
	write your code here
*/
function myCode() {
	// starts here
	return undefined;
};`;

  return (
    <CodeMirror
      theme={theme ?? defaultTheme}
      extensions={[javascript({ jsx: true })]}
      value={value ?? defaultValue}
      style={{ fontSize: '14px', outline: 'none' }}
    />
  );
};

export default CodeMirrorEditor;
