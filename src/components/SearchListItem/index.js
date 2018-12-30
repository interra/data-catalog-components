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
      return distributions.map(function(dist) {
        i++
        const format = dist.format === undefined ? '' : dist.format.toLowerCase();
        return <div title={`format: ${dist.format}`}
          key={`dist-id-${dist.identifier}-${i}`}
          style={{float: "left"}} className="label"
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
        return <div key={`dist-${theme.identifier}-${i}`} style={{float: "left", paddingRight: "10px"}}>
          <div
            title={`theme: ${theme.title}`} key={`dist-id-${theme.identifier}-${i}`}
            style={{fontSize:"1.3em", color: "#555", marginTop: "-2px", paddingLeft: "5px", float:"left"}}
            className={`font-icon-select-1 font-icon-select-1-${icon}`}>
            </div>
            <span style={{fontSize: ".9em", paddingLeft: "4px"}}>{theme.title}</span>
          </div>
      })
    }
  }

  render() {

    const item = this.props.item;
    const description = excerpts(item.description, {words: 35});
    const formats = this.formats(item.distribution);
    const themes = this.themes(item.theme);

    // Put together the content of the repository
    const content = (
      <Wrapper className="search-list-item">
        <a href="/dataset/{item.identifier}" style={{fontSize: "1.2em"}}>
          { item.title }
        </a>
        <div style={{paddingTop: "15px"}} className="row">
          <div className="col-md-12" style={{textAlign: "right"}}>
          {formats}
          </div>
        </div>
        <div style={{paddingTop: "15px"}} className="row">
          <div className="col-md-12" style={{textAlign: "right"}}>
          {themes}
          </div>
        </div>
        <div className="row" style={{fontSize: ".9em", padding: "5px 0px"}}>
          <div className="col-md-12" style={{padding: "10px 15px"}}>
            {description}
          </div>
          <div className="col-md-12"  style={{fontSize: ".9em", color: "#555"}}>
            <label>modified:</label> {item.modified}
          </div>
          <div className="col-md-12"  style={{fontSize: ".9em", color: "#555"}}>
            <label>organization:</label> {item.publisher}
          </div>
        </div>
      </Wrapper>
    );

    // Render the content into a list item
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
