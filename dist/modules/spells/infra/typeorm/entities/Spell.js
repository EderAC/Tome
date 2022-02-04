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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PcClass_1 = __importDefault(require("@modules/pc-classes/infra/typeorm/entities/PcClass"));
const typeorm_1 = require("typeorm");
let Spell = class Spell {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Spell.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "cast", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "component", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Spell.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PcClass_1.default),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Spell.prototype, "pcClasses", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Spell.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Spell.prototype, "updated_at", void 0);
Spell = __decorate([
    (0, typeorm_1.Entity)('spells')
], Spell);
exports.default = Spell;
