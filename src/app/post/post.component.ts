import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostServise} from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private route: ActivatedRoute,
    private  postServise: PostServise,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.postServise.getPost(key).subscribe(post => {
        if (post === undefined) {
           this.router.navigateByUrl('404');
          return;
        }
        this.post = post;
      });
    });
  }

}
