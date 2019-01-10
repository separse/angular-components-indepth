import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    let blog1 = new BlogPost('Blog Post 1','Summary1');
    this.blogPost.push(blog1);
    this.blogPost.push(new BlogPost('Blog Post 2','Summary2'));
  }

}
