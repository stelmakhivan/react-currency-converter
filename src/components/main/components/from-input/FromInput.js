import React from 'react';
import { Input } from 'react-materialize';

const FromInput = props => {
  return (
    <Input
      s={5}
      m={3}
      type='select'
      label='From'
      name='from'
      value={ props.from }
      onChange={ props.onChange }
      className='white-text'
    >
      { props.currencies }
    </Input>
  );
};

export default FromInput;
