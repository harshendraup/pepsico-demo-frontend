const URL = "http://192.168.1.6:8089"


const getUsers = async () => {
	const result = await fetch(`${URL} + /getUsersList`);
	return result;
}

const createUser = async () => {

}

const updateUser = () => {

}

const deleteUser = () => {

}

export { createUser, updateUser, deleteUser, getUsers };


