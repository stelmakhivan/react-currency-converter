import React, { Component } from "react";
import "./style.css";
import { Input, Row, Button } from "react-materialize";

import inverseSvg from './inverse';
import spinner from './spinner';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: ['USD', 'EUR', 'UAH', 'PLN'],
      from: 'UAH',
      to: 'USD',
      amount: 1,
      result: '',
      isLoaded: false
    }
  }

  getData() {
    const { from, to, amount } = this.state;

    this.setState({
      isLoaded: false,
      result: <span className='center'> {spinner} </span>
    })

    fetch(`http://apilayer.net/api/convert?access_key=${process.env.REACT_APP_API_KEY}&from=${from}&to=${to}&amount=${amount}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          result: data.result,
          isLoaded: false
        })
      });
  }

  changeFrom(e) {
    this.setState({
      from: e.target.value
    })
  }

  changeTo(e) {
    this.setState({
      to: e.target.value
    })
  }

  inverse() {
    const from = this.state.from;
    const to = this.state.to;
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

    const data = this.state.result ?  <h4 className='white-text center'> Result: { this.state.result }</h4> : '';

    return (
      <div className="main">
        <Row>
          <Input
            type="number"
            className="white-text"
            s={12}
            m={4}
            label="Amount"
            min='0'
            defaultValue={this.state.amount}
            onChange={ e => this.changeAmount(e) }
            />

          <Input
            s={5}
            m={3}
            type="select"
            label="From"
            value={ this.state.from }
            onChange={ e => this.changeFrom(e) }
            className="white-text"
          >
            { currencies }
          </Input>

          <button
            onClick={ e => this.inverse(e) }
            className="inverse col s2"
            s={2}
            type="button"
          >
            { inverseSvg }
          </button>

          <Input
            s={5}
            m={3}
            type="select"
            label="To"
            value={ this.state.to }
            onChange={ e=> this.changeTo(e) }
            className="white-text"
          >
            { currencies }
          </Input>
        </Row>
        <Row className="valign-wrapper">
          <Button
            className="red convert-btn centered col s12 m5"
            waves="light"
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
