import { Component } from '@angular/core';
import { MatCardAppearance } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  noofdealers=500;
  nooforders=1000;
  noofproducts=800;
  noofcustomers=200;

  appearance: MatCardAppearance = 'raised';
  longText = `Once upon a midnight dreary, while I pondered, weak and weary,
              Over many a quaint and curious volume of forgotten lore—
              While I nodded, nearly napping, suddenly there came a tapping,
              As of some one gently rapping, rapping at my chamber door.
              “’Tis some visitor,” I muttered, “tapping at my chamber door—
              Only this and nothing more.”`;
  toggleAppearance() {
    this.appearance = this.appearance == 'raised' ? 'outlined' : 'raised';
  }
}
