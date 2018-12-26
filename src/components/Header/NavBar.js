import styled from 'styled-components';

const fonts = {};

const navBarBackColor = fonts && fonts.navBarBackColor ? fonts.navBarBackColor : "#030d17";

export default styled.div`
    display: block;
    clear: both;
    padding-left: 50px;
    background-color: ${navBarBackColor};`;
