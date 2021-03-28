import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <>
        <CardColumns>
          {this.props.beast.map((beast, index) => {
            return (
              <HornedBeast
                key={index}
                name={beast.keyword}
                title={beast.title}
                img_url={beast.image_url}
                description={beast.description}
                modalOn={this.props.modalOn}
              />
            )
          })}
        </CardColumns>
      </>  
    )
  }
}

export default Main;
