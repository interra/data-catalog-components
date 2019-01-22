import React from 'react';
import PropTypes from 'prop-types';
import StepsBlock from './StepsBlock';
import StatBlock from './StatBlock';
import Wrapper from './Wrapper';


class Blocks extends React.PureComponent {

  render() {
    const { items } = this.props;
    const Block = this.props.component;
    let paneTitle = this.props.paneTitle;

    if (paneTitle) {
      return (
        <Wrapper className={'container-fluid ' + this.props.component.name}>
          <h2>{paneTitle}</h2>
          <div className="pane-content">
            {
              this.props.items.map(function(item){
                return <Block content={item} />;
              })
            }
          </div>
        </Wrapper>
      );
    }
    else {
      return (
        <Wrapper className={'container-fluid ' + this.props.component.name}>

          <div className="pane-content">
            {
              this.props.items.map(function(item){
                return <Block content={item} />;
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
};

Blocks.propTypes = {
  items: PropTypes.any,
  component: PropTypes.string,
};

export default Blocks
