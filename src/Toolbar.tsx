import React from 'react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes } from '@lexical/html';

interface ToolbarProps {
  onExportHTML: (html: string) => void;
}

export default function Toolbar({ onExportHTML }: ToolbarProps) {
  const [editor] = useLexicalComposerContext();

  const handleExport = () => {
    editor.update(() => {
      try {
        const html = $generateHtmlFromNodes(editor, null);
        onExportHTML(html);
      } catch (error) {
        console.error('Export error:', error);
        onExportHTML('Ошибка при генерации HTML');
      }
    });
  };

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        className="toolbar-button bold"
      >
        Ж
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        className="toolbar-button italic"
      >
        К
      </button>
      <button 
        className="toolbar-button export" 
        onClick={handleExport}
      >
        Экспорт в HTML
      </button>
    </div>
  );
}