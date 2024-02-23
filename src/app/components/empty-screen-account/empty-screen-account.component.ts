import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-screen-account',
  templateUrl: './empty-screen-account.component.html',
  styleUrls: ['./empty-screen-account.component.scss'],
})
export class EmptyScreenAccountComponent  implements OnInit {
  @Input() model: any; // passa info da tela pro componente
  constructor() { }

  ngOnInit() {}

}
