import { Injectable } from '@angular/core';
import axios from 'axios';
import { Todo } from '../../todo';
import { saveAs } from 'file-saver';
import { throwError, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface List {
  id: number,
  title: String
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:3000/task');
  }
  
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos = this.getAllTodos().subscribe();

  // Simulate POST /todos
  addTodo(todo: Todo) {
    debugger;
    // if (!todo.id) {
    //   todo.id = ++this.lastId;
    // }
    return this.http.post<any>('http://localhost:3000/task', todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) {
    // this.todos = this.todos
    //   .filter(todo => todo.id !== id);
    // return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(_id: String, values: Object = {}) {
    let todo = {
      _id: _id,
      complete: values['complete']
    };
    debugger;
    return this.http.post<any>('http://localhost:3000/task', todo);
    // return this.http.post<any>('http://localhost:3000/task', todo);
  }

  // Simulate GET /todos
  getAllTodos() {
    return this.http.get<any>('http://localhost:3000/task');
  }

  // Simulate GET /todos/:id
  getTodoById(_id: String) {
    // return this.todos
    //   .filter(todo => todo._id === _id)
    //   .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo._id, {
      complete: !todo.complete
    });
    // this.http.put<any>('http://localhost:3000/task');
    return updatedTodo;
  }


}
