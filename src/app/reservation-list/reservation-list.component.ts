import { Component, OnInit } from '@angular/core';
import { Reservations } from '../models/reservations';
import { ReservationsService } from '../reservations/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservations[] = [];

  constructor(
    private reservationService: ReservationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getAllReservations();
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservations(id);
  }

  editReservation(id: string): void {
    this.router.navigate(['/edit', id]);
  }
}
