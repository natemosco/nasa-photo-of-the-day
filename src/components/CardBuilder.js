import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CardBuilder extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
 
  render() {
    
    // let {props} = this;
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle HD Image</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <h1>Title:{this.props.title}</h1>
            <p>Description: {this.props.explanation}</p>
            <img src={this.props.hdurl} alt="{props.title}"/>
            <p>Copyrights: {this.props.copyright}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CardBuilder;