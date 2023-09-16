import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars4u_admin';

  toggleNav(nav: any){
    if(nav.opened){
      nav.close()
    } else{
      nav.open();
    }
  }

}
