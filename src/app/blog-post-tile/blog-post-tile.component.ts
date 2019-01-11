import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
// import { truncate } from 'fs';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.None
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
    // this.post.summary = this.fullSummary;
    if(this.post.summary.length == this.fullSummary.length){
      this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
    }else{
      this.post.summary = this.fullSummary;
    }
  }

  markFav(){
    this.post.isFav = ! this.post.isFav;
  }

}
