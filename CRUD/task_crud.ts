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

