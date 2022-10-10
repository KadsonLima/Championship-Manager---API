import { faker } from "@faker-js/faker"

const newUser = async() => {
  const password = faker.internet.password();
	return {
		name: faker.internet.userName(),
		email: faker.internet.email(),
		password,
		confirm_password: password,
	}
}

const newUserWithoutfields = async() => {
	return {
		name: faker.internet.userName(),
		email: faker.internet.email(),
	}
}

const alreadyRegisteredUser = async() => {
  const password = faker.internet.password();

	return {
		name: faker.internet.userName(),
		email: "kadson@gmail.com",
		password,
    confirm_password:password,
	}
}

const alreadyRegisteredCredentials = () => {
	return {
		email: "kadson@gmail.com",
		password: "kadson",
	}
}

const wrongPassword = async() => {
	return {
		email: "kadson@gmail.com",
		password: "fasdasd",
	}
}

const wrongEmail = async() => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const credentialsWhithoutField = async() => {
	return {
		email: "kadson@gmail.com",
	}
}

export {
	newUser,
	newUserWithoutfields,
	alreadyRegisteredUser,
	alreadyRegisteredCredentials,
	wrongPassword,
	wrongEmail,
	credentialsWhithoutField,
}