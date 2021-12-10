
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Manager object abstract", () => {
        it("Creates object with Manager role, name, id, email, office number", () => {
            const manager = new Manager ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager).toBeInstanceOf(Manger);
            expect(manager.name).toEqual("Jon Snow");
            expect(manger.id).toEqual(6);
            expect(manager.email).toEqual("jsnow@thewall.com");
            expect(manager.officeNumber).toEqual(22);
        });
    });

    describe("getName", () => {
        it("should return object name property", () => {
            const manager = new Manager ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager.getName()).toEqual("Jon Snow");
        });
    });

    describe("getId", () => {
        it("should return id property", () => {
            const manager = new Manager("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager.getID()).toEqual(6);
        });
    });

    describe("getEmail", () => {
        it("should return email property", () => {
            const manager = new Manager ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager.getEmail()).toEqual("jsnow@thewall.com");
        });
    });

    describe("getOfficeNum", () =>{
        it("should return office number property", () => {
            const manager = new Manager ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager.getOffice()).toEqual(22);
        });
    });

    describe("getRole", () => {
        it("should return team role property", () => {
            const manager = new Manager ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});