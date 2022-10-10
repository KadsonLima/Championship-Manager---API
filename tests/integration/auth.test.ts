
import supertest from "supertest";
import app from "../../src/app";
import {
  alreadyRegisteredCredentials,
  alreadyRegisteredUser,
  credentialsWhithoutField,
  newUser,
  newUserWithoutfields,
  wrongEmail,
  wrongPassword,
} from "./factories/authFactory";

describe("SignUp", () => {
  it("Create user and return status code 201", async () => {
    const user = await newUser();
    const response = await supertest(app).post("/sign-up").send(user);

    expect(response.status).toBe(201);
  });

  it("Try to create user with some field missing and return 422", async () => {
    const user = await newUserWithoutfields();

    const response = await supertest(app).post("/sign-up").send(user);
    expect(response.status).toBe(422);
  });

  it("Try create user with already existing email and return 409", async () => {
	const user =await  alreadyRegisteredUser()
	
    const response = await supertest(app).post("/sign-up").send(user);

    expect(response.status).toBe(409);

  });
  
});

describe("SignIn", () => {


  it("Sign in with valid credentials and return token and status code 200", async () => {
	const user =  alreadyRegisteredCredentials();

    const response = await supertest(app)
      .post("/sign-in")
      .send(user);
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });


  it("Sign in with wrong password and return status code 401", async () => {
	const user = await wrongPassword();

    const response = await supertest(app)
      .post("/sign-in")
      .send(user);
    expect(response.status).toBe(401);
  });


  it("Sign in with wrong email and return status code 404", async () => {
	const user = await wrongEmail();

    const response = await supertest(app).post("/sign-in").send(user);
    expect(response.status).toBe(404);
  });


  it("Sign in with credentials without fields and return status code 422", async () => {
	const user = await credentialsWhithoutField();

    const response = await supertest(app)
      .post("/sign-in")
      .send(user);
    expect(response.status).toBe(422);
  });

});