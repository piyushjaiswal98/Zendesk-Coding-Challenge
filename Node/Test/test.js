let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Fetch API', () => {

    //Test the GET all Tickets API

    describe("GET /api/fetch", () => {
        it("It should get all the tickets", (done) => {
            chai.request(server)
            .get("/api/fetch")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
        })

        it("It should NOT get any tickets", (done) => {
            chai.request(server)
            .get("/api/fetchs")
            .end((err, response) => {
                response.should.have.status(404);
            done();
            })
        })
    })

    //Test the GET (by ticket Id) API

    describe("GET /api/fetch/ticket", () => {
        it("It should get the ticket with Id 1", (done) => {
            chai.request(server)
            .get("/api/fetch/ticket?ticket=1")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
        })

        it("It should return an Error as Ticket Id 400 not defined for test set", (done) => {
            chai.request(server)
            .get("/api/fetch/ticket?ticket=400")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.have.property("error");
            done();
            })
        })

        it("It should NOT get any ticket", (done) => {
            chai.request(server)
            .get("/api/fetch/tickets?ticket=400")
            .end((err, response) => {
                response.should.have.status(404);
            done();
            })
        })

    })


})