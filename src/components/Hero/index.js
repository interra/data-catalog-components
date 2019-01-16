import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

class Hero extends React.Component {

  render() {

    const Background = this.props.image;
    const Align = this.props.alignment;

    return (
      <Wrapper className="jumbotron" style={{ backgroundImage: `url(${Background})` }}>
        <div className={'block ' + Align}>
          <h1 className="hero-title">{this.props.title}{this.props.title2}</h1>
          <p>{this.props.intro}</p>
          <a href="/about" role="button" className="btn btn-hero">Learn more</a>
        </div>
      </Wrapper>
    );
  }
}

Hero.defaultProps = {
    state: "loading",
    identifier: "1234",
    image: "https://s3.amazonaws.com/dkan-default-content-files/files/cityscape-blue.jpg",
    title: "Welcome to DKAN",
    intro: "DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.",
    alignment: "center",
};

Hero.propTypes = {
    state: PropTypes.string,
    item: PropTypes.any,
};

export default Hero;
