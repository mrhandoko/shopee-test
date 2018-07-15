// @flow

import React from 'react';
import {
  Container,
  Button,
  Icon,
  Dropdown,
} from 'semantic-ui-react';

import styles from '../styles/InputCurrency-styles';

type Props = {
  isChangeInputCurrency: boolean,
  currencies: Array<*>,
  currencyValue: string,
  handleChangeCurrency: () => void,
  onAddNewCurrency: () => void,
  onChangeInputCurrency: () => void,
};

const InputCurrency = (props: Props) => (
  <Container fluid>
    {
      props.isChangeInputCurrency ? (
        <Button
          as="div"
          labelPosition="left"
          fluid style={styles.marginVertical}>
          <Dropdown
            fluid
            selection
            search
            options={props.currencies}
            value={props.currencyValue}
            placeholder="Add More Currencies"
            onChange={props.handleChangeCurrency}
          />
          <Button
            type="submit"
            color="orange"
            onClick={props.onAddNewCurrency}
          >
            Submit
          </Button>
        </Button>
      ) : (
        <Button
          fluid
          icon
          labelPosition="left"
          color="orange"
          style={styles.marginVertical}
          onClick={props.onChangeInputCurrency}
        >
          <Icon name="plus" />
          Add More Currency
        </Button>
      )
    }
  </Container>
);

export default InputCurrency;
