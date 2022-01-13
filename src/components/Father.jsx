import React, { useState } from 'react';
import List from './List';
import Create from './Create';
import Total from './Total';
import Remove from './Remove';

const initialState = [
  { email: 'foo@foo.com', name: 'foo', age: 20 },
  { email: 'bar@bar.com', name: 'bar', age: 23 },
  { email: 'hux@hux.com', name: 'hux', age: 30 },
  { email: 'rm@rm.com', name: 'rm', age: 18 },
];

const Father = () => {
  const [store, setStore] = useState(initialState);

  return (
    <>
      <Total store={store} />
      -------------------------
      <List store={store} />
      -------------------------
      <Create setStore={setStore} />
      -------------------------
      <Remove setStore={setStore} />
    </>
  );
};

export default Father;
