import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  titleDes: string = "the highest anime database"
  titleMain: string = "animeList";
  titleAll: string = "all animes";
}
