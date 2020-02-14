import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoArray: Todo[] = [
    { task: "vaccume", completed: false },
    { task: "dog walked", completed: false },
    { task: "take nap", completed: true },
    { task: "grocery shop", completed: true }
  ];

  ngOnInit(): void {}
}
