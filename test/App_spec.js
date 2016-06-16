import React from 'react';
import App from '../src/App';
import expect from 'expect';
import { mount } from 'enzyme';

describe('App', () => {
  describe('component structure', () => {
    it('should have an h1 with teal color', () => {
      const wrapper = mount(< App />);

      expect(wrapper.find('h1').hasClass('teal')).toBe(true);
    });
  });
});
