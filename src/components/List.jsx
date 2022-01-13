import React from 'react';

const List = ({ store }) => {
  return (
    <div>
      Items:
      {store.map((item, i) => (
        <li key={i}>
          {item.name} - {item.email}
        </li>
      ))}
    </div>
  );
};

export default List;
