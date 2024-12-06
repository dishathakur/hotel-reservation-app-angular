import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ReservationsService } from '../reservations/reservations.service';
import { Reservations } from '../models/reservations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      guestName: ['', [Validators.required]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNo: ['', [Validators.required]],
    });
  }

  onSubmit = () => {
    if (this.reservationForm.valid) {
      let reservation: Reservations = this.reservationForm.value;
      this.reservationService.addReservations(reservation);
      this.router.navigate(['/list']);
    }
  };
}
