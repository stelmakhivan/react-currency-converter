import React, { Component } from 'react';
import './assets/styles/style.css';
import { Row, Button } from 'react-materialize';

import inverseSvg from './assets/img/inverse';
import spinner from './assets/img/spinner';
import AmountInput from './components/amount-input/AmountInput';
import FromInput from './components/from-input/FromInput';
import ToInput from './components/to-input/ToInput';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: ['USD', 'EUR', 'UAH', 'PLN'],
      from: 'USD',
      to: 'EUR',
      amount: 1,
      result: '',
      isLoaded: false
    }
  }

  getData() {
    const { from, to, amount } = this.state;

    this.setState({
      isLoaded: false,
      result: <span className='center'> { spinner } </span>
    })

    fetch(`http://apilayer.net/api/convert?access_key=${process.env.REACT_APP_API_KEY}&from=${from}&to=${to}&amount=${amount}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ result: data.result, isLoaded: false });
    });
  }

  changeInput(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  inverse() {
    const { from, to } = this.state;
    this.setState({
      from: to,
      to: from
    })
  }

  changeAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    const currencies = this.state.currencies.map(el => {
      return <option key={el} value={el}>{el}</option>
    });

    const data = this.state.result
      ?  <h4 className='white-text center'> Result: { this.state.result }</h4>
      : '';

    return (
      <div className='main'>
        <Row>
          <AmountInput
            data = { this.state }
            onChange = { e => this.changeAmount(e) }
          />

          <FromInput
            currencies = { currencies }
            from = { this.state.from }
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
            to = { this.state.to }
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
          { data }
        </Row>

      </div>
    );
  }
}

export default Main;
