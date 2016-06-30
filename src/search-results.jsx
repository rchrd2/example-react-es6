/**
 * The search results component does ajax and displays results
 */

import React from 'react';
import jQuery from 'jquery';

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      results: {
        data: []
      },
      isLoading: false
    };
  }
  componentDidMount() {
    this.fetchResults(this.props.params.splat);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.splat !== this.props.params.splat) {
      this.fetchResults(nextProps.params.splat);
    }
  }
  fetchResults(value) {
    // do ajax
    // set state

    // Note, we're using the fat arrow function syntax `() => {}`. This keeps the
    // same `this` context within the function without having to use the old
    // `var self = this;` trick

    this.setState({isLoading: true});
    jQuery.ajax({
      // Note this is the public beta key
      url: 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + value,
      method: 'GET'
    }).then((results) => {
      // set state
      this.setState({results: results, isLoading: false});
    }, () => {
      console.log('Alert there was an error :(');
      this.setState({isLoading: false});
    });
  }
  render() {
    var loaderEl;
    if (this.state.isLoading) {
      loaderEl = <div>Loading...</div>;
    }
    var resultEls;
    if (this.state.results.data.length > 0) {
      resultEls = this.state.results.data.map((row, idx) => {
        return <li key={idx}>
          <img
            src={row.images.fixed_width.url}
            width={row.images.fixed_width.width}
            height={row.images.fixed_width.height}
          />
        </li>;
      });
    }
    // Note, undefined values are not rendered
    return <div>
      <h2>{this.props.params.splat}</h2>
      {loaderEl}
      <ul>{resultEls}</ul>
    </div>
  }
}
