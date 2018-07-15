// @flow
import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import styles from '../styles/CurrencyCard-styles';

type Props = {
  currency: string,
  value: string,
  currencyName: string,
  onRemoveCurrency: () => void,
};

const CurrencyCard = (props: Props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header style={styles.header}>
        <div>{props.currency}</div>
        <div>{props.value}</div>
      </Card.Header>
      <Card.Meta>{props.currency} - {props.currencyName}</Card.Meta>
      <Card.Description>
        1 USD = {props.currency} {props.value}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button
        fluid
        basic
        color="red"
        onClick={props.onRemoveCurrency}
      >
        Remove
      </Button>
    </Card.Content>
  </Card>
);

export default CurrencyCard;
