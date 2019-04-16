import React from 'react'
import StyledLink from './StyledLink'
import TopicImage from './TopicImage'

class IconListItem extends React.PureComponent {

  render() {
    const { item } = this.props;
    let content = '';
    let color = '#0A77BD';

    if (item.icon) {
      // Image provided as a url.
      content = (
        <StyledLink href={item.identifier}>
          <img src={item.icon} alt={item.alt} />
          <div>{item.title}</div>
        </StyledLink>
      )
    }
    else {
      // Image provided by custom component.
      content = ( 
        <StyledLink href={item.identifier}>
          <TopicImage title={item.title} width="80" height="80" fill={color} />
          <div>{item.title}</div>
        </StyledLink>
      )
    };

    return (
      <li key={item.identifier}>{content}</li>
    )
  }
}

export default IconListItem
