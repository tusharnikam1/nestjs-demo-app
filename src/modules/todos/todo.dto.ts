import {IsNotEmpty, IsString, IsOptional } from 'class-validator';
export default class TodoDto {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;
}