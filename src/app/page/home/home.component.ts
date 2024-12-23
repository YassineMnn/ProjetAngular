import { Component, OnInit } from '@angular/core';
import { CardemandeService } from 'src/app/service/cardemande.service';
CardemandeService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CardemandeService) { }
  cardata:any;
  ngOnInit(): void {
    this.cardata =this.service.carDetails;
  }

}
