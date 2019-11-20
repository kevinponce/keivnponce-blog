---
title: Algolia React
date: "2019-08-07T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to add search to reactjs using Algolia which will provide suggestions through search box.
---

Algolia for ruby on rails was soo simple.
I wish react would have been just as easy...

They did a great job teaching how to create a basic search, but once you need to customize it falls apart.
Once I found better documentation it become easy.
`https://www.algolia.com/doc/api-reference/widgets/search-box/react/`
`https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/`

After playing around with it, I was happy with the following component I created.
It has a custom form, and hits.
If the use did not type anything, it will not display the hits.
The hit is also rendering the first_name, which might need to be changed if your response does not have a first_name.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Configure, connectStateResults, connectSearchBox } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const Hit = ({ hit }: Props) => <div>{hit.first_name}</div>;

const Results = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query ? (
      <Hits hitComponent={Hit} />
    ) : //<div>No query</div>
    null
);

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate role="search"
                   onSubmit={(e) => {
                      e.preventDefault();

                      // Whatever you want when the user submits form
                   }}>
    <input className="input-field"
           type="search"
           name="Search"
           placeholder="Explore Rejuve" 
           value={currentRefinement}
           onChange={event => refine(event.currentTarget.value) }/>
    {currentRefinement !== '' ?
      (<a className="btn waves-effect waves-light"
              onClick={() => refine('')}>
              <i className="material-icons">close</i>
      </a>)
      :
      (<div>no</div>)
    }
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

class Search extends React.Component {
  render() {
    const searchClient = algoliasearch(
      this.props.algoliaSearchAppId,
      this.props.algoliaSearchKey
    );

    return (
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
      >
        <CustomSearchBox />
        <Configure hitsPerPage={20} />
        <Results />
      </InstantSearch>
    );
  }
}

Search.propTypes = {
  algoliaSearchKey: PropTypes.string.isRequired,
  algoliaSearchAppId: PropTypes.string.isRequired,
  indexName: PropTypes.string.isRequired,
};

export default Search;
```
Here is an example how to use it.
Make sure you update `algoliaSearchKey`, `algoliaSearchAppId`, and `indexName`.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.js'

class Example extends React.Component {
  render() {
    return (
      <Search algoliaSearchKey="XXXXX"
              algoliaSearchAppId="XXXX"
              indexName="User"/>
    );
  }
}
```
Pretty simple once you know what you are doing.
A good resource to help you is algolia widget documentation.
`https://www.algolia.com/doc/api-reference/widgets/search-box/react/`
`https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/`
