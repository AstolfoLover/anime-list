import { Injectable } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  url:string="http://localhost:3000/animes"
  constructor(private http:HttpClient) { }
 /**
  * Leer de la tabla animes
  * @returns los animes en un array
  */
  getAnimes():Observable<Anime[]>{
    return this.http.get<Anime[]>(this.url);

  }

  getAnimesWithLimit(limit: number):Observable<Anime[]>{
    return this.http.get<Anime[]>(`${this.url}?_limit=${limit}`);

  }
  /**
   * Lee un anime determinado
   * @param id el id del anime
   * @returns el objeto del anime
   */
  getAnime(id:string):Observable<Anime>{
    return this.http.get<Anime>(`${this.url}/${id}`);
  }
  /**
   * Añadir un Anime
   * @param anime el objeto a insertar
   * @returns  //el objeto
   */
  addAnime(anime:Anime):Observable<Anime>{
    return this.http.post<Anime>(`${this.url}`, anime);
  }

  /**
  * Borra un anime según la id
  */
  delAnime(id:string):Observable<any>{
    return this.http.delete<Anime>(`${this.url}/${id}`);
  }

   /**
  * modifica un anime según la id
  */
  updateAnime(anime:Anime):Observable<Anime>{
    return this.http.put<Anime>(`${this.url}/${anime.id}`, anime);
  }
}
