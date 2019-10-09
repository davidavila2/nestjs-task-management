import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
  // This Dto is used to not have to repeat code
  // Added decorators so that strings cannot be entered if no char is input
