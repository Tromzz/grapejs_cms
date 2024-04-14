import GrapesJsEditor, { EditorProps } from '@grapesjs/react';
import { defaultEditorProps } from './common';
import type { Editor } from 'grapesjs';

export default function DefaultEditor(props: Partial<EditorProps>){
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GrapesJsEditor
    className="gjs-default-editor"
    {...defaultEditorProps}
          {...props}
      grapesjs="https://unpkg.com/grapesjs"
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
      }}
      plugins={[
        {
          id: 'gjs-blocks-basic',
          src: 'https://unpkg.com/grapesjs-blocks-basic',
        },
      ]}
      onEditor={onEditor}
    />
  );
}
