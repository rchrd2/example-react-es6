import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  /**
   * This adds the this.context.router to this class
   */
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    // Need to explicitly bind handler to this
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // Set the initial state for this component
    this.state = {
      inputValue: this.props.params.splat
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.splat !== this.props.params.splat) {
      this.setState({inputValue: nextProps.params.splat});
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var value = this.refs.theInput.value;
    // Navigate to the new url
    this.context.router.push('/search/' + value);
  }
  /**
   * The input is a managed component, so it is bound to state.
   * @see https://facebook.github.io/react/docs/forms.html
   */
  handleInput(e) {
    this.setState({inputValue: e.target.value});
    e.preventDefault();
  }
  render() {
    return <div>
      <ul className="menu">
        <li><Link to={`/`}>Home</Link></li>
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="theInput" onChange={this.handleInput}
          value={this.state.inputValue} />
        <input type="submit" value="Submit" />
      </form>
      {this.props.children}
    </div>
  }
}
