import React from 'react';

interface HtmlOutputProps {
  html: string;
}

export default function HtmlOutput({ html }: HtmlOutputProps) {
  return (
    <div className="html-output">
      <h3>HTML экспорт:</h3>
      <pre>{html || 'Здесь будет отображаться HTML'}</pre>
    </div>
  );
}