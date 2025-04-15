import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherInformation(city: string, date: Date): Observable<string> {
    if (!city || isNaN(date.getTime())) return of('Unknown');

    const apiKey = 'YOUR_VISUAL_CROSSING_API_KEY';
    const formattedDate = date.toISOString().split('T')[0];
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${formattedDate}?unitGroup=metric&key=${apiKey}`;

    return this.http
      .get<any>(url)
      .pipe(map((response: any) => response?.days?.[0]?.conditions || 'N/A'));
  }
}
