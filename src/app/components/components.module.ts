import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { UltimosPedidosComponent } from './ultimos-pedidos/ultimos-pedidos.component';
import { EmptyScreenAccountComponent } from './empty-screen-account/empty-screen-account.component';
import { LoadingOrderComponent } from './loading-order/loading-order.component';



@NgModule({
  declarations: [RestaurantComponent,LoadingRestaurantComponent, EmptyScreenComponent, UltimosPedidosComponent,EmptyScreenAccountComponent,LoadingOrderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, UltimosPedidosComponent,EmptyScreenAccountComponent,LoadingOrderComponent] // pra poder exportar e usar em duas telas diferentes 
})
export class ComponentsModule { }
