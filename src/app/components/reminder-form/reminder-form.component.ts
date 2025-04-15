import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reminder } from '../../interfaces/reminder';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.scss'],
})
export class ReminderFormComponent implements OnInit {
  reminder: Reminder;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Reminder) {
    this.reminder = { ...data };
  }

  ngOnInit(): void {}
}
