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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const tsyringe_1 = require("tsyringe");
let CreateCharacterService = class CreateCharacterService {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async execute({ name, pcClass, level, race, user_id, }) {
        const checkCharacterExists = await this.charactersRepository.findByName(name, user_id);
        if (checkCharacterExists) {
            throw new AppError_1.default('You already have a character with this name.');
        }
        const character = await this.charactersRepository.create({
            name,
            pcClass,
            level,
            race,
            user_id,
        });
        return character;
    }
};
CreateCharacterService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('CharactersRepository')),
    __metadata("design:paramtypes", [Object])
], CreateCharacterService);
exports.default = CreateCharacterService;
