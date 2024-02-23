import { Component, OnInit, Input } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  SwiperModules = [IonicSlides];
  @Input() bannerImages; // por ele vc manda todas as imagens q quer exibir

  constructor() { }

  ngOnInit() {}

}
