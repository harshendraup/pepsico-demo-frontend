
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import "./IndexStyle.css"
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import Modals from "../components/UI/Modal"
//import { default as ReactSelect } from "react-select";
import { colorOptions } from "./consttants";

const UpdateModal = (props) => {
	const [firstName, setFirstName] = useState(props?.userData?.FirstName);
	const [middleName,setMiddleName]= useState(props?.userData?.MiddleName)
	const [lastName, setLastName] = useState(props?.userData?.LastName)
	const [phone, setPhone] = useState(props?.userData?.phone)
	const [email, setEmail] = useState(props?.userData?.email)
	const [role, setRole] = useState(props?.userData?.role)
	const [city, setCity] = useState(props?.userData?.city)
	const [state, setState] = useState(props?.userData?.state)
	const [country, setCountry] = useState(props?.userData?.country)
	const [pin, setPin] = useState(props?.userData?.pin)
	const [hobbies, setHobbies] = useState(null);
	const [gender, setGender] = useState("Male")
	const [showModel,setShowModel] = useState(false)
	useEffect(() => {
		setFirstName(props?.userData?.FirstName)
		setMiddleName(props?.userData?.MiddleName)
		setLastName(props?.userData?.LastName)
		setPhone(props?.userData?.phone)
		setEmail(props?.userData?.email)
		setRole(props?.userData?.role)
		setCity(props?.userData?.city)
		setState(props?.userData?.state)
		setCountry(props?.userData?.country)
		setPin(props?.userData?.pin)
	},[props])



	//update user api
	const handleSubmit = (id) => {
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
				country: country,
				pincode: pin,
				hobbies: hobbies  ? hobbies : '',
				gender: gender,
				occupation: "Software Engineer"

			})
		}
		console.log("api data", requestOptions);
		fetch(`http://192.168.0.118:8089/updateuser/${id}`, requestOptions)
			.then(res => {
				props.fetchUsers()
				props.handleClose()
			});
	}
	const handleClose = () => {
		props.handleClose()
	};
    const updateHobbies = (items) => {
		let a = '';
		!!items && items.length  > 0 && items.map(i => a = a + i.value + "," + ' ' )
		setHobbies(a);

	}

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
						  
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={firstName} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setFirstName(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Enter First Name" 
								/>
							</div>
							<div className="form-group">
								<input 
								type="name" 
									name="firstName"   
									value={middleName} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setMiddleName(e.target.value)}  
									aria-describedby="emailHelp" 
									placeholder="Enter Middle Name" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={lastName} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setLastName(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Enter Last Name" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={phone} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setPhone(e.target.value)}  
									aria-describedby="emailHelp" 
									placeholder="Enter Mobile Number" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={email} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setEmail(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Enter Your Email" 
								/>
							</div>
							
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={role} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setRole(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Role" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={city} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setCity(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="City" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={state} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setState(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="State" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={country} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setCountry(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Country" 
								/>
							</div>
							<div className="form-group">
								<input 
									type="name" 
									name="firstName"   
									value={pin} 
									className="form-control" 
									id="exampleInputEmail1"
									onChange={(e) => setPin(e.target.value)} 
									aria-describedby="emailHelp" 
									placeholder="Enter Your Pin" 
								/>
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
										// value={hobbies}
										options={colorOptions}
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										components={{
											Option
										}}
										onChange={(e)=> updateHobbies(e)}
										allowSelectAll={true}
									//value={addFormData.hobbies}
									/>
								</span>
								<div className="App" style={{}}>
								<h3>Gender</h3>

								<input
									type="radio"
									name="topping"
									value="Male"
									id="male"
									checked={gender === "Male"}
									onChange={(e) => setGender(e.target.value)}
								/>
								<label htmlFor="male">Male</label>

								<input
									type="radio"
									name="gender"
									value="Female"
									id="female"
									checked={gender === "Female"}
									onChange={(e) => setGender(e.target.value)}
								/>
								<label htmlFor="female">Female</label>

								<p>
									Select gender <strong>{gender}</strong>
								</p>
							</div>
							<div style={{ float: 'right', }}>
								<Button onClick={() => handleSubmit(props?.userData?.UserID)} className="btn btn-success me-2">Update User</Button>
								<Button variant="secondary" onClick={handleClose} >
									Close
								</Button>
							</div>
							</div>
							
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
			{/* Model Box Finsihs */}
		</div>
	)
}
export default UpdateModal;