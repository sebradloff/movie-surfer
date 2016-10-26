import React from 'react';
import SearchBar from '../../src/search/SearchBar';
import expect from 'expect';
import nock from 'nock';
import { mount } from 'enzyme';

import path from 'path';
import fs from 'fs';

const fileLocation = path.join(__dirname, 'movie_search_response.json');
const movieResponseJSON = JSON.parse(fs.readFileSync(fileLocation));

describe('SearchBar', () => {
  it('should render all 8 search results from a given search term', (done) => {
    // given
    const searchBarWrapper = mount(<SearchBar />);
    const searchQuery = 't';
    nock('http://localhost:8080')
        .get(`/api/v1/movies?query=${searchQuery}`)
        .reply(200, movieResponseJSON);

    // when
    searchBarWrapper.find('input').simulate('change', { target: { value: searchQuery } });

    // then
    setTimeout(() => {
      const searchResults = searchBarWrapper.find('SearchResult');
      expect(searchResults.length).toEqual(8);

      const takenMovieId = 8681;
      const takenMovie = searchBarWrapper.find('SearchResult')
        .filterWhere(searchResult => searchResult.props().value === takenMovieId);
      expect(takenMovie.props().title).toEqual('Taken');
      expect(takenMovie.props().value).toEqual(takenMovieId);
      done();
    }, 1000);
  });

  it('should have the loader running as the search runs', (done) => {
    const searchBarWrapper = mount(<SearchBar />);
    const searchQuery = 't';
    nock('http://localhost:8080')
        .get(`/api/v1/movies?query=${searchQuery}`)
        .delay(2000)
        .reply(200, movieResponseJSON);

    searchBarWrapper.find('input').simulate('change', { target: { value: searchQuery } });

    setTimeout(() => {
      const searchResults = searchBarWrapper.find('SearchResult');
      expect(searchResults.length).toEqual(0);

      const search = searchBarWrapper.find('Search');
      expect(search.props().loading).toBe(true);
      done();
    }, 1000);
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
