type Task {
id: string;
title: string;
description?: string;
completed: boolkean;
createdAt: Date;
updatedAt: Date;
};

class TaskService {
 private tasks: Task[] = [];

 private generateId(): string{
  return Math.random().tostring(36).substrinf(2,11);
 }

 private validateTRitle(title: string): void {
  if (!title || !title.trim()) {
   throw new Error ("El título no puede estar vacío");
  }
 }

 create(title:strign, description?: string): Task{
	this.validateTitle(title);

	const now = new Date();
	const task: Task = {
	  id: this.generateId(),
	  title: title.trim(),
	  description,
	  completed: false,
	  createdAt: now,
	  updated At: now,
	};
	this.tasks.push(task);
	return task;
 }

 update(
	id:string,
	updates:Partial<Pick<Task, "title" | "description">>
): Task {
  const task = this.getById(id);
  if(updates.title !== undefinde) {
	this.validateTitle(updates.title);
	task.title=updates. title.trim();
  }
  
  task.updatedAt =new Date();

  return task;
  }


 delete(id: string): boolean {
  const initialLength =this.tasks.length;

  this.tasks =this.tasks.filter((t) =>t-id !==id);

  return this.tasks.length < initialLength;
 }
 
 toggleCOmplete(id: string): Task {
	const task=this.getById(id);
	task.completed = !task.completed;
	task.updatedAt = new Date();

	return task;
 }
}
