const request = require("supertest");
const app = require("../index").listen();

const jwt = require("jwt-simple");

describe("Tests FutScript", () => {
  it("should return an array and a status code of 200", async () => {
    const res = await request(app).get("/equipos");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it("should return an object and a status code of 200 when sending correct credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "admin", password: "1234" });
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe("object");
  });
  it("should return a status code of 400 when sending wrong credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user", password: "abcd" });
    expect(res.statusCode).toBe(401);
  });
  it("should return a status code of 201 when sending a new player along with a valid token in the headers", async () => {
    const loginRes = await request(app)
      .post("/login")
      .send({ username: "admin", password: "password" });
    const token = loginRes.body.token;
    request(app)
      .post("/equipos/7/jugadores")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "new player", position: 3 })
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).toBe(201);
      });
  });
});
