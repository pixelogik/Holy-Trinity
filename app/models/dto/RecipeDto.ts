import { IsString, IsInt, Min } from "class-validator";

import RecipeIngredientDto from "./RecipeIngredientDto";

class RecipeDto {

    @IsString()
    public id: string;

    @IsString()
    public name: string;

    @IsString()
    public description: string;

    public ingredients: RecipeIngredientDto[];

}

export default RecipeDto;