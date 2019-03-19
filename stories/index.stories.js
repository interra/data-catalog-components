import React from 'react';

import { storiesOf } from '@storybook/react';

import IconList from '../src/components/IconList';
import IconListItem from '../src/components/IconListItem'

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
import DataTableFilter from '../src/components/DataTableFilter';

import data from './_data.json';
import home from './_home.json';
import tables from './_tables.json';
import search from './_search.json';

storiesOf('General', module)
    .add('Logo', () => <Logo />)
    .add('Header', () => <Header/>)
    .add('NavBar', () => <NavBar />)
    .add('Button', () => <StyledButton color="primary">primary</StyledButton>)
    .add('Preview Button', () => <StyledButton color="primary"><i class="fa fa-bar-chart"></i> preview</StyledButton>)
    .add('Download Button', () => <StyledButton color="primary"><i class="fa fa-download"></i> download</StyledButton>)
    .add('Hero Button', () => <StyledButton className="btn-hero" onClick="">Learn More</StyledButton>)
    .add('Close Button', () => <StyledButton className="close"><span aria-hidden="true">×</span></StyledButton>)

storiesOf('Home', module)
    .add('Topics List - external images', () => <IconList items={home.topics} paneTitle="Dataset Topics" component={IconListItem} className="icon-list" />)
    .add('Topics List - internal images', () => <IconList items={home.topics2} paneTitle="Section Title" component={IconListItem} className="icon-list" />)
    .add('Hero', () => <Hero />)
    .add('Stat Blocks', () => <Blocks items={home.stats} component={StatBlock} />)
    .add('Step Blocks', () => <Blocks items={home.api} component={StepsBlock} paneTitle="Getting Started with Open Data" />)


const selectedFacets = search.selectedFacets;
const facetsResults = search.facetsResults;
const query = search.query;
const facets = search.facets;

const facetListProps = {
  query,
  facets,
  facetsResults,
  selectedFacets,
  url: "search"
};

storiesOf('Search', module)
  .add('Item', () => <SearchListItem item={search.items[0]}/>)
  .add('List', () => <SearchList items={search.items} message="2 Datasets found" />)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <FacetList {... facetListProps} />)

storiesOf('Footer', module)
    .add('Footer', () => <Footer />)
    .add('Footer Custom', () => <FooterCustom />)

storiesOf('Dataset', module)
  .add('File Download', () => <FileDownload label="Label" resource={data.distribution[0]} />)
  .add('File Download - No label', () => <FileDownload resource={data.distribution[0]} />)
  .add('Organization', () => <Organization name={data.publisher.name} description={data.publisher.description} identifier={data.publisher.identifier} />)
  .add('String', () => <String label={"I am a label"} value={"I am a string."} />)
  .add('String - No label', () => <String value={"I am a string."} />)
  .add('Text', () => <Text label={"I am a label"} value={"<u>I am an underlined string.</u>"} />)
  .add('Text - No label', () => <Text value={"<u>I am an underlined string.</u>"} />)
  .add('Title', () => <Title title={"I am a title"} />)
  .add('Table 1', () => <Table configuration={tables.config1} data={tables.data1} title="Additional Information" th1="Field" th2="Value" tableclass="table-one" />)
  .add('Table 2', () => <Table configuration={tables.config2} data={tables.data2} title="What's in this Dataset?" th1="Rows" th2="Columns" tableclass="table-two" />)
  .add('Table 3', () => <Table configuration={tables.config3} data={tables.data3} title="Columns in this Dataset" th1="Column Name" th2="Type" tableclass="table-three" />)
  .add('Tags', () => <Tags label={"Tags"} tags={data.keyword} />)
  .add('Filter', () => <DataTableFilter />)



