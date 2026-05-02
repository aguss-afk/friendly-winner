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

