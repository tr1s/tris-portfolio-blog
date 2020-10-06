import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

import theme from 'prism-react-renderer/themes/nightOwlLight/';

let highlightStart = false;
const highlightClassName = 'gatsby-highlight-code-line';

const highlightLine = (lineArray, lineProps) => {
  let shouldExclude = false;

  lineArray.forEach((line, i) => {
    const content = line.content;

    // Highlight lines with "// highlight-line"
    if (content.replace(/\s/g, '').includes('//highlight-line')) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`;
      line.content = content.replace('// highlight-line', '').replace('//highlight-line', '');
    }

    // Stop highlighting
    if (!!highlightStart && content.replace(/\s/g, '') === '//highlight-end') {
      highlightStart = false;
      shouldExclude = true;
    }

    // Start highlighting after "//highlight-start"
    if (content.replace(/\s/g, '') === '//highlight-start') {
      highlightStart = true;
      shouldExclude = true;
    }
  });

  // Highlight lines between //highlight-start & //highlight-end
  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`;
  }

  return shouldExclude;
};

export const Code = ({ codeString, language }) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              const shouldExclude = highlightLine(line, lineProps);
              return !shouldExclude ? (
                <div {...lineProps} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ) : null;
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
