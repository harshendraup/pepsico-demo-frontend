import "bootstrap/dist/css/bootstrap.min.css";
import Modals from '../components/UI/Modal'
import { Button, Col, Row, Modal } from 'react-bootstrap';
const RenderViewDetailsModal = (props) => {
	return (
		<Modals
			show={props.viewDetailModal}
			handleClose={props.handleCloseViewDetailsModal}
			modalTitle={"View Details"}
			size="lg"
		>
			<Row>
				<Col md="6">
					<label className="key">ID</label>
					<p className="value">ID</p>
				</Col>
				<Col md="6">
					<label className="key">First Name</label>
					<p className="value">First Name</p>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<label className="key">Middle Name</label>
					<p className="value">Middle Name</p>
				</Col>
				<Col md="6">
					<label className="key">LastName</label>
					<p className="value">LastName</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Mobile Number</label>
					<p className="value">Mobile Number</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Email</label>
					<p className="value">Email</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Street</label>
					<p className="value">Street</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Hobbies</label>
					<p className="value">Hobbies</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Role</label>
					<p className="value">Role</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">City</label>
					<p className="value">City</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Country</label>
					<p className="value">Country</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Gender</label>
					<p className="value">Gender</p>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<label className="key">Occupation</label>
					<p className="value">Occupation</p>
				</Col>
			</Row>

		</Modals>
	);
}

export default RenderViewDetailsModal;