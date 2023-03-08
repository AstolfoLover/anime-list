import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  aAnimes = [
    {
      "titulo": "One Piece",
      "des_corta": "Luffy se va de aventuras buscando el One Piece",
      "des_larga": "One Piece es un manga escrito e ilustrado por el mangaka japonés Eiichirō Oda. Comenzó a publicarse en la revista Japonesa Weekly Shōnen Jump el 22 de julio de 1997 y a la fecha se han publicado 105 volúmenes.",
      "author": "Eiichiro Oda",
      "imagen": "assets/img/One.jpg",
      "id": 1
    },
    {
      "titulo": "Naruto",
      "des_corta": "Naruto es un niño ninja el cuál quiere convertirse en el mejor ninja de su pueblo",
      "des_larga": "Naruto, romanizada como NARUTO, es una serie animada de origen japonés basada en el manga del mismo nombre, escrito e ilustrado por Masashi Kishimoto.",
      "author": "Masashi Kishimoto",
      "imagen": "assets/img/Naruto.jpg",
      "id": 2
    },
    {
      "titulo": "Dragon Ball",
      "des_corta": "Dragon Ball es un manga escrito e ilustrado por Akira Toriyama.",
      "des_larga": "Dragon Ball es un manga escrito e ilustrado por Akira Toriyama. Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995.",
      "author": "Akira Toriyama",
      "imagen": "assets/img/Dragon.jpg",
      "id": 3
    }
  ]
}
