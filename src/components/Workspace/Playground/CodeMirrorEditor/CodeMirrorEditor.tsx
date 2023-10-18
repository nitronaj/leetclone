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

  const defaultValue = `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
 var twoSum = function(nums, target) {
	 const map = new Map();

	 for(let i = 0; i < nums.length; i++) {
		 let cur = nums[i];
		 let x = target - cur;
		 if(map.has(x)) {
			 return [map.get(x), i]
		 }

		 map.set(cur, i)
	 }

	 return undefined;
 };`;
  return (
    <CodeMirror
      minHeight="100%"
      theme={theme ?? defaultTheme}
      extensions={[javascript({ jsx: true })]}
      value={value ?? defaultValue}
      style={{ fontSize: '14px', outline: 'none' }}
    />
  );
};

export default CodeMirrorEditor;
