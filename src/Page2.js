import React, { Component } from 'react';
import _ from 'lodash';

export default class Page2 extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Page 2 {_.snakeCase('Olá marcos andrei! lazy load ok!!!!!')}
        </h2>
        <p className="md-cell md-cell--12 md-text-container">
          Here is some text for the second page. It is quite
          beautiful.
        </p>
      </div>
    );
  }
}
