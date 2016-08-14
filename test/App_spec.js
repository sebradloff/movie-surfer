import React from 'react';
import App from '../src/App';
import Header from '../src/common/header/Header';
import expect from 'expect';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have a header', () => {
    const wrapper = shallow(< App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });
});
