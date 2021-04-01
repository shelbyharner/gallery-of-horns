import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class HornForm extends React.Component {
  render () {
    return (
      <Container>
        <Form.Group controlId="hornsFilter">
          <Form.Label>
            <h3>Filter by Number of Horns</h3>
            </Form.Label>
          <Form.Control 
            onChange={this.props.onChange} 
            as="select"  
            custom>
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
        </Form.Group>
      </Container>
    );
  }
}

export default HornForm;
