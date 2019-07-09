import React from 'react';
import '../css/RightColumn.css';

const RightColumn = (d) => {
  return(
    d.data.map(data =>
      <h2 className={!data.active ? 'inactive' : 'active'} style={{color: data.fill[0], opacity : !data.active ? 0 : 1}}>{data.title}</h2>
    )
  );
}

export default RightColumn;
