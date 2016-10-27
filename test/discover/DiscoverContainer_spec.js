import React from 'react';
import DiscoverContainer from '../../src/discover/DiscoverContainer';
import expect from 'expect';
import nock from 'nock';
import { mount } from 'enzyme';

import path from 'path';
import fs from 'fs';

const fileLocation = path.join(__dirname, '../../src/discover/movies.json');
const movieResponseJSON = JSON.parse(fs.readFileSync(fileLocation));

describe('DiscoverContainer', () => {
  it('should render all movies from response on load', (done) => {
    // given
    nock('http://localhost:8080')
          .get('/api/v2/discover/1')
          .reply(200, movieResponseJSON);
    // when
    const discoverContainerWrapper = mount(<DiscoverContainer />);
    // then
    setTimeout(() => {
      expect(discoverContainerWrapper.find('MovieCard').length).toEqual(20);
      done();
    }, 100);
  });

  it('should show a Spinner while waiting for a response', (done) => {
    // given
    nock('http://localhost:8080')
          .get('/api/v2/discover/1')
          .delay(1000)
          .reply(200, movieResponseJSON);
    // when
    const discoverContainerWrapper = mount(<DiscoverContainer />);
    // then
    setTimeout(() => {
      expect(discoverContainerWrapper.find('Spinner').length).toEqual(1);
      done();
    }, 100);
  });

  it('should show an error message when a failure occurs', () => {
    // given
    nock('http://localhost:8080')
          .get('/api/v2/discover/1')
          .replyWithError({ status_code: 34, status_message: 'The resource you requested could not be found.' });
    // when
    const discoverContainerWrapper = mount(<DiscoverContainer />);
    // then
    setTimeout(() => {
      expect(discoverContainerWrapper.html()).toEqual('<div>Sorry but we got some problems to fix!</div>');
    }, 100);
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
