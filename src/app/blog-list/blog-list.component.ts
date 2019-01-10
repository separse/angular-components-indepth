import { Component, OnInit, ViewEncapsulation, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
   // encapsulation: ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {

  // blogPost: BlogPost[] = [];
  blogPosts: BlogPost[][];
  currentPage: number;
  // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogdataSerice: BlogDataService) { 
    
  }

  // Best practice is to leave constructor very light weight
  // constructor is recomended use for dependency injection for services etc.,
  // The more compilicated your contructor is MORE difficult to test the class / component
  ngOnInit() {
    // let blog1 = new BlogPost('Blog Post 1','Summary1');
    // this.blogPost.push(blog1);
    // this.blogPost.push(new BlogPost('Blog Post 2','Summary2'));
    // this.blogPost.push(new BlogPost('Blog Post 3','The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component'));
    
    this.currentPage = 0;
    this.blogPosts = this.blogdataSerice.getData();
  }

  updatePage(newPage){
    console.log("Event Emitted and CAPTURED");
    this.currentPage = newPage;
  }

  expandAll(){
    // this.blogPostTileComponent.showFullSummary();
    this.blogPostTileComponents.forEach( e => e.showFullSummary());
  }

}
