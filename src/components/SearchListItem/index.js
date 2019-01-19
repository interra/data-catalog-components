import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import Wrapper from './Wrapper';
import excerpts from 'excerpts';

class SearchListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  formats(distributions) {
    if (!distributions) {
      return null;
    }
    else {
      let i = 0;
      return distributions.map((dist) => {
        i++
        const format = dist.format === undefined ? '' : dist.format.toLowerCase();
        return <div title={`format: ${dist.format}`}
          key={`dist-id-${dist.identifier}-${i}`}
          className="label"
          data-format={format}>{format}</div>
      })
    }
  }

  themes(themes) {
    if (!themes) {
      return null;
    }
    else {
      let i = 0;
      return themes.map(function(theme) {
        i++
        const icon = theme.icon ? theme.icon : 'cog';
        return <div key={`dist-${theme.identifier}-${i}`}>
          <div
            title={`theme: ${theme.title}`} key={`dist-id-${theme.identifier}-${i}`}
            className={`font-icon-select-1 font-icon-select-1-${icon}`}>
            </div>
            {theme.title}
          </div>
      })
    }
  }

  render() {

    const item = this.props.item;
    const description = excerpts(item.description, {words: 35});
    const formats = this.formats(item.format);
    const themes = this.themes(item.theme);

    // Put together the content of the repository
    const content = (
      <Wrapper key={`wrapper-${item.identifier}`} className="search-list-item">
        <a href={"/dataset/" + item.identifier}>
          <h2>{ item.title }</h2>
        </a>
        <div className="item-theme">
          {themes}
        </div>
        <div className="item-description">
          {description}
        </div>
        <div className="item-org">
          <label>organization:</label> {item.publisher}
        </div>
        <div className="format-types">
          {formats}
        </div>
      </Wrapper>
    );

    return (
      <ListItem key={`repo-list-item-${item.identifier}`} item={content} />
    );
  }
}

SearchListItem.defaultProps = {
  item: {
    "identifier": 1234,
    "title": "This is a title",
    "description": "I am an item",
    "modified": "1/12/2018",
    "publisher": "Publish Inc."
  },
};

SearchListItem.propTypes = {
  item: PropTypes.object,
};

export default SearchListItem;
