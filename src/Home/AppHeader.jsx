import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
const AppHeader = ({ showAddDetailsModal }) => {
	return (
		<div className="row ">
			<div>
				<div style={{ color: "#2f4261", display: "flex", justifyContent: "center", alignItems: "center" }}><h2><b>User Details</b></h2></div>
				<div className="search">
					<form className="form-inline" style={{
						display: "flex", float: "right"
					}}>
						<Button variant="primary" style={{ marginBottom: '20px' }} onClick={() => showAddDetailsModal()}>
							Add Record
						</Button>

					</form>
				</div>
			</div>
		</div>
	)
	
}

export default AppHeader;