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
import Pagination from '../src/components/Pagination';
import Blocks from '../src/components/Blocks';
import StepsBlock from '../src/components/Blocks/StepsBlock';
import StatBlock from '../src/components/Blocks/StatBlock';
import Dataset from '../src/components/Dataset';
import Resource from '../src/components/Resource';

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
        "identifier": "Suspendisse",
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

var stats = [
  {
    "content": "Dataset Downloads",
    "title": "582k",
    "icon": "fa fa-download",
    "ref": "1"
  },
  {
    "content": "API Queries Run",
    "title": "317k",
    "icon": "fa fa-refresh",
    "ref": "2"
  },
  {
    "content": "Total Datasets",
    "title": "2.63k",
    "icon": "fa fa-database",
    "ref": "3"
  }
]

var api = [
  {
    "title": "Step One",
    "content": "Lorem ipsum dolor sit amet, laudem persius duo ut. Scripta eruditi est eu, vel iudico putent nonumes ex, vel at graeci labitur. Libris deterruisset mel ut. Est id minim conceptam assueverit. Eum deleniti recusabo voluptatibus no, paulo omittantur te vis.",
    "step": "1",
    "ref": "11"
  },
  {
    "title": "Step Two",
    "content": "Quo illud ridens ea, has voluptatum dissentiet no. Et alii periculis per, eam lorem feugait honestatis ea, at vim nulla ubique iracundia. Nec ne etiam ubique. Novum persius oporteat id pri, ei mea viderer alienum, vix appetere salutandi splendide et.",
    "step": "2",
    "ref": "12"
  },
  {
    "title": "Step Three",
    "content": "Qui eu patrioque dissentiunt. Id consul fabulas assentior qui. His ex eripuit mentitum sensibus, at quo essent concludaturque vituperatoribus. In vim debet equidem theophrastus.",
    "step": "3",
    "ref": "13"
  }
]

storiesOf('Home', module)
    .add('Topics List', () => <HomePageIconList items={topics} />)
    .add('Hero', () => <Hero />)
    .add('Stat Blocks', () => <Blocks items={stats} component={StatBlock} />)
    .add('Step Blocks', () => <Blocks items={api} component={StepsBlock} paneTitle="Getting Started with Open Data" />)

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
    .add('Pagination', () => <Pagination />)

storiesOf('Organization', module)
    .add('Org Block', () => <OrgBlock />)

storiesOf('Footer', module)
    .add('Footer', () => <Footer />)
    .add('Footer Custom', () => <FooterCustom />)


let dataset = JSON.parse("{\n" +
    "    \"title\": \"Recent Stocked Waters - California [ds778]\",\n" +
    "    \"description\": \"This dataset represents locations that have been stocked with fish by the California Department of Fish and Wildlife during the current year and the two preceeding years. Each feature in this dataset represents a California Department of Fish and Wildlife hatcherys inland program fish stocking release water as described in the California Department of Fish and Wildlifes statewide hatchery database. Release water is defined as surface water where fish stocking took place. A single release water may be a moving water such as a portion of a stream or river, or a non-moving water such as a lake, reservoir, or pond. Note that there may be multiple fish planting sites on a designated water during a stocking event but these individual sites are not represented in this dataset.\",\n" +
    "    \"organization\": \"Californa Department of Fish and Wildlife\",\n" +
    "    \"resources\": [\n" +
    "        {\n" +
    "            \"title\": \"CSV\",\n" +
    "            \"uri\": \"http://data-cdfw.opendata.arcgis.com/datasets/216bf09054564e7c94b026528ffa0cd1_0.csv\",\n" +
    "            \"type\": \"csv\"\n" +
    "        }\n" +
    "    ],\n" +
    "    \"created\": \"2019-01-04T18:18:17\",\n" +
    "    \"modified\": \"2019-01-04T18:18:17\",\n" +
    "    \"identifier\": \"8c33b8a0-584b-4382-9c81-605ff8c90a18\"\n" +
    "}");

storiesOf('Dataset', module)
    .add('Default', () => <Dataset doc={dataset}/>)

let resource = JSON.parse("{\n" +
    "            \"title\": \"CSV\",\n" +
    "            \"uri\": \"http://data-cdfw.opendata.arcgis.com/datasets/216bf09054564e7c94b026528ffa0cd1_0.csv\",\n" +
    "            \"type\": \"csv\"\n" +
    "        }");

storiesOf('Resource', module)
    .add('Default', () => <Resource doc={resource}/>)

