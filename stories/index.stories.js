import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconList from '../src/components/HomePageIconList';

import SearchListItem from '../src/components/SearchListItem';
import SearchList from '../src/components/SearchList';

var items = [
    { "identifier": "ONE" },
    { "identifier": "TWO" }
]

storiesOf('Home', module)
    .add('List - Loading', () => <HomePageIconList />)
    .add('List - Error', () => <HomePageIconList state={"error"}/>)
    .add('List', () => <HomePageIconList state={"ok"} items={items}/>)

items = [
    {
        "identifier": 1234,
        "title": "This is a title",
        "description": "I am an item",
        "modified": "1/12/2018",
        "publisher": "Publish Inc."
    },
    {
        "identifier": 5678,
        "title": "This is a title 2",
        "description": "I am an item 2",
        "modified": "2/12/2018",
        "publisher": "Publish Inc."
    }
]

storiesOf('Search', module)
    .add('Item', () => <SearchListItem />)
    .add('List - Loading', () => <SearchList />)
    .add('List - Error', () => <SearchList state={"error"}/>)
    .add('List - Empty', () => <SearchList state={"ok"} />)
    .add('List', () => <SearchList state={"ok"} items={items} />)