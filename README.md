<div align="center">
    <img src="https://avatars.githubusercontent.com/u/986545?s=200&v=4" width="200" height="200"/>
</div>

# Angular Challenge

## Description

This project is designed to test your knowledge of front-end web technologies and assess your ability to create front-​end UI products with attention to details, cross-browser compatibility, standards, and  reusability.

## Assignment

The goal of this exercise is to create a demo calendar application using Angular.

You should start by rendering a single month view of a calendar for the current month, along the lines of the illustration below:
<div align="center">
    <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/CalendarSample.png"/>
</div>

## Mandatory features
 - Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.
 - Ability to edit reminders - including changing text, city, day and time.
 - Add a weather service call from [Visual Crossing](https://www.visualcrossing.com/weather/weather-data-services#) and get the weather forecast (e.g. Rain) for the date of the calendar reminder based on the city.

## Bonus (Optional)

- Expand the calendar to support more than the current month or year.
- Properly handle overflow when multiple reminders appear on the same date.
- Unit test the functionality: *Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.*

## Considerations

 - The project is completely focused on Front-end. Ignore the Back-end.
 - Create your Calendar using the route `/calendar`
 - Feel free to use small helper libraries for:
 -- UI Elements.
 -- Date/Time handling.
 - **You must create the calendar component yourself**. Do not user calendar libraries like FullCalendar or Bootstrap Calendar.
 - Provide working API keys to any external API you use.
 - Show us your capabilities on CSS and styling, if possible.
 - You will need to **record a video explaining the code** you created, the decisions you made, its functionality, and demonstrating the complete operation of the challenge. _Remember to show the execution from scratch, it should not be running beforehand._


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
