import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/interfaces/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.scss'],
})
export class AnimeFormComponent {
  anime: Anime;
  frmAnime: FormGroup;
  readonly foto = 'assets/img/Default.jpg';

  constructor(
    private frmBuilder: FormBuilder,
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.frmAnime = this.frmBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      des_corta: new FormControl('', [Validators.required]),
      des_larga: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      imagen: new FormControl({
        value: this.foto,
        disabled: true,
      }),
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animeService.getAnime(id).subscribe((anime) => {
        this.anime = anime;
        const { titulo, des_corta, des_larga, author, imagen } = anime;
        this.frmAnime.setValue({
          titulo,
          des_corta,
          des_larga,
          author,
          imagen,
        });
      });
    }
  }

  enviarDatos(): void {
    if (this.anime) {
      this.animeService
        .updateAnime(
          Object.assign(this.frmAnime.value, { id: this.anime.id, imagen: this.anime.imagen })
        )
        .subscribe(()=>{
          this.router.navigate(['/', 'animes']);
        });

    } else {
      this.animeService
        .addAnime(Object.assign(this.frmAnime.value, { imagen: this.foto }))
        .subscribe(()=>{
          this.router.navigate(['/', 'animes']);
        });
    }


  }
}
