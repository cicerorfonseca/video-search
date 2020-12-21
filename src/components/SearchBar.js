import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='ui fluid icon input'>
            <input
              type='text'
              value={this.state.term}
              placeholder='Search...'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className='search icon'></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
