import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Autocomplete from 'react-md/lib/Autocompletes';

const programmingLanguages = [
  'java', 'js'
]

export default class Page1 extends Component {
  filter = () => {
    return programmingLanguages
  }
  render() {
    return (

      <div className="md-grid">
     
        <h2 className="md-cell md-cell--12 md-text-container">
          Page 1
        </h2>
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              className="md-cell md-cell--4"
              defaultValue=" "
              data={programmingLanguages}
              filter={this.filter}
            />
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    );
  }
}
