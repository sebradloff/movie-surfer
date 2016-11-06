import React from 'react';
import DiscoverContainer from '../../src/discover/DiscoverContainer';
import expect from 'expect';
import nock from 'nock';
import { mount } from 'enzyme';

import path from 'path';
import fs from 'fs';

const fileLocation = path.join(__dirname, './movies.json');
const movieResponseJSON = JSON.parse(fs.readFileSync(fileLocation));

const movieResponsePage2 = path.join(__dirname, './movies_page_2.json');
const movieResponse2JSON = JSON.parse(fs.readFileSync(movieResponsePage2));

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

  describe('clicking on the navigation', () => {
    it('should load the next page when the right arrow is clicked', (done) => {
      // given
      nock('http://localhost:8080')
            .get('/api/v2/discover/1')
            .reply(200, movieResponseJSON);

      nock('http://localhost:8080')
            .get('/api/v2/discover/2')
            .reply(200, movieResponse2JSON);
      // when
      const discoverContainerWrapper = mount(<DiscoverContainer />);
      setTimeout(() => {
        let navigator = discoverContainerWrapper.find('Navigator');
        expect(navigator.text()).toEqual('Results 1-20');

        // then
        const rightArrow = discoverContainerWrapper.find('#right-arrow');
        rightArrow.simulate('click', {});

        setTimeout(() => {
          navigator = discoverContainerWrapper.find('Navigator');
          expect(navigator.text()).toEqual('Results 21-40');
        }, 100);
        done();
      }, 100);
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
