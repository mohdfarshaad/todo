const axios = require("axios");

const BASE_URL = "http://localhost:3000/api/v1";

describe("Sign up ", () => {
  const email = `user${Math.floor(Math.random() * 10) + 10}@gmail.com`;
  const password = "1234";

  test("With correct credintials", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        email,
        password,
      });
      expect(response.status).toBe(201);
    } catch (error) {
      throw error;
    }
  });

  test("With missing email", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        password,
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test("With missing password", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        email,
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test("With Existing credintials", async () => {
    const eEmail = "user18@gmail.com"; //already existing email

    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        email: eEmail,
        password,
      });
    } catch (error) {
      expect(error.response.status).toBe(409);
    }
  });
});
