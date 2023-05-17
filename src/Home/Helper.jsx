
const renderAddress = (item) => {
	return (
		<div>
			<div>{item.city}</div>
			<div>{item.state}</div>
			<div>{item.country} - {item.pincode}</div>
		</div>
	)
}

export { renderAddress };