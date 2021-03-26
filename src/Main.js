import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'

class Main extends React.Component {
  render() {
    let hornedArray = [];
    data.forEach((beast, index) => {
      hornedArray.push(
        <HornedBeast
          key = {index}
          name = {beast.keyword}
          title = {beast.title}
          img_url = {beast.image_url}
          description = {beast.description}
      />
      );
    });

    return (
      <CardColumns>
        {hornedArray}
      </CardColumns>
    );
  }
}

export default Main;
