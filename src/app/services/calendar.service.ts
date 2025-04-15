import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reminder } from '../interfaces/reminder';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  reminders: Reminder[] = [];

  create(data: Reminder): Reminder {
    this.reminders.push(data);
    return data;
  }

  edit(data: Reminder): Reminder {
    const index = this.reminders.findIndex(
      (r) => r.dateTime === data.dateTime && r.text === data.text
    );
    if (index > -1) this.reminders[index] = data;
    return data;
  }

  list(date: Date): Observable<Reminder[]> {
    return of(this.reminders);
  }

  delete(reminderId: string): boolean {
    return true;
  }
}