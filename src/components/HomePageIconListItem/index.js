import React from 'react'
import StyledLink from './StyledLink'


class HomePageIconListItem extends React.PureComponent {

  render() {
    const item = this.props.item
    const click = item.click

    // Put together the content of the repository
    const content = (
      <StyledLink href="/search/" onClick={ click }>
        <img src={ item.icon } alt={ item.alt } />
        <div>{ item.title }</div>
      </StyledLink>
    )

    // Render the content into a list item
    return (

        <li key={ item.ref }>{ content }</li>

    )
  }
}

export default HomePageIconListItem
