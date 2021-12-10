
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Intern object abstract", () => {
        it("Creates an object intern role, name, id email and educational institute", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

            expect(intern).toBeInstanceOf(Intern);
            expect(intern.name).toEqual("Jon Snow");
            expect(intern.id).toEqual(6);
            expect(intern.email).toEqual("jsnow@thewall.com");
            expect(intern.school).toEqual("Winterfell");
        });
    });

    describe("getName", () => {
        it("should return object name property", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

            expect(intern.getName()).toEqual("Jon Snow");
        });
    });

    describe("getId", () => {
        it("should return id property", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

         expect(intern.getID()).toEqual(6);
        });
    });

    describe("getEmail", () => {
        it("should return email property", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

            expect(intern.getEmail()).toEqual("jsnow@thewall.com");
        });
    });

    describe("getSchool", () => {
        it("should return school property", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

            expect(intern.getSchool()).toEqual("Winterfell");
        });
    });

    describe("getRole", () => {
        it("should return team role property for intern", () => {
            const intern = new Intern ("Jon Snow", 6, "jsnow@thewall.com", "Winterfell");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});