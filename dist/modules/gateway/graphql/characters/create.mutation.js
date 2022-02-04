"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let CharacterInput = class CharacterInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CharacterInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CharacterInput.prototype, "pcClass", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CharacterInput.prototype, "level", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CharacterInput.prototype, "race", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CharacterInput.prototype, "user_id", void 0);
CharacterInput = __decorate([
    (0, type_graphql_1.InputType)()
], CharacterInput);
let characterPayload = class characterPayload {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], characterPayload.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], characterPayload.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], characterPayload.prototype, "pcClass", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], characterPayload.prototype, "level", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], characterPayload.prototype, "race", void 0);
characterPayload = __decorate([
    (0, type_graphql_1.ObjectType)()
], characterPayload);
let CharacterResolver = class CharacterResolver {
    async addCharacter({ name, pcClass, level, race, user_id }, ctx) {
        const character = await ctx.dataSources.characters.create(name, pcClass, level, race, user_id);
        return character;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => characterPayload),
    __param(0, (0, type_graphql_1.Arg)('characterInput')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CharacterInput, Object]),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "addCharacter", null);
CharacterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CharacterResolver);
exports.default = CharacterResolver;
