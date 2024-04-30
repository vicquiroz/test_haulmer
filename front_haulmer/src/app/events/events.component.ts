import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Event } from '../event';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit {
  httpClient = inject(HttpClient);
  events: Event[] = [];
  public flag: boolean = false;
  public flag_error: boolean = false;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<Event[]>('http://127.0.0.1:8000/events')
      .subscribe((data) => {
        this.events = data;
      });
  }
  public postPurchase(id: string) {


    const client_id = String(Math.floor(Math.random() * 360))

    const client_name = "test"
    
    this.httpClient
      .get(`http://127.0.0.1:8000/purchase/${id}/${client_id}/${client_name}`, )
      .subscribe({
        next: res => {
          this.flag = true
        setTimeout(() => {
          this.flag = false;
        }, 2500); 
        },
        error: err => {
          this.flag_error = true
        setTimeout(() => {
          this.flag_error = false;
        }, 2500); 
        },
      });
  }
}
