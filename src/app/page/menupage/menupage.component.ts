import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardemandeService } from 'src/app/service/cardemande.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:CardemandeService ) { }
  getMenuId:any;
  carData:any;
  ngOnInit(): void {
    this.getMenuId =this.param.snapshot.paramMap.get('id');
    if(this.getMenuId)
    {
      this.carData =  this.service.carDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        
    }


  }


}
