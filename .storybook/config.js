import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';
import React from 'react';

import { css } from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Theme from '../src/theme/default'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/theme/globalStyles';

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        {storyFn()}
      </ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
