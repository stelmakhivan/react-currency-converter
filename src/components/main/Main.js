import React, { Component } from 'react';
import './assets/styles/style.css';
import { Row, Button } from 'react-materialize';

import inverseSvg from './assets/img/inverse';
// import spinner from './assets/img/spinner';
import AmountInput from './components/amount-input/AmountInput';
import FromInput from './components/from-input/FromInput';
import ToInput from './components/to-input/ToInput';

class Main extends Component {
  getData() {
    this.props.fetchData()
  }

  changeInput(e) {
    const { name, value } = e.target;
    if (name==='from') {
      this.props.changeFromCurrency({
        from: value,
        result: ''
      })
    } else if (name==='to') {
      this.props.changeToCurrency({
        to: value,
        result: ''
      })
    }
  }

  inverse() {
    const { from, to } = this.props.store;
    this.props.inverseCurrency({
      from: to,
      to: from,
      result: ''
    })
  }

  changeAmount(e) {
    this.props.changeAmount({
      amount: e.target.value,
      result: ''
    })
  }

  render() {
    const store = this.props.store;
    console.log(store);
    const currencies = store.currencies.map(el => {
      return <option key={el} value={el}>{el}</option>
    });

    const result = store.result
      ? <h4 className='white-text center'>
          {store.amount} {store.from} = { store.result } {store.to}
        </h4>
      : ''

    return (
      <div className='main'>
        <Row>
          <AmountInput
            data = { store }
            onChange = { e => this.changeAmount(e) }
          />

          <FromInput
            currencies = { currencies }
            from = { store.from }
            onChange = { e => this.changeInput(e) }
          />

          <button
            onClick={ e => this.inverse(e) }
            className='inverse col s2'
            s={2}
            type='button'
          >
            { inverseSvg }
          </button>

          <ToInput
            currencies = { currencies }
            to = { store.to }
            onChange = { e => this.changeInput(e) }
          />
        </Row>

        <Row className='valign-wrapper'>
          <Button
            className='red convert-btn centered col s12 m5'
            waves='light'
            onClick={ () => this.getData() }
          >
            Convert
          </Button>
        </Row>

        <Row>
          { result }
        </Row>

      </div>
    );
  }
}

export default Main;
