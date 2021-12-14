import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public active: boolean;

  public items : any = [
    { name: 'Products', link: '/products', icon: 'bx bx-cart-alt', tooltip:"products" }
  ]

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.active = false;
  }

  activeSidebar(){
    this.active = !this.active;
  }

  logout(){
    this.authService.logout();
  }

}
