import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <>
        <CardColumns>
          {this.props.beasts.map((beast, index) => {
            return (
              <HornedBeast
                key={index}
                name={beast.keyword}
                title={beast.title}
                img_url={beast.image_url}
                description={beast.description}
                showModal={this.props.showModal}
                index={index}
              />
            )
          })}
        </CardColumns>
      </>  
    )
  }
}

export default Main;
