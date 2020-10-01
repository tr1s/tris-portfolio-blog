import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

import dracula from 'prism-react-renderer/themes/ultramin/';

export const Code = ({ codeString, language }) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
