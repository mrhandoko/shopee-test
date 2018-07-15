// @flow

import React, { Component } from 'react';
import {
  Container,
  Responsive,
  Segment,
  Card,
} from 'semantic-ui-react';

import InputAmount from '../base-ui/components/InputAmount';
import InputCurrency from '../base-ui/components/InputCurrency';
import CurrencyCard from '../base-ui/components/CurrencyCard';

import styles from '../base-ui/styles/Shopee-styles';

import { formatNumber, formatThousand } from '../utils/formatNumbers';
import currenciesDictionary from '../utils/currenciesDictionary';
import getCurrencyBaseUSD from '../api/getCurrencyBaseUSD';

type State = {
  amount: number,
  currencyValue: string,
  isChangeInputAmount: boolean,
  isChangeInputCurrency: boolean,
  currencies: Array<*>,
  rates: Array<*>,
  currenciesDisplay: Array<*>,
}

export default class Shopee extends Component {
  state: State;

  constructor() {
    super();
    this.state = {
      amount: 1,
      currencyValue: '',
      isChangeInputAmount: false,
      isChangeInputCurrency: false,
      currencies: [],
      rates: [],
      currenciesDisplay: [],
    };
  }

  async componentDidMount() {
    const currencies = await getCurrencyBaseUSD();
    const currenciesOption = Object.keys(currencies.rates);
    await this.setState({
      rates: currencies.rates,
      currencies: currenciesOption.map(currency => ({
        key: currency,
        text: currency,
        value: currency,
      })),
    });
    await this.setState({
      currenciesDisplay: [...this.state.currenciesDisplay, {
        currency: 'IDR',
        value: this.state.rates['IDR'],
        currencyName: currenciesDictionary['IDR'],
      }],
    });
  }

  keyPressInputAmount(event) {
    if (event.keyCode === 13) {
      this.setState({ isChangeInputAmount: false });
    };
  }

  async addNewCurrency() {
    const currencyItem = {
      currency: this.state.currencyValue,
      value: this.state.rates[this.state.currencyValue],
      currencyName: currenciesDictionary[this.state.currencyValue],
    };
    await this.setState({
      currenciesDisplay: [...this.state.currenciesDisplay, currencyItem],
      isChangeInputCurrency: false,
      currencyValue: '',
    });
    return true;
  }

  async removeCurrency(currency) {
    await this.setState({
      currenciesDisplay: this.state.currenciesDisplay.filter(item => item.currency !== currency),
    });
    return true;
  }

  contentChild() {
    return (
      <Segment.Group>
        <Segment>
          <h3>
            USD - United States Dollars
          </h3>
          <InputAmount
            isChangeInputAmount={this.state.isChangeInputAmount}
            onChangeInputAmount={() => this.setState({ isChangeInputAmount: true })}
            onChangeAmount={event => this.setState({ amount: event.target.value })}
            onPressEnter={event => this.keyPressInputAmount(event)}
            amount={formatNumber(this.state.amount)}
          />
          {this.state.isChangeInputAmount && <span style={styles.notifColor}>Press enter to get result</span>}
        </Segment>
        <Segment>
          <InputCurrency
            currencies={this.state.currencies}
            isChangeInputCurrency={this.state.isChangeInputCurrency}
            onChangeInputCurrency={() => this.setState({ isChangeInputCurrency: true })}
            handleChangeCurrency={(event, { value }) => this.setState({ currencyValue: value })}
            currencyValue={this.state.currencyValue}
            onAddNewCurrency={() => this.addNewCurrency()}
          />
          <Card.Group>
            {
              this.state.currenciesDisplay.map((item, index) => (
                <CurrencyCard
                  key={index}
                  currency={item.currency}
                  value={formatThousand(item.value * this.state.amount)}
                  currencyName={item.currencyName}
                  onRemoveCurrency={() => this.removeCurrency(item.currency)}
                />
              ))
            }
          </Card.Group>
        </Segment>
      </Segment.Group>
    );
  }

  render() {
    return (
      <Container fluid>
        <Responsive as={Container} minWidth={768} style={styles.desktop}>
          {this.contentChild()}
        </Responsive>
        <Responsive
          fluid
          as={Container}
          {...Responsive.onlyMobile}
          style={styles.mobile}
        >
          {this.contentChild()}
        </Responsive>
      </Container>     
    );
  }
};
