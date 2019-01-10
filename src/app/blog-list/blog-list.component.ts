import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[] = [];
  constructor() { 
    
  }

  // Best practice is to leave constructor very light weight
  // constructor is recomended use for dependency injection for services etc.,
  // The more compilicated your contructor is MORE difficult to test the class / component
  ngOnInit() {
    let blog1 = new BlogPost('Blog Post 1','Summary1');
    this.blogPost.push(blog1);
    this.blogPost.push(new BlogPost('Blog Post 2','Summary2'));
    this.blogPost.push(new BlogPost('Blog Post 3','The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component'));
  }

}
