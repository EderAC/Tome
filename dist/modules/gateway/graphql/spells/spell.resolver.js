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
const spell_types_1 = require("./spell.types");
let SpellResolver = class SpellResolver {
    async getSpells(ctx) {
        const spells = await ctx.dataSources.spells.findAll();
        return spells;
    }
    async spell(id, ctx) {
        const spell = await ctx.dataSources.spells.findById(id);
        return spell;
    }
    async spellByClassId(classId, ctx) {
        const spells = await ctx.dataSources.spells.findSpellsByClassId(classId);
        return spells;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [spell_types_1.Spell], { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpellResolver.prototype, "getSpells", null);
__decorate([
    (0, type_graphql_1.Query)(() => spell_types_1.Spell, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.ID)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SpellResolver.prototype, "spell", null);
__decorate([
    (0, type_graphql_1.Query)(() => [spell_types_1.Spell], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('classId', () => type_graphql_1.ID)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SpellResolver.prototype, "spellByClassId", null);
SpellResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SpellResolver);
exports.default = SpellResolver;
