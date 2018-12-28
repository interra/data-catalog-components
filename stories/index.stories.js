import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconList from '../src/components/HomePageIconList';

const items = [
    { "identifier": "ONE" },
    { "identifier": "TWO" }
]

storiesOf('Home', module)
    .add('List - Loading', () => <HomePageIconList />)
    .add('List - Error', () => <HomePageIconList state={"error"}/>)
    .add('List', () => <HomePageIconList state={"ok"} items={items}/>)