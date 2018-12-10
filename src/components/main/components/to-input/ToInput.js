import React from 'react';
import { Input } from 'react-materialize';

const ToInput = props => {
  return (
    <Input
      s={5}
      m={3}
      type='select'
      label='To'
      name='to'
      value={ props.to }
      onChange={ props.onChange }
      className='white-text'
    >
      { props.currencies }
    </Input>
  );
};

export default ToInput;
