// @flow

import React from 'react';
import {
  Container,
  Input,
  Button,
} from 'semantic-ui-react';
import styles from '../styles/InputAmount-styles';

type Props = {
  isChangeInputAmount: boolean,
  onChangeAmount: () => void,
  onPressEnter: () => void,
  onChangeInputAmount: () => void,
  amount: string,
};

const InputAmount = (props: Props) => (
  <Container fluid>
    {
      props.isChangeInputAmount ? (
        <Input
          fluid
          focus
          type="number"
          placeholder="0"
          onChange={props.onChangeAmount}
          onKeyDown={props.onPressEnter}
        />
      ) : (
        <Button
          fluid
          style={styles.buttonContainer}
          onClick={props.onChangeInputAmount}
        >
          <div>
            <h4>USD</h4>
          </div>
          <div>
              <h4>{props.amount}</h4>
          </div>
        </Button>
      )
    }
  </Container>
);

export default InputAmount;
