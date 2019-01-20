import React from 'react';
import PropTypes from 'prop-types';


function PageItemOrg(props) {
  const name = props.data.value.name;
  const image = props.data.value.image ? <img style={{maxWidth: "100%"}} alt={name} src={props.data.value.image} /> : '';
  const description = props.data.value.description;
  const link = `/organization/${props.data.value.identifier}`;

  return (
    <div style={{borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
    padding: "15px 20px"}}>
      <div style={{textAlign: "center", padding: "15px 0"}}>{image}</div>
      <h3><a href={link}>{name}</a></h3>
      {description}
    </div>
  );
}

PageItemOrg.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default PageItemOrg;
