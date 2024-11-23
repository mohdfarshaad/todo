const axios = require("axios");

const BASE_URL = "http://localhost:3000/api/v1";

describe("Sign up ", () => {
  const email = `user${Math.floor(Math.random() * 10 + 1)}@gmail.com`;
  const password = "1234";

  test("With correct credintials", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        email,
        password,
      });

      console.log(response.data);

      expect(response.status).toBe(201);
    } catch (error) {
      console.log("error : ", error);
      throw error;
    }
  });
});
