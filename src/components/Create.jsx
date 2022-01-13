import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  age: '',
};

const Create = ({ setStore }) => {
  const [inputs, setInputs] = useState(initialState);

  function handle(e) {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function fnCreate() {
    const { email, name, age } = inputs;
    setStore((prevState) => [...prevState, { email, name, age }]);
  }

  return (
    <div>
      <form action=''>
        <input type='text' name='name' placeholder='name' onChange={handle} />
        <input type='text' name='email' placeholder='email' onChange={handle} />
        <input type='text' name='age' placeholder='age' onChange={handle} />
        <button type='button' onClick={fnCreate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
