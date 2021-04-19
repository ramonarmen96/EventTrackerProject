import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';
@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {
  transform(todos: Todo[], showComplete?: boolean)   {
    var result = [];
    if(showComplete === true) {
      return todos;
    }
    for(var i = 0; i < todos.length; i++) {
      if(todos[i].completed === false) {
        result.push(todos[i]);
      }
    }
    return result;
  }
}
