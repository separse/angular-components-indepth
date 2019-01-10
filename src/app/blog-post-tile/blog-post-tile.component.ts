import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input('title') title: string;
  @Input('summary') summary: string;

  constructor() { }

  ngOnInit() {
    // this.title = "Blog Title";
    // this.summary = "Blog Post Summary";
  }

}
