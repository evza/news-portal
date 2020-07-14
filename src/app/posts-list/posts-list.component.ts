import { Component, OnInit } from '@angular/core';
import { PostServise } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  title = 'Новости';
  posts: Post[] = [];

  constructor(private postServise: PostServise) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postServise.getPosts().subscribe(posts => this.posts = posts);
  }

}
