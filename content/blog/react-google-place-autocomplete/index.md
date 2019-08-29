---
title: React Google Place Autocomplete
date: "2019-08-03T22:12:00.121Z"
tags: ["javascript", "google"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

Google Places autocomplete is amazing.

It makes address extremely simple. I personally like to use their place id and formatted address instead of trying to parse it and manage the address manually. 

Here is a quick example on how use use google places with react.

```babel
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);

    this.autoCompleteInput = React.createRef();
    this.autocomplete = null;

    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autoCompleteInput.current,
      { 'types': ['geocode'] }
    );

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    const { location } = place.geometry;

    this.props.onChange({
      lat: location.lat(),
      lng: location.lng(),
      placeId: place.place_id,
      formattedAddress: place.formatted_address,
    })
  }

  render() {
    return (
      <input type="text"
             name="address"
             placeholder="Enter address"
             value={this.props.value}
             ref={this.autoCompleteInput} />
    );
  }
}

AddressAutoCompleteInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddressAutoCompleteInput;
```

Here is an example on how to use it:
```
import React, { Component } from 'react';
import AutocompleteInput from 'autocompleteInput';

export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      placeId: null,
      formattedAddress: '',
    };

    this.addressChange = this.addressChange.bind(this);
  }

  addressChange({ lat, lng, placeId, formattedAddress }){
    this.setState({
      lat,
      lng,
      placeId,
      formattedAddress,
    })
  }

  render() {
    return (
      <AutocompleteInput value={this.state.formattedAddress} onChange={this.addressChange} />
    );
  }
}
```