import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/interfaces/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent {
  @Input() anime: Anime;
  @Output() delete: EventEmitter<null> = new EventEmitter();

  constructor(private animeService: AnimeService, public router: Router) {}

  onDeleteClick() {
    this.animeService.delAnime(this.anime.id.toString()).subscribe(() => {
      this.delete.emit(null);
    });
  }
}
