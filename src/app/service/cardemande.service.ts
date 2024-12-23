import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardemandeService {

  constructor() { }
  carDetails = [
    {
      id:1,
      carName:"AUDI RS3 ABT ",
      cardate:"2023",
      carpuiss: "400 ch ",
      caracce: "3.8s de 0 à 100km/h",
      carvt: "250 km/h Sur circuit",
      carPrice:20000000,
      carImg:"../../../assets/img/rs3.jpg"
      
    },
    {
      id:2,
      carName:"Mercedes A45 AMG",
      cardate:"2018",
      carpuiss: "312 ch ",
      caracce: "5.8s de 0 à 100km/h",
      carvt: "240 km/h Sur circuit",
      carPrice:369000000,
      carImg:"../../../assets/img/a45.jpg"
    },
    {
      id:3,
      carName:"Porsche 911",
      cardate:"2022",
      carpuiss: "501 ch ",
      caracce: "2.8s de 0 à 100km/h",
      carvt: "350 km/h Sur circuit",
      carPrice:149000000,
      carImg:"../../../assets/img/porsche3.jpg"
    },
    {
      id:4,
      carName:"Lamborghini aventador ",
      cardate:"2021 ",
      carpuiss: "750 ch ",
      caracce: "2.01s de 0 à 100km/h",
      carvt: "380 km/h Sur circuit",     
       carPrice:14000000,
      carImg:"../../../assets/img/lambo.jpg"
    },
    {
      id:5,
      carName:"Maserati MC20 ",
      cardate:"2019",
      carpuiss: "366 ch ",
      caracce: "4.8s de 0 à 100km/h",
      carvt: "230 km/h Sur circuit",     
       carPrice:10054405,
      carImg:"../../../assets/img/maserati.jpg"
    },
    {
      id:6,
      carName:"Bentley Continental GT",
      cardate:"2019",
      carpuiss: "299 ch ",
      caracce: "4.8s de 0 à 100km/h",
      carvt: "199 km/h Sur circuit",     
       carPrice:219000000,
      carImg:"../../../assets/img/bently.jpg"
    },
    {
      id:7,
      carName:"BMW serie 3 competition",
      cardate:"2023 ",
      carpuiss: "680 ch ",
      caracce: "2.75s de 0 à 100km/h",
      carvt: "302 km/h Sur circuit",     
       carPrice:40000000,
      carImg:"../../../assets/img/BMW.jpg"
    },
    {
      id:8,
      carName:"Alfa Romeo Giulia ",
      cardate:"2022 ",
      carpuiss: "299 ch ",
      caracce: "5.8s de 0 à 100km/h",
      carvt: "190 km/h Sur circuit",      
      carPrice:100000,
      carImg:"../../../assets/img/alfa.png"
    },
    {
      id:9,
      carName:"GOLF 8 GTI ",
      cardate:"2020",
      carpuiss: "400 ch ",
      caracce: "4.8s de 0 à 100km/h",
      carvt: "210 km/h Sur circuit",  
      carPrice:7840000,
      carImg:"../../../assets/img/golf.jpg"
    }
  ]
}
