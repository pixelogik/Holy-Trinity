import { IsString } from "class-validator";

class MeasureUnitDto {

    @IsString()
    public id: string;

    @IsString()
    public name: string;

}

export default MeasureUnitDto;