import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<{ title: string; summary: string; dueDate: string }>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
