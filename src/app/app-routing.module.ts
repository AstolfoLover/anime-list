import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [

  {path:'',component:MainPageComponent},
  {path:'animes',component:MainPageComponent},
  {path:'animes/create',component:AnimeFormComponent},
  {path:'animes/edit/:id',component:AnimeFormComponent},
  {path:'animes/:id',component:AnimeDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
