import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { GaleryComponent } from './galery/galery.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'video', component: VideoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: ':key', component: PostComponent },
  { path: '404', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
