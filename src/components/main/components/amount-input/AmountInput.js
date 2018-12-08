import React from 'react';
import { Input } from 'react-materialize';

const AmountInput = props => {
  return (
    <Input
      type='number'
      className='white-text'
      s={12}
      m={4}
      label='Amount'
      min='0'
      defaultValue={ props.data.amount }
      onChange={ props.onChange }
    />
  )
}

export default AmountInput;
