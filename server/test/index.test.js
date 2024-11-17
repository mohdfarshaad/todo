const axios = require("axios");

const BACKEND_URL = "http://localhost:8000/api/v1";

describe("Todo Endpoints", () => {
  test("Create todo with title", async () => {
    const title = "Read Atomic habits";
    const description = "Read chapter 1";
    try {
      const response = await axios.post(`${BACKEND_URL}/todos/`, {
        title,
        description,
      });
      expect(response.status).toBe(201);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  });

  test("Create todo without title", async () => {
    const title = null;
    const description = "Read chapter 1";
    try {
      const response = await axios.post(`${BACKEND_URL}/todos/`, {
        title,
        description,
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test("Update todo with id", async () => {
    const id = "6739dba5b035a87401c4a540";
    const title = "Read Atomic habits by james clear";
    try {
      const response = await axios.put(`${BACKEND_URL}/todos/${id}`, { title });
      expect(response.status).toBe(200);
    } catch (error) {
      console.log(error);
    }
  });

  test("Update todo without id", async () => {
    const id = null;
    try {
      await axios.post(`${BACKEND_URL}/todos/${id}`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test("Delete todo with id", async () => {
    const id = "6739e681b9781242aa42f41c";
    try {
      const response = await axios.delete(`${BACKEND_URL}/todos/${id}`);
      expect(response.status).toBe(404);
    } catch (error) {
      console.log(error);
    }
  });

  test("Delete todo without id", async () => {
    const id = null;
    try {
      await axios.delete(`${BACKEND_URL}/todos/${id}`);
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });

  test("Get Todo by id", async () => {
    const id = "6739e681b9781242aa42f41c";
    const response = await axios.get(`${BACKEND_URL}/todos/${id}`);
    expect(response.status).toBe(200);
  });

  test("Get Todos ", async () => {
    const response = await axios.get(`${BACKEND_URL}/todos/`);
    expect(response.status).toBe(200);
  });
});
