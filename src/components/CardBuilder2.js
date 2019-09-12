import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CardBuilder2 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
 
  render() {
    let year = new Date().getFullYear();
    let month= new Date().getMonth() + 1;
    let day = new Date().getDate();  
    // let {props} = this;
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle Low-Res Image</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <h1>Title:{this.props.title}</h1>
            <p>Description: {this.props.explanation}</p>
            <img src={this.props.url} alt="{props.title}"/>
            <p>Copyrights: {this.props.copyright}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CardBuilder2;