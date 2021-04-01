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
              <Modal.Title>
                <h3>{this.props.clickedBeast.title}</h3>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={this.props.clickedBeast.image_url} alt="" className="modal_image"></img>
                <p>{this.props.clickedBeast.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="info" onClick={this.props.modalOff}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}  

export default SelectedBeast;
