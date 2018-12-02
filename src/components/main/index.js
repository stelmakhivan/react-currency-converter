import React, { Component } from "react";
import "./style.css";
import { Input, Row, Button } from "react-materialize";
import inverseSvg from './inverse';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: ['USD', 'EUR', 'UAH', 'PLN'],
      from: 'UAH',
      to: 'USD',
      amount: 1,
      result: ''
    }

    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    this.inverse = this.inverse.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  }
  getData() {
    // fetch(
    //   `http://www.apilayer.net/api/live?access_key=${process.env.REACT_APP_API_KEY}&currencies=${this.state.currencies}&source=${this.state.from}`
    // )
    //   .then(res => res.json())
    //   .then(data => console.log(data));
    const {from, to, amount} = this.state;
    fetch(`https://apilayer.net/api/convert?access_key=${process.env.REACT_APP_API_KEY}&from=${from}&to=${to}&amount=${amount}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          result: data.result
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
    })
    return (
      <div className="main">
        <Row>
          <Input
            type="number"
            className="white-text"
            s={4}
            label="Amount"
            min='0'
            defaultValue={this.state.amount}
            onChange={this.changeAmount}
            />

          <Input
            s={3}
            type="select"
            label="From"
            value={ this.state.from }
            onChange={this.changeFrom}
            className="white-text"
          >
            { currencies }
          </Input>

          <button onClick={ this.inverse } className="inverse col s2" s={2} type="button">
            { inverseSvg }
          </button>

          <Input
            s={3}
            type="select"
            label="To"
            value={ this.state.to }
            onChange={this.changeTo}
            className="white-text"
          >
            { currencies }
          </Input>
        </Row>
        <Row className="valign-wrapper">
          <Button
            className="red convert-btn centered"
            waves="light"
            onClick={() => this.getData()}
          >
            Convert
          </Button>
        </Row>
        <Row>
          { this.state.result ? <h4 className='white-text center'> Result: { this.state.result }</h4>
          : ''}

        </Row>
      </div>
    );
  }
}

export default Main;
