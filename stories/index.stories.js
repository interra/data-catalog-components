import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconListItem from '../src/components/HomePageIconListItem';

import './style.css'

var item = {};
item.title = "My name is Jhon";
item.ref = "https://google.com";
item.columnWidth = 4;

storiesOf('Home', module)
    .add('ListItem', () => <HomePageIconListItem item={item}/>);