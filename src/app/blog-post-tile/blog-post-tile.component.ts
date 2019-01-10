import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
import { truncate } from 'fs';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  // @Input('title') title: string ;
  // @Input('summary') summary: string;

  @Input() post: BlogPost;
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    // this.title = "Blog Title";
    // this.summary = "Blog Post Summary";'
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

  showFullSummary(){
    if(this.post.summary.length == this.fullSummary.length){
      this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
    }else{
      this.post.summary = this.fullSummary;
    }
  }

}
