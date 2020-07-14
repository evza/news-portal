import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { POSTS } from './mock-posts';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServise {

  constructor() { }

  getPosts(): Observable<Post[]> { 
    const posts: Post[] = POSTS;
    return of(posts);
  }

  getPost(key: string): Observable<Post> {
    const posts: Post[] = POSTS.filter(p => p.key === key);
    return of(posts[0]);
  }
}
