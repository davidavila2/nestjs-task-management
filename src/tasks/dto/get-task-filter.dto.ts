import { TaskStatus } from '../tasks.model';

export class GetTaskFilterDto {
  status: TaskStatus;
  search: string;
}
// this dto is used to not have to repeat code
