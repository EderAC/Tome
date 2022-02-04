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
exports.SpellInput = void 0;
const type_graphql_1 = require("type-graphql");
const spell_types_1 = require("./spell.types");
let SpellInput = class SpellInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "school", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "level", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "cast", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "range", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "component", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "duration", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "material", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SpellInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], SpellInput.prototype, "pcClasses", void 0);
SpellInput = __decorate([
    (0, type_graphql_1.InputType)()
], SpellInput);
exports.SpellInput = SpellInput;
let SpellResolver = class SpellResolver {
    async addSpell(input, ctx) {
        const spell = await ctx.dataSources.spells.create(input);
        return spell;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => spell_types_1.Spell),
    __param(0, (0, type_graphql_1.Arg)('spellInput')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SpellInput, Object]),
    __metadata("design:returntype", Promise)
], SpellResolver.prototype, "addSpell", null);
SpellResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => spell_types_1.Spell)
], SpellResolver);
exports.default = SpellResolver;
