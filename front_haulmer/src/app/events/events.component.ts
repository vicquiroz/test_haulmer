import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Event } from '../event';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit {
  httpClient = inject(HttpClient);
  events: Event[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<Event[]>('http://127.0.0.1:8000/events')
      .subscribe((data) => {
        console.log(data);
        this.events = data;
      });
  }
}
