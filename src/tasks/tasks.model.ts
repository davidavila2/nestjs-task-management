  // This interface defines the structure a task should hold
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

 // This enum allows the user to select a status for a task
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
