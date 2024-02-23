import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  banners: any[] = []; //tipo any, tipo array, inicia vazio
  restaurants: any[] = [];
  isLoading: boolean = false;
  model: any = {
    icon: 'ban-outline',
    title: 'Nenhum pedido feito.'
  }

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
      this.banners = [
        {banner: 'assets/imgs/img1.jpeg'},
        {banner: 'assets/imgs/img2.jpeg'},
        {banner: 'assets/imgs/img3.jpeg'}
      ];
      this.restaurants = [
        {
          cover: 'assets/imgs/img1.jpeg',
          name: 'Dom Henrique 1',
          short_name: 'domhenrique1',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          plates:[
            'X-Burguer',
            'Sorvete',
          ],
          drinks:[
            'Mate',
            'Guarana'
          ],
          city: 'Guarapuava, PR',
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 78.89,
          date: 'Fevereiro 15, 2024',
          delivered: true          
        },
        {
          cover: 'assets/imgs/img2.jpeg',
          name: 'Dom Henrique 2',
          short_name: 'domhenrique2',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          plates:[
            'Tacos',
            'Burritos'
          ],
          drinks:[
            'Suco de Laranja',
            'Vinho'
          ],
          city: 'Guarapuava, PR',
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 93.35,
          date: 'Fevereiro 02, 2024',
          delivered: false          
        },
        {
          cover: 'assets/imgs/img3.jpeg',
          name: 'Dom Henrique 3',
          short_name: 'domhenrique3',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          plates:[
            'Pizza'
          ],
          drinks:[
            'Coca-Cola'
          ],
          city: 'Guarapuava, PR',
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 80.25,
          date: 'Janeiro 29, 2024',
          delivered: true          
        },
      ];
      this.isLoading = false;
    },3000);
  }

}
