/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import BasicBlock from './BasicBlock';

class Blocks extends React.PureComponent {

  render() {
    const { items } = this.props;
    const Block = this.props.component;
    let paneTitle = this.props.paneTitle;

    if (paneTitle) {
      return (
        <Wrapper className={'container-fluid ' + this.props.className}>
          <h2>{paneTitle}</h2>
          <div className="pane-content">
            {
              this.props.items.map(function(item, index){
                return <Block content={item} key={index} />;
              })
            }
          </div>
        </Wrapper>
      );
    }
    else {
      return (
        <Wrapper className={'container-fluid ' + this.props.className}>

          <div className="pane-content">
            {
              this.props.items.map(function(item, index){
                return <Block content={item} key={index} />;
              })
            }
          </div>
        </Wrapper>
      )
    }
  }
}

Blocks.defaultProps = {
  items: [],
  component: BasicBlock,
  className: 'BasicBlock'
};

Blocks.propTypes = {
  items: PropTypes.array,
  component: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Blocks
