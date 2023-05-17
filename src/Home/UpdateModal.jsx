import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import "./IndexStyle.css"
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import Modals from "../components/UI/Modal"
//import { colorOptions } from "./constants";

const UpdateModal = (props) => {
	return (
		<div className="model_box">
			<Modal
				show={props.updateModal}
				onHide={props.handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Update User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				{props.children}
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
			{/* Model Box Finsihs */}
		</div>
	)
}
export default UpdateModal;