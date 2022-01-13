import React, { useState, useEffect } from 'react';

const initialState = {
  name: '',
  email: '',
  age: '',
};

const Remove = ({ setStore }) => {
  const [users, setUsers] = useState(initialState);

  const selectItems = () => {};

  selectItems();

  console.log(users);

  return <div>users: </div>;
};

export default Remove;
