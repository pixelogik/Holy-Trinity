import { IsString, IsInt, Min } from "class-validator";

import IngredientDto from "./IngredientDto";

class RecipeIngredientDto {

    @IsInt()
    @Min(0)    
    public amount: number;

    public ingredient: IngredientDto;
}

export default RecipeIngredientDto;