import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import H1 from '../src/components/H1';
import A from '../src/components/A';

import Header from "../src/components/Header";
import Footer from '../src/components/Footer';

import NotFoundPage from '../src/components/NotFoundPage';
import FeaturePage from '../src/components/FeaturePage';

import HomePage from '../src/components/HomeAppWrapper';
import HomePageContent from '../src/components/HomePage';
import HomePageIconList from '../src/components/HomePageIconList';

import SearchListItem from '../src/components/SearchListItem';
import SearchList from '../src/components/SearchList';



storiesOf('HTML Elements', module)
    .add('H1', () => <H1>Heading 1</H1>)
    .add('A', () => <A href="https://github.com/GetDkan">This is a link</A>);


var results = false;
var loadingHomePageIcons = false;
var error = false;
var homePageIcons = [{"identifier": "ONE"}, {"identifier": "TWO"}, {"identifier": "THREE"}];

storiesOf('Home', module)
    .add('Full', () => <HomePage homePageIcons={homePageIcons} results={results} />)
    .add('Full - Header', () => <Header />)
    .add('Full - Content', () => <HomePageContent homePageIcons={homePageIcons} />)
    .add('Full - Content - IconList', () => <HomePageIconList error={error} homePageIcons={homePageIcons} loadingHomePageIcons={loadingHomePageIcons}/>)
    .add('Full - Footer', () => <Footer />);

storiesOf('Pages', module)
    .add('Not Found', () => <NotFoundPage />)
    .add('Feature', () => <FeaturePage />);

var item = {};
item.doc = {};
item.doc.title = "My name is Jhon";
item.doc.identifier = "1234";
item.doc.description = "Hello this is a description and what not";
item.doc.publisher = {};
item.doc.publisher.name = "Publisher Inc."

var results = [item];
var resultmessage = "I am a message";
storiesOf('Search', module)
    .add('ListItem', () => <SearchListItem item={item}/>)
    .add('List', () => <SearchList error={error} results={results} resultmessage={resultmessage} />);