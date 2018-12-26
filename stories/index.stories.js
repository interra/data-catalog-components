import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import H1 from '../src/components/H1';
import A from '../src/components/A';
import Footer from '../src/components/Footer';
import NotFoundPage from '../src/components/NotFoundPage';
import FeaturePage from '../src/components/FeaturePage';
import HomePage from '../src/components/HomeAppWrapper';


storiesOf('HTML Elements', module)
    .add('H1', () => <H1>Heading 1</H1>)
    .add('A', () => <A href="https://github.com/GetDkan">This is a link</A>);

storiesOf('Footer', module)
    .add('default', () => <Footer />);


var homePageIcons = false;
var results = false;

storiesOf('Pages', module)
    .add('Not Found', () => <NotFoundPage />)
    .add('Feature', () => <FeaturePage />)
    .add('Home', () => <HomePage homePageIcons={homePageIcons} results={results} />);
