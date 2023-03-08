import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/interfaces/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss'],
})
export class CardMainComponent implements OnInit {
  animes: Anime[];
  @Input() limit: number;

  constructor(private animeService: AnimeService, public router: Router) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  onDelete(): void{
    this.getAnimes();
  }

  getAnimes(): void{
    if (this.limit) {
      this.animeService.getAnimesWithLimit(this.limit).subscribe((animes) => {
        this.animes = animes;
      });
    } else {
      this.animeService.getAnimes().subscribe((animes) => {
        this.animes = animes;
      });
    }
  }
}

