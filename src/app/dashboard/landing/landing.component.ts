import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { DataService } from '../../core/services/data.service';
import { Injectable } from '@angular/core';
import {Todo} from '../../todo';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LandingComponent implements OnInit {
  /* Variable hoisting start */
  objInv = {};
  newTodo: Todo = new Todo();
  todos = [];

  constructor(private todoDataService: DataService) { }
  
  ngOnInit() {
    this.gettodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo).subscribe(data => {
      return this.todos.push(data);
    });

  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  gettodos() {
    this.todoDataService.getAllTodos().subscribe(data => {
      console.log(data);
      return this.todos = data;
    });

    // return this.todoDataService.getAllTodos();
  }


}
