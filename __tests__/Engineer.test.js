const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("Engineer object abstract", () => {
        it("Creates object with engineer role, name, id, email, office number", () => {
            const engineer = new Engineer ("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toEqual("Jon Snow");
            expect(engineer.id).toEqual(6);
            expect(engineer.email).toEqual("jsnow@thewall.com");
            expect(engineer.github).toEqual("gitwolf");
        });
    });

    describe("getName", () => {
        it("should return object name property", () => {
            const engineer = new Engineer ("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer.getName()).toEqual("Jon Snow");
        });
    });

    describe("getId", () => {
        it("should return id property", () => {
            const engineer = new Engineer("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer.getID()).toEqual(6);
        });
    });

    describe("getEmail", () => {
        it("should return email property", () => {
            const engineer = new Engineer ("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer.getEmail()).toEqual("jsnow@thewall.com");
        });
    });

    describe("getGithub", () =>{
        it("should return github number property", () => {
            const engineer = new Engineer ("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer.getGitHub()).toEqual("gitwolf");
        });
    });

    describe("getRole", () => {
        it("should return team role property for engineer", () => {
            const engineer = new Engineer ("Jon Snow", 6, "jsnow@thewall.com", "gitwolf");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});