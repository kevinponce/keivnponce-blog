---
title: React Phone Input
date: "2019-09-05T22:16:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

Phone Input with a country code is something designers love, and every time have to make one I grown.

To make my life easier, I decided to create a generic component I can use to make my life easier.

```
import React from 'react';
import PropTypes from 'prop-types';
import intlTelInput from 'intl-tel-input';
import { get } from 'lodash';
import '../../../../node_modules/intl-tel-input/build/css/intlTelInput.css';
import '../../../../node_modules/intl-tel-input/build/js/utils.js';

class PhoneInput extends React.Component {
  constructor(props){
    super(props);

    this.phoneInput = null;
    this.phoneInputRef = React.createRef();

    this.phoneChange = this.phoneChange.bind(this);
  }

  componentDidMount() {
    const _this = this;
    _this.phoneInput = intlTelInput(_this.phoneInputRef.current, {
      preferredCountries: ['us', 'gb', 'ca', 'au']
    });

    _this.phoneInputRef.current.addEventListener("countrychange", function() {
      _this.phoneChange();
    });

    if (_this.props.phone) {
      _this.phoneInput.setNumber(_this.props.phone);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.phone !== nextProps.phone && nextProps.phone) {
      this.phoneInput.setNumber(nextProps.phone);
      this.phoneChange();
    }
  }

  componentWillUnmount() {
    if (this.phoneInput) {
      this.phoneInput.destroy();
    }
  }

  phoneChange (e) {
    let error = this.phoneInput.getValidationError();
    let phone = this.phoneInput.getNumber();
    let isValidPhoneNumber = this.phoneInput.isValidNumber();
    let countryCode = get(this.phoneInput.getSelectedCountryData(), 'iso2');

    this.props.onPhoneNumberChange({ isValidPhoneNumber, phone, error, countryCode });
  }

  render() {
    return (
      <input type="text"
             ref={this.phoneInputRef}
             onChange={this.phoneChange}
             className={this.props.className}
             placeholder={this.props.placeholder || ""} />
    );
  }
}

PhoneInput.propTypes = {
  onPhoneNumberChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  phone: PropTypes.string,
};

export default PhoneInput;
```

Here is an example on how to use it:
```
class Example extends React.Component {
  constructor(props){
    super(props);

    this.phoneInputChange = this.phoneInputChange.bind(this);

    this.state = {
      isValidPhoneNumber: false,
      phone: '',
      countryCode: ''
    };
  }

  phoneInputChange({ isValidPhoneNumber, phone, countryCode }){
    this.setState({ isValidPhoneNumber, phone, countryCode });
  }

  render() {
    return (
      <PhoneInput onPhoneNumberChange={ this.phoneInputChange }
                  className={`${this.state.isValidPhoneNumber ? 'valid' : 'invalid'}`}
                  phone={this.state.phone} />
    );
  }
}
```