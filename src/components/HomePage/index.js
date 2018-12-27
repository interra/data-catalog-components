import React from 'react';
import { Helmet } from 'react-helmet';

import StyledHero from './Hero';
import StyledSearchContainer from './SearchContainer';
import StyledSearchButton from './SearchButton';

import HomePageIconList from '../HomePageIconList';
import AutoCompSearchList from '../AutoCompSearchList';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  letsGoToSearchWithFacet(e) {
      const { loadResults } = this.props;
      const facet = [['theme', e.target.getAttribute('data-facet-name')]];
      loadResults(null, facet);
  }

  queryEnter(e) {

      const { loadResults, clearResults } = this.props;

      if (e.target.value.length > 0) {
          loadResults(e.target.value, null)
      }
      else if (e.target.value.length == 0) {
          clearResults();
      }
  }

  letsGoToSearchOnlyIfYouPressEnter(e) {
      if (e.key === 'Enter') {
          this.props.history.push('/search');
          return;
      }
  }

  render() {

    const { query, results, homePageIcons, loadingHomePageIcons } = this.props;

    const facetClick = this.letsGoToSearchWithFacet.bind(this);

    const loading = false;
    const error = false;

    const AutoCompSearchListProps = {
      results,
      loading,
      query,
      error,
    }

    const HomePageIconListProps = {
        homePageIcons,
        loadingHomePageIcons,
        error,
        facetClick,
    }

    return (
      <article>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <StyledHero className="jumbotron">
          <StyledSearchContainer className="input-group col-md-10">
            <input type="text"
              onKeyPress={(e) => this.letsGoToSearchOnlyIfYouPressEnter(e)}
              onChange={this.queryEnter.bind(this)}
              style={{height: "60px"}}
              className="form-control input-lg"
              placeholder="Search" />

            <span className="input-group-btn">
              <StyledSearchButton className="btn btn-info btn-lg"
                  type='button'
                  onClick={() => this.letsGoToSearch(history)}
              >
                <i className="glyphicon glyphicon-search"></i>
              </StyledSearchButton>
            </span>

            <AutoCompSearchList {...AutoCompSearchListProps} />
          </StyledSearchContainer>
        </StyledHero>

        <HomePageIconList {...HomePageIconListProps} />
      </article>
    );
  }
}

export default HomePage;
