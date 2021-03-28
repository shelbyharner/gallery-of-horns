import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render () {
    return (
      <div>
        <Modal show={this.props.modalOn} onHide={this.props.modalOff}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.clickedBeast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                {this.props.clickedBeast.img_url}
                {this.props.clickedBeast.description}
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={this.props.modalOff}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}  

export default SelectedBeast;
