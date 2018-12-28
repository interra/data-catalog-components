import React from 'react'
import Wrapper from './Wrapper'
import StyledLink from './StyledLink'

class HomePageIconListItem extends React.PureComponent {

  render() {
    const item = this.props.item
    const click = item.click

    // Put together the content of the repository
    const content = (
      <StyledLink to="search" onClick={ click }>
        <div data-facet-name={ item.title } className={ `font-icon-select-1 font-icon-select-1-${ item.icon }` } />
        <div data-facet-name={ item.title }>{ item.title }</div>
      </StyledLink>
    )

    // Render the content into a list item
    return (
      <Wrapper key={ item.ref } className={ `col-xs-12 col-sm-6 col-md-${ item.columnWidth }` }>{ content }</Wrapper>
    )
  }
}

export default HomePageIconListItem
