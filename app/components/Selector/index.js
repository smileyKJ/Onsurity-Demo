import React from 'react';
import Button from '../Button';
import StyledForm from './StyledForm';
import StyledSelect from './StyledSelect';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      year: '',
    };
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBrandChange = event => {
    this.setState({
      brand: event.target.value,
    });
  };

  handleModelChange = event => {
    this.setState({
      model: event.target.value,
    });
  };

  handleYearChange = event => {
    this.setState({
      year: event.target.value,
    });
  };

  handleClick() {
    alert('Button Clicked');
  }

  render() {
    const { brands, years } = this.props;
    let customselect;
    if (this.state.brand == '') {
      customselect = (
        <StyledSelect disabled={true}>
          <option value="">Select your model</option>
        </StyledSelect>
      );
    } else {
      customselect = (
        <StyledSelect
          value={this.state.model}
          onChange={this.handleModelChange}
        >
          <option value="">Select your model</option>
          {brands[this.state.brand].map((model, index) => {
            return (
              <option key={index} value={model}>
                {model}
              </option>
            );
          })}
        </StyledSelect>
      );
    }

    return (
      <StyledForm>
        <StyledSelect
          value={this.state.brand}
          onChange={this.handleBrandChange}
        >
          <option value="">Select your brand</option>
          {Object.keys(brands).map((brand, index) => {
            return <option key={index}>{brand}</option>;
          })}
        </StyledSelect>
        {customselect}
        <StyledSelect value={this.state.year} onChange={this.handleYearChange}>
          <option value="">When did you buy it?</option>
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </StyledSelect>
        <Button href="#" onClick={this.handleClick}>
          Get Insured
        </Button>
      </StyledForm>
    );
  }
}

export default Selector;
