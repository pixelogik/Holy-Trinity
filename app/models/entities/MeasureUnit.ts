import mongoose from "mongoose";

//////////////////////////////////////////////////

export interface IMeasureUnit {
    name: string;
}

//////////////////////////////////////////////////

export const measureUnitSchema = new mongoose.Schema({
    name: String
});

measureUnitSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (_doc: any, ret: any) { delete ret._id; }
});

//////////////////////////////////////////////////

export interface IMeasureUnitModel extends IMeasureUnit, mongoose.Document { }

let MeasureUnit: mongoose.Model<IMeasureUnitModel> = mongoose.model<IMeasureUnitModel>("MeasureUnit", measureUnitSchema);

export default MeasureUnit;

//////////////////////////////////////////////////
