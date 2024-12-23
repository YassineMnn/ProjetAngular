import { Component, OnInit } from '@angular/core';
import { CardemandeService } from 'src/app/service/cardemande.service';
CardemandeService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CardemandeService) { }
  cardata:any;

  ngOnInit(): void {
    this.cardata = this.service.carDetails;
  }

}
