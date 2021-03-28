import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  numOfClicks = () => {
    this.setState({votes: this.state.votes + 1});
  }

  render() {
    return (
      <Card 
        style={{ width: '18rem' }}
        onClick={this.numOfClicks}>
        <Card.Img variant="top" src={this.props.img_url}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          😻 = {this.state.votes}
        </Card.Footer>
      </Card>
    );
  }
}

export default HornedBeast;
