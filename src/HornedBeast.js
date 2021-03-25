import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteClick: 0
    }
  }

  numOfVotes = () => {
    this.setState({voteClick: this.state.voteClick + 1});
  }

  render() {
    return (
      <Card 
        style={{ width: '18rem' }}
        onClick={this.numOfVotes}>
        <Card.Img variant="top" src={this.props.img_url}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          😻 = {this.state.voteClick}
        </Card.Footer>
      </Card>
    );
  }
}

export default HornedBeast;
