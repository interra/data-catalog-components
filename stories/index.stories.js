import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconList from '../src/components/HomePageIconList';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';

import { ThemeProvider } from 'styled-components'
import pqdcTheme from '../src/theme/default'
import '../src/theme/styles.css'

var topics = [
    {
        "identifier": "ONE",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/json.svg",
        "alt": "airplane"
    },
    {
        "identifier": "TWO",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/openweb.svg",
        "alt": "backpack"
    },
    {
        "identifier": "THREE",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compass.svg",
        "alt": "balloon"
    },
    {
        "identifier": "FOUR",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/odf.svg",
        "alt": "clock"
    }
]

storiesOf('Home', module)
    .add('Topics List - Loading', () => <HomePageIconList />)
    .add('Topics List - Error', () => <HomePageIconList state={"error"}/>)
    .add('Topics List', () => <ThemeProvider theme={pqdcTheme}><HomePageIconList state={"ok"} items={topics} /></ThemeProvider>)

var themes = [
    {
      "identifier": 1,
      "title": "Healthcare",
      "icon": "physician",
      "link": "url"
    }
]

var distributions = [
  {
    "identifier": 1,
    "format": "csv"
  },
  { "identifier":2,
    "format": "json"
  },
  { "identifier":3,
    "format": "pdf"
  }
]

var items = [
    {
        "identifier": 1234,
        "title": "Varicella (Chickenpox) Incidence and Mortality, Before and After the Vaccine",
        "description": "Centers for Disease Control and Prevention data regarding varicella (chickenpox) virus incidence and mortality rates.",
        "modified": "1/12/2018",
        "publisher": "Publish Inc.",
        "format": distributions,
        "theme": themes
    },
    {
        "identifier": 5678,
        "title": "U.S. Tobacco Usage Statistics",
        "description": "Statistics on U.S. smoking rates and tobacco taxation rates for all fifty states. *Source:* Centers for Disease Control and Prevention, 2015 https://www.cdc.gov/tobacco/data_statistics/state_data/ [1] ",
        "modified": "2/12/2018",
        "publisher": "Publish Inc.",
        "format": distributions,
        "theme": themes
    }
]

storiesOf('Search', module)
    .add('Item', () => <SearchListItem />)
    .add('List - Loading', () => <SearchList />)
    .add('List - Error', () => <SearchList state={"error"}/>)
    .add('List - Empty', () => <SearchList state={"ok"} />)
    .add('List', () => <ThemeProvider theme = { pqdcTheme }><SearchList state={"ok"} items={items} /></ThemeProvider>)
