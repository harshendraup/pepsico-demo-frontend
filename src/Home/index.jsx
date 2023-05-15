import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import "./IndexStyle.css"
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
function Home() {
    const [rowData, setRowData] = useState([
        {
            id: 1,
            name: "Shubham",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 2,
            name: "Rahul",
            country: "India",
            city: "Delhi",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 3,
            name: "Shivam",
            country: "India",
            city: "Udaipur",
            address: "Tilak nagar, Raja park, jaipur",
        }
        , {
            id: 4,
            name: "Sunil",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 5,
            name: "Ajay",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 6,
            name: "Mohit",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        }
    ])
    const colourOptions = [
        { value: "ocean1", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" }
      ];
      
    const [addData, setAddData] = useState()
    const [show, setShow] = useState(false);
    
    const [optionSelected, setOptionSelected] = useState(null)
    const [addFormData, setAddFormData] = useState({
        id: null,
        name: "",
        country: "",
        city: "",
        address: "",
        hobbies:''
    })
    
    const handleAddFormChange = (e) => {
        e.preventDefault();
        setAddFormData(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const handleSelectChange = (selected) => {
        setAddFormData({...addFormData,hobbies:selected})
    };

    const addNewRecord = (e) => {
        e.preventDefault()
        console.log("addFormData", addFormData,addFormData.length > 0,!!addFormData.name)

        if (!!addFormData.name) {
            setRowData([
                ...rowData,
                {
                    id: rowData?.length + 2,
                     name: addFormData?.name,
                    country: addFormData?.country,
                    city: addFormData?.city,
                    address: addFormData?.address,
                    hobbies: addFormData.hobbies
                }
            ]);
            console.log("addFormData==9", addFormData)
            handleClose();
        }

    }
    
    console.log("addFormData==0", rowData)

    const handleClose = () => {
        setShow(false)
        setAddFormData({
            id: null,
            name: "",
            country: "",
            city: "",
            address: "",
            hobbies:''
            
        });
    };
 
    const updateRecord = (e) => {
        e.preventDefault();
        const nextCounters = rowData.map((c, i) => {
            if (c.id === addFormData?.id) {
                return addFormData
            } else {
                return c;
            }
        });
        setRowData(nextCounters);
        handleClose()
    }
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

    return (

        <div className="container p-0 m-0 " >
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div>
                        <div style={{ color: "#2f4261", display: "flex", justifyContent: "center", alignItems: "center" }}><h2><b>Student Details</b></h2></div>
                        <div className="search">
                            <form className="form-inline" style={{
                                dis
                                    : "flex", float: "right"
                            }}>
                                <Button variant="primary" style={{marginBottom:'20px'}} onClick={handleShow}>
                                    Add Record
                                </Button>

                            </form>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <div class="form-check">


                            </div>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name </th>
                                    <th>Country</th>
                                    <th>City </th>
                                    <th>Address</th>
                                    <th>Hobbies</th>
                                    <th>Actions</th>
                                   
                                </tr>
                            </thead>
                            <tbody>

                                {rowData?.length > 0 && rowData?.map((item, i) => {
                                    return <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.country}</td>
                                        <td>{item?.city}</td>
                                        <td>{item?.address}</td>
                                        <td>{item?.hobbies?.map((hobie)=>(
                                            <span>{hobie.value},</span>
                                        ))}</td>

                                        <td>

                                            <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" onClick={(e) => {
                                                handleShow(e)
                                                setAddFormData(item)
                                            }}>&#xE254;</i></a>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} onClick={() => {
                                                setRowData(rowData?.filter(obj => obj?.id != item.id))
                                            }}><i className="material-icons">&#xE872;</i></a>

                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{addFormData?.id ? 'Update record' : 'Add record'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={(e) => {
                                !addFormData?.id ? addNewRecord(e) : updateRecord(e)

                            }}>
                                <div className="form-group">
                                    <input type="name" name="name" onChange={handleAddFormChange} value={addFormData.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="country" name="country" onChange={handleAddFormChange} value={addFormData.country} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="city" name="city" onChange={handleAddFormChange} value={addFormData.city} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                                </div>
                                <div className="form-group mt-3">

                                    <input type="address" name="address" onChange={handleAddFormChange} value={addFormData.address} className="form-control" id="exampleInputPassword1" placeholder="Enter Address" />
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
                                          width:"180px"
                                        }),
                                      }}
                                        // name="hobbies"
                                        placeholder="Select Hobbies"
                                        options={colourOptions}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleSelectChange}
                                        allowSelectAll={true}
                                        value={addFormData.hobbies}
                                    />
                                </span>
                                </div>
                                <br />
                                <div style={{float:'right',}}>
                                <Button type="submit" className="btn btn-success me-2"  >{addFormData?.id ? 'Update record' : 'Add Record'}</Button>
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
            </div>
        </div>
    );
}

export default Home;