import React from 'react';
import Rating from '../../src/movie/Rating';
import expect from 'expect';
import { mount } from 'enzyme';

describe('Rating', () => {
  it('should render 1 positive star and 9 negative stars when the rating is 1.2', () => {
    const rating = 1.2;
    const actual = mount(<Rating rating={rating} />);
    expect(actual.find('.positive-star').length).toEqual(1);
    expect(actual.find('.negative-star').length).toEqual(9);
  });

  it('should render 5 positive stars and 5 negative stars when the rating is 4.9', () => {
    const rating = 4.9;
    const actual = mount(<Rating rating={rating} />);
    expect(actual.find('.positive-star').length).toEqual(5);
    expect(actual.find('.negative-star').length).toEqual(5);
  });

  it('should render 9 positive stars and 1 negative stars when the rating is 9.4', () => {
    const rating = 9.4;
    const actual = mount(<Rating rating={rating} />);
    expect(actual.find('.positive-star').length).toEqual(9);
    expect(actual.find('.negative-star').length).toEqual(1);
  });
});
