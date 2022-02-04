"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataSources = void 0;
const characters_1 = require("./characters");
const pc_classes_1 = require("./pc-classes");
const spells_1 = require("./spells");
const users_1 = require("./users");
const user_auth_1 = require("./user-auth");
const createDataSources = () => {
    return {
        characters: new characters_1.Characters(),
        pcClasses: new pc_classes_1.PcClasses(),
        spells: new spells_1.Spells(),
        users: new users_1.Users(),
        userAuth: new user_auth_1.UserAuth(),
    };
};
exports.createDataSources = createDataSources;
