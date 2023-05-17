import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import "./IndexStyle.css"
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import Modals from "../components/UI/Modal"
import RenderViewDetailsModal from "./ViewDetailsModal";
import { colorOptions } from "./consttants";
import UpdateModal from "./UpdateModal";
import AppHeader from "./AppHeader";
import TableHeader from "./TableHeader";
import { renderAddress } from "./Helper"
import { getUsers } from "./ApiClient"
function Home() {
	const [firstName, setFirstName] = useState()
	const [middleName, setMiddleName] = useState()
	const [lastName, setLastName] = useState()
	const [phone, setPhone] = useState()
	const [email, setEmail] = useState()
	const [hobbies, setHobbies] = useState([])
	const [role, setRole] = useState()
	const [city, setCity] = useState()
	const [state, setState] = useState()
	const [contry, setContry] = useState()
	const [pin, setPin] = useState()
	const [gender, setGender] = useState("Male")
	const [occupation, setOccupation] = useState()
	const [addData, setAddData] = useState()
	const [show, setShow] = useState(false);
	const [optionSelected, setOptionSelected] = useState(null)
	const [viewDetailModal, setViewDetailModal] = useState(false);
	const [datas, setData] = useState();
	const [updateModal, setUpdateModal] = useState(false)
	const [userData, setUpdateUserData] = useState(undefined);
	const [selectedHobbies, setSelectedHobbies] = useState(undefined);

	/*handle Fields */
	const handleGender = (e) => {
		setGender(e.target.value)
	}

	const handleFirstName = (e) => {
		e.preventDefault();
		setFirstName(e.target.value);
	}
	const handleMiddleName = (e) => {
		e.preventDefault();
		setMiddleName(e.target.value)
	}
	const handleLastName = (e) => {
		e.preventDefault();
		setLastName(e.target.value)
	}
	const handlePhone = (e) => {
		e.preventDefault()
		setPhone(e.target.value)
	}
	const handleEmail = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
	}
	const handleHobbies = (e) => {
		e.preventDefault()
		setHobbies(e.target.value)
	}
	const handleRole = (e) => {
		e.preventDefault();
		setRole(e.target.value)
	}
	const handleCity = (e) => {
		e.preventDefault()
		setCity(e.target.value)
	}
	const handleState = (e) => {
		e.preventDefault()
		setState(e.target.value)
	}
	const handleContry = (e) => {
		e.preventDefault()
		setContry(e.target.value)
	}
	const handlePin = (e) => {
		e.preventDefault()
		setPin(e.target.value)
	}
	const handleOccupation = (e) => {
		e.preventDefault()
		setOccupation(e.target.value)
	}

	const handleSelectChange = (e) => {
		console.log("Here are the values", e);
		let a = '';
		e?.map(h => {
			a = a + h.value + "," + " "
		})
		setSelectedHobbies(a);
	};

	/* */
	const handleShow = () => setShow(true);
	const Option = (props) => {
		return (
			<div>
				<components.Option {...props}>
					<input
						type="checkbox"
						checked={props.isSelected}
						onChange={() => null}
					/>{" "}
					<label>{props.label}</label>
				</components.Option>
			</div>
		);
	};


	const handleCloseViewDetailsModal = () => {
		setViewDetailModal(false);
	};

	const showViewDetailsModal = () => {
		setViewDetailModal(true);
	};

	const showAddDetailsModal = () => {
		handleShow();
	};

	const handleClose = () => {
		setShow(false)
	};


	/*render View Details */


	/*render View Details */
	const renderAddDetailsModal = () => {
		return (
			<div className="model_box">
				<Modal
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add User</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="form-group">
								<input type="name" name="firstName" onChange={handleFirstName} value={firstName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" />
							</div>
							<div className="form-group mt-3">
								<input type="country" name="country" onChange={handleMiddleName} value={middleName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Middle Name" />
							</div>
							<div className="form-group mt-3">
								<input type="city" name="city" onChange={handleLastName} value={lastName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name" />
							</div>
							<div className="form-group mt-3">
								<input type="city" name="city" onChange={handleRole} value={role} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Role" />
							</div>
							<div className="form-group mt-3">

								<input type="address" name="address" onChange={handlePhone} value={phone} className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile Number" />
							</div>
							<div className="form-group mt-3">

								<input type="address" name="address" onChange={handleEmail} value={email} className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
							</div>
							<div className="form-group mt-3">

								<input
									type="address"
									name="address"
									onChange={handleOccupation} value={occupation} className="form-control" id="exampleInputPassword1" placeholder="Your Occupation" />
							</div>

							<div className="form-group mt-3">

								<input type="address" name="address" onChange={handleCity} value={city} className="form-control" id="exampleInputPassword1" placeholder="Enter City" />
							</div>
							<div className="form-group mt-3">

								<input type="address" name="address" onChange={handleState} value={state} className="form-control" id="exampleInputPassword1" placeholder="State" />
							</div>
							<div className="form-group mt-3">
								<input type="address" name="address" onChange={handleContry} value={contry} className="form-control" id="exampleInputPassword1" placeholder="Country" />
							</div>
							<div className="form-group mt-3">
								<input type="address" name="address" onChange={handlePin} value={pin} className="form-control" id="exampleInputPassword1" placeholder="Pin Code" />
							</div>
							<div className="form-group mt-3">
								<span
									className="d-inline-block"
									data-toggle="popover"
									data-trigger="focus"
									data-content="Please selecet account(s)"
								>
									<ReactSelect
										styles={{
											control: (baseStyles, state) => ({
												...baseStyles,
												width: "180px"
											}),
										}}
										// name="hobbies"
										placeholder="Select Hobbies"
										options={colorOptions}
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										components={{
											Option
										}}
										onChange={handleSelectChange}
										allowSelectAll={true}
									//value={addFormData.hobbies}
									/>
								</span>
							</div>

							<div className="App" style={{}}>
								<h3>Gender</h3>

								<input
									type="radio"
									name="topping"
									value="Male"
									id="male"
									checked={gender === "Male"}
									onChange={handleGender}
								/>
								<label htmlFor="male">Male</label>

								<input
									type="radio"
									name="gender"
									value="Female"
									id="female"
									checked={gender === "Female"}
									onChange={handleGender}
								/>
								<label htmlFor="female">Female</label>

								<p>
									Select gender <strong>{gender}</strong>
								</p>
							</div>


							<br />
							<div style={{ float: 'right', }}>
								<Button onClick={() => handleSubmit()} className="btn btn-success me-2">Add User</Button>
								<Button variant="secondary" onClick={handleClose} >
									Close
								</Button>
							</div>
						</form>
					</Modal.Body>

					<Modal.Footer>


					</Modal.Footer>
				</Modal>
				{/* Model Box Finsihs */}
			</div>
		)
	}


	/*render Add Details Modal*/


	const handleSubmit = () => {
		console.log("I got here in handle submit");
		let requestOptions = {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				FirstName: firstName,
				MiddleName: middleName,
				LastName: lastName,
				role: role,
				phone: phone,
				email: email,
				city: city,
				state: state,
				country: contry,
				pincode: pin,
				hobbies: !!selectedHobbies ? selectedHobbies : '',
				gender: gender,
				occupation: "Software Engineer"

			})
		}
		console.log("api data", requestOptions);
		fetch("http://192.168.1.6:8089/createUser", requestOptions).then(res => fetchUsers());
	}

	const deleteUser = (id) => {
		let requestOptions = {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
		}
		fetch(`http://192.168.1.6:8089/deleteUser/${id}`, requestOptions).then(res => fetchUsers())
	}

	const fetchUsers = async () => {
		console.log("hello");
		const url = await fetch("http://192.168.1.6:8089/getUsersList");
		//console.log("response",response);
		const response = await url.json();
		setData(response)
		console.log("response", response);
	}

	useEffect(() => {
		fetchUsers();
	}, [])

	console.log("data-- ", datas);

	return (
		<div className="container p-0 m-0 " >
			<div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
				<AppHeader showAddDetailsModal={() => showAddDetailsModal()} />
				<div className="row">
					<div className="table-responsive " >
						<table className="table table-striped table-hover table-bordered">
							{<TableHeader />}
							<tbody>
								{datas?.data.map((item, i) => {
									return <tr key={item.UserID}>
										<td>{item?.FirstName}</td>
										<td>{item?.MiddleName}</td>
										<td>{item?.LastName}</td>
										<td>{item?.phone}</td>
										<td>{renderAddress(item)}</td>
										<td>{item?.email}</td>
										<td>{item?.gender}</td>
										<td>{item?.hobbies}</td>
										<td>{item?.occupation}</td>
										<td>{item?.role}</td>
										<td><Button variant="primary" style={{ marginBottom: '20px' }} onClick={() => showViewDetailsModal()}>View</Button></td>
										<td>
											<a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" onClick={(e) => { setUpdateModal(true), setUpdateUserData(item) }}>&#xE254;</i></a>
											<a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} onClick={() => deleteUser(item.UserID)}><i className="material-icons">&#xE872;</i></a>
										</td>
									</tr>
								})}

							</tbody>
						</table>
					</div>
					{renderAddDetailsModal()}
					<UpdateModal updateModal={updateModal} handleClose={() => setUpdateModal(false)} />

					<RenderViewDetailsModal viewDetailModal={viewDetailModal} handleCloseViewDetailsModal={handleCloseViewDetailsModal} />
				</div>
			</div>
		</div>
	);
}

export default Home;