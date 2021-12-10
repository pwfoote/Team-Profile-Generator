
const { expect } = require("@jest/globals");
const Employee = require ("../lib/Employee");

describe("Employee", () => {

    describe ("Employee object abstract", () => {
        it("creates object employee role, name, id and email properties", () => {
            const employee = new Employee ("Jon Snow", 6, "jsnow@thewall.com");

            expect(employee).toBeInstanceOf(Employee);
            expect(employee.name).toEqual("Jon Snow");
            expect(employee.id).toEqual(6);
            expect(employee.email).toEqual("jsnow@thewall.com");
        });
    });

    describe("getName", () => {
        it("should return object name property", () => {
            const employee = new Employee ("Jon Snow", 6, "jsnow@thewall.com");

            expect(employee.getName()).toEqual("Jon Snow");
        });
    });

    describe("getId", () => {
        it("should return id property", () => {
            const employee = new Employee("Jon Snow", 6, "jsnow@thewall.com");

            expect(employee.getID()).toEqual(6);
        });
    });

    describe("getEmail", () => {
        it("should return email property", () => {
            const employee = new Employee ("Jon Snow", 6, "jsnow@thewall.com");

            expect(employee.getEmail()).toEqual("jsnow@thewall.com");
        });
    });

    describe("getRole", () => {
        it("should return team role property for employee", () => {
            const employee = new Employee ("Jon Snow", 6, "jsnow@thewall.com", 22);

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});