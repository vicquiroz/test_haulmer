import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../event';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  httpClient = inject(HttpClient);
  event: Event = {
    id: '',
    createdAt: '',
    name: '',
    location: '',
    description: '',
  };
  eventId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id')!;
    this.fetchData(this.eventId);
  }

  fetchData(id: string) {
    this.httpClient
      .get<Event>('http://127.0.0.1:8000/event/' + id)
      .subscribe((data) => {
        this.event = data;
      });
  }
}
