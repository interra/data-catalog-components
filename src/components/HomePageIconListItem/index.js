import React from 'react'
import StyledLink from './StyledLink'

class HomePageIconListItem extends React.PureComponent {

  render() {
    const { item } = this.props;

    const content = (
      <StyledLink href={"/search/" + item.ref}>
        <img src={item.icon} alt={item.alt} />
        <div>{item.identifier}</div>
      </StyledLink>
    )

    return (
      <li key={item.ref}>{content}</li>
    )
  }
}

export default HomePageIconListItem
