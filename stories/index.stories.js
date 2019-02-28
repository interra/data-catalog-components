import React from 'react';

import { storiesOf } from '@storybook/react';

import HomePageIconList from '../src/components/HomePageIconList';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';
import InputLarge from '../src/components/InputLarge';
import FacetList from '../src/components/FacetList';

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
import FileDownload from '../src/components/FileDownload';
import Organization from '../src/components/Organization';
import String from '../src/components/String';
import Text from '../src/components/Text';
import Title from '../src/components/Title';
import Table from '../src/components/Table';
import Tags from '../src/components/Tags';

import data from './example.json';


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
        "ref": "here",
        "alt": "airplane"
    },
    {
        "identifier": "Suspendisse",
        "ref": "there",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/openweb.svg",
        "alt": "backpack"
    },
    {
        "identifier": "Maecenas mauris",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compass.svg",
        "ref": "everywhere",
        "alt": "balloon"
    },
    {
        "identifier": "Praesent sollicitudin",
        "icon": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/odf.svg",
        "ref": "nowhere",
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

var theme = [
    {
      "identifier": 1,
      "title": "Healthcare",
      "icon": "physician",
      "link": "url"
    }
]

var distribution = [
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
        "format": distribution,
        "ref": "dataset/wow",
        "theme": theme
    },
    {
        "identifier": 5678,
        "title": "U.S. Tobacco Usage Statistics",
        "description": "Statistics on U.S. smoking rates and tobacco taxation rates for all fifty states. *Source:* Centers for Disease Control and Prevention, 2015 https://www.cdc.gov/tobacco/data_statistics/state_data/ [1] ",
        "modified": "2/12/2018",
        "publisher": "Publish Inc.",
        "format": distribution,
        "ref": "dataset/how",
        "theme": theme
    }
]

const facets = {
  "keyword": {
    "label": "Tags",
    "field": "keyword.title"
  },
  "theme": {
    "label": "Category",
    "field": "theme.title"
  },
  "org": {
    "label": "Organization",
    "field": "publisher.name"
  },
  "format": {
    "label": "Format",
    "field": "dataset.distribution.format"
  }
};

const selectedFacets = [["theme", "Water"]];

const facetsResults = {
  "keyword": [["economy", 3],["budget", 5]],
  "theme": [["Health Care", 20],["Water", 5]],
  "org": [["Group 1", 5],["Group 4", 2]],
  "format": [["csv", 20],["zip", 2]]
};

const query = "statistics";

const facetListProps = {
  query,
  facets,
  facetsResults,
  selectedFacets,
  url: "search"
};

storiesOf('Search', module)
  .add('Item', () => <SearchListItem item={items[0]}/>)
  .add('List', () => <SearchList items={items} message="2 Datasets found" />)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <FacetList {... facetListProps} />)
  .add('Pagination', () => <Pagination />)

storiesOf('Footer', module)
    .add('Footer', () => <Footer />)
    .add('Footer Custom', () => <FooterCustom />)

let dataset = data;

let resource = {
  "downloadURL": "http://css4.pub/2015/icelandic/dictionary.pdf",
  "format": "pdf",
  "title": "Dictionary",
}

const configuration = {
  issued: {
    label: "Release Data"
  },
  identifier: {
    label: "Unique Identifier"
  },
  modified: {
    label: "Last Update"
  }
}

const data2 = {
  issued: "1/12/2015",
  identifier: "1234567",
  modified: "2/3/2019"
}

const labelsT1 = {
  rows: {
    label: "1"
  }
}

const valuesT1 = {
  rows: "35"
}

const labelsT2 = {
  a: {
    label: "County"
  },
  b: {
    label: "State"
  },
  c: {
    label: "Population"
  }
}

const valuesT2 = {
  a: "String",
  b: "String",
  c: "Number"
}

const tags = [
  {identifier: "hello", title: "Hello"},
  {identifier: "good-bye", title: "Goodbye"},
]

storiesOf('Dataset', module)
  .add('File Download', () => <FileDownload label="Label" resource={resource} />)
  .add('File Download - No label', () => <FileDownload resource={resource} />)
  .add('Organization', () => <Organization name={"Org"} description={"This is an organization."} identifier={"org"} />)
  .add('String', () => <String label={"I am a label"} value={"I am a string."} />)
  .add('String - No label', () => <String value={"I am a string."} />)
  .add('Text', () => <Text label={"I am a label"} value={"<u>I am an underlined string.</u>"} />)
  .add('Text - No label', () => <Text value={"<u>I am an underlined string.</u>"} />)
  .add('Title', () => <Title title={"I am a title"} />)
  .add('Table 1', () => <Table configuration={configuration} data={data2} title="Additional Information" th1="Field" th2="Value" />)
  .add('Table 2', () => <Table configuration={labelsT1} data={valuesT1} title="What's in this Dataset?" th1="Rows" th2="Columns" />)
  .add('Table 3', () => <Table configuration={labelsT2} data={valuesT2} title="Columns in this Dataset" th1="Column Name" th2="Type" />)
  .add('Tags', () => <Tags label={"Tags"} tags={tags} />)




