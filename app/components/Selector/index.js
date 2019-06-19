import React from 'react';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Apple',
      model: '',
      year: '',
    };
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
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

  render() {
    const { brands, years } = this.props;
    return (
      <div>
        <select value={this.state.brand} onChange={this.handleBrandChange}>
          {Object.keys(brands).map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
        <select value={this.state.model} onChange={this.handleModelChange}>
          {brands[this.state.brand].map((model, index) => {
            return (
              <option key={index} value={model}>
                {model}
              </option>
            );
          })}
        </select>
        <select value={this.state.year} onChange={this.handleYearChange}>
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Selector;
