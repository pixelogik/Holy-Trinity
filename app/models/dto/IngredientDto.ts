import { IsString } from "class-validator";

import MeasureUnitDto from "./MeasureUnitDto";

class IngredientDto {

    @IsString()
    public id: string;

    @IsString()
    public name: string;

    public unit: MeasureUnitDto;
}

export default IngredientDto;