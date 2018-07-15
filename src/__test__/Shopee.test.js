import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { Button } from 'semantic-ui-react';

import Shopee from '../pages/Shopee';
import CurrencyCard from '../base-ui/components/CurrencyCard';
import InputAmount from '../base-ui/components/InputAmount';
import InputCurrency from '../base-ui/components/InputCurrency';

configure({ adapter: new Adapter() });

const logClick = () => console.log('button was clicked');

describe('Testing Shopee Components', () => {

  it('renders <Shopee /> components', () => {
    shallow(<Shopee />);
  });

  it('Shopee components calls componentDidMount', () => {
    sinon.spy(Shopee.prototype, 'componentDidMount');
    shallow(<Shopee />);
    expect(Shopee.prototype.componentDidMount).to.have.property('callCount', 1);
    Shopee.prototype.componentDidMount.restore();
  });

  it('Shopee components has children components', () => {
    const wrapper = shallow(<Shopee />);
    expect(wrapper.contains(<InputAmount />));
    expect(wrapper.contains(<InputCurrency />));
    expect(wrapper.contains(<CurrencyCard />));
  });

  it('Shopee component keyPressInputAmount methods testing', () => {
    const wrapper = shallow(<Shopee />);
    const instance = wrapper.instance();
    const params = 13;

    expect(instance.keyPressInputAmount(params)).to.equal(undefined);
  });

  it('Shopee component addNewCurrency methods testing', async () => {
    const wrapper = shallow(<Shopee />);
    const instance = await wrapper.instance();

    const result = await instance.addNewCurrency();
    expect(result).to.equal(true);
  });

  it('Shopee component removeCurrency methods testing', async () => {
    const wrapper = shallow(<Shopee />);
    const instance = await wrapper.instance();
    const params = 'IDR';

    const result = await instance.removeCurrency(params);
    expect(result).to.equal(true);
  });

  it('Shopee component contentChild methods testing', () => {
    const wrapper = shallow(<Shopee />);
    const instance = wrapper.instance();

    expect(instance.contentChild()).to.be.a('object');
  });
});

describe('Testing CurrencyCard Components', () => {

  it('renders <CurrencyCard /> components', () => {
    shallow(<CurrencyCard />);
  });

  it('On click Currency Button', () => {
    const wrapper = shallow(<CurrencyCard />);
    expect(wrapper.contains(<Button />)).to.equal(false);
  });

});

describe('Testing InputAmount Components', () => {

  it('renders <InputAmount /> components', () => {
    shallow(<InputAmount />);
  });

  it('renders InputAmount Button', () => {
    const wrapper = shallow(<InputAmount />);
    expect(wrapper.contains(<Button fluid onClick={logClick} />)).to.equal(false);
  });

  it('render input on InputAmount', () => {
    const wrapper = shallow(<InputAmount />);
    expect(wrapper.find('Input')).to.have.lengthOf(0);
  });

});

describe('Testing InputCurrency Components', () => {

  it('renders <InputCurrency /> components', () => {
    shallow(<InputCurrency />);
  });

  it('renders InputCurrency Button', () => {
    const wrapper = shallow(<InputCurrency />);
    expect(wrapper.contains(<Button fluid onClick={logClick} />)).to.equal(false);
  });

  it('render input on InputCurrency', () => {
    const wrapper = shallow(<InputCurrency />);
    expect(wrapper.find('Input')).to.have.lengthOf(0);
  });

});
