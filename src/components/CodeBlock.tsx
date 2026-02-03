import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const ocean = require('react-syntax-highlighter/dist/esm/styles/hljs/ocean');

const CodeBlock = ({ className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={ocean.default}
      wrapLines={true}
      wrapLongLines={true}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;