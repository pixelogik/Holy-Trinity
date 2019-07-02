"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//////////////////////////////////////////////////
exports.measureUnitSchema = new mongoose_1.default.Schema({
    name: String
});
exports.measureUnitSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id; }
});
var MeasureUnit = undefined;
try {
    MeasureUnit = mongoose_1.default.model("MeasureUnit", exports.measureUnitSchema);
}
catch (e) {
    MeasureUnit = mongoose_1.default.model("MeasureUnit");
}
exports.default = MeasureUnit;
//////////////////////////////////////////////////
