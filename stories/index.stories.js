import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconList from '../src/components/HomePageIconList';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';

import OrgBlock from '../src/components/OrgBlock';
import Hero from '../src/components/Hero';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import FooterCustom from '../src/components/Footer/FooterCustom';
import NavBar from '../src/components/NavBar';
import Logo from '../src/components/Logo';
import StyledButton from '../src/components/Button';

storiesOf('General', module)
    .add('Logo', () => <Logo />)
    .add('Header', () => <Header/>)
    .add('NavBar', () => <NavBar />)
    .add('Button', () => <StyledButton color="primary">primary</StyledButton>)
    .add('Preview Button', () => <StyledButton color="primary"><i class="fa fa-bar-chart"></i> preview</StyledButton>)
    .add('Download Button', () => <StyledButton color="primary"><i class="fa fa-download"></i> download</StyledButton>)
    .add('Hero Button', () => <StyledButton className="btn-hero" onClick="">Learn More</StyledButton>)

    .add('Close Button', () => <StyledButton className="close"><span aria-hidden="true">×</span></StyledButton>)

var topics = [
    {
        "identifier": "Morbi congue ",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/json.svg",
        "alt": "airplane"
    },
    {
        "identifier": "Suspendisse commodo",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/openweb.svg",
        "alt": "backpack"
    },
    {
        "identifier": "Maecenas mauris",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compass.svg",
        "alt": "balloon"
    },
    {
        "identifier": "Praesent sollicitudin",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/odf.svg",
        "alt": "clock"
    }
]

storiesOf('Home', module)
    .add('Topics List', () => <HomePageIconList items={topics} />)
    .add('Hero', () => <Hero />)

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
    .add('List', () => <SearchList items={items} />)


storiesOf('Organization', module)
    .add('Org Block', () => <OrgBlock />)

storiesOf('Footer', module)
    .add('Footer', () => <Footer />)
    .add('Footer Custom', () => <FooterCustom />)

