import React from 'react';

function Tags(props) {
  const label = props.label ? <strong>{props.label}:</strong> : '';
  const tags = props.tags.map((tag) => {

    return (
      <div
        style={{margin: "6px", float: "left", padding: "7px"}}
        className="label label-default"
        key={tag.identifier}>
        {tag.title}
      </div>
    );
  }, '<div></div>');
  return (
    <div style={{margin: "10px -5px"}}>
    {label} {tags}
    </div>
  );
}

export default Tags;
