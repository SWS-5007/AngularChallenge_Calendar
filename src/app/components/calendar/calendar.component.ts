import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Reminder } from '../../interfaces/reminder';
import { CalendarService } from '../../services/calendar.service';
import { WeatherService } from '../../services/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { ReminderFormComponent } from '../reminder-form/reminder-form.component';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<boolean>();
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  calendarDays: (Date | null)[] = [];
  remindersMap: { [key: string]: Reminder[] } = {};

  constructor(
    private calendarService: CalendarService,
    private weatherService: WeatherService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.generateCalendar();
    this.loadReminders();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    this.calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDays.push(new Date(this.currentYear, this.currentMonth, i));
    }
  }

  loadReminders() {
    this.calendarService
      .list(new Date())
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((reminders: Reminder[]) => {
        this.remindersMap = {};
        for (const reminder of reminders) {
          const dateKey = new Date(reminder.dateTime).toDateString();
          if (!this.remindersMap[dateKey]) {
            this.remindersMap[dateKey] = [];
          }
          this.weatherService
            .getWeatherInformation(
              reminder.city || '',
              new Date(reminder.dateTime)
            )
            .subscribe((weather) => {
              reminder.weather = weather;
            });
          this.remindersMap[dateKey].push(reminder);
        }
      });
  }

  getRemindersForDate(date: Date): Reminder[] {
    return this.remindersMap[date.toDateString()] || [];
  }

  openReminderForm(reminder?: Reminder, date?: Date) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = reminder || {
      text: '',
      city: '',
      dateTime: date || new Date(),
      color: '#2196f3',
    };

    const dialogRef = this.matDialog.open(ReminderFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (reminder) {
          this.calendarService.edit(result);
        } else {
          this.calendarService.create(result);
        }
        this.loadReminders();
      }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  changeMonth(offset: number) {
    this.currentMonth += offset;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
    this.loadReminders();
  }
}
