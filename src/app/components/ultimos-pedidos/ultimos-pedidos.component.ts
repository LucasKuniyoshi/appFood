import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimos-pedidos',
  templateUrl: './ultimos-pedidos.component.html',
  styleUrls: ['./ultimos-pedidos.component.scss'],
})
export class UltimosPedidosComponent  implements OnInit {
  @Input() restaurant: any;
  //isDelivered: boolean = true;
  
  constructor() { }

  ngOnInit() {}

  getPlate(plate){
    return plate.join(', ');
  }

  getDrink(drink){
    return drink.join(', ');
  }

}
