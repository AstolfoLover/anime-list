import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/interfaces/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime;
  fontSize: number = 20;
  color: string = "#000000";
  showAccSettings:string = "none";

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onDeleteClick() {
    this.animeService.delAnime(this.anime.id.toString()).subscribe();

    this.router.navigate(["animes"]);
  }

  ngOnInit(): void {
    this.animeService.getAnime(this.route.snapshot.paramMap.get("id") ?? "").subscribe(anime => {
      this.anime = anime;
    });
  }
}
