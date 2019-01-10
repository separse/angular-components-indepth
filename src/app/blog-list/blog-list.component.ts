import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  // blogPost: BlogPost[] = [];
  blogPosts: BlogPost[][];
  constructor() { 
    
  }

  // Best practice is to leave constructor very light weight
  // constructor is recomended use for dependency injection for services etc.,
  // The more compilicated your contructor is MORE difficult to test the class / component
  ngOnInit() {
    // let blog1 = new BlogPost('Blog Post 1','Summary1');
    // this.blogPost.push(blog1);
    // this.blogPost.push(new BlogPost('Blog Post 2','Summary2'));
    // this.blogPost.push(new BlogPost('Blog Post 3','The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component The more compilicated your contructor is MORE difficult to test the class / component'));
    this.blogPosts = 
    [
      // This is PAGE 1 array
      [
        {title: 'Post 1',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 2',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 3',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 4',
        summary: 'constructor is recomended use for dependency injection for services etc.,'}
      ],
      // This is PAGE 2 another array
      [
        {title: 'Post 5',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 6',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 7',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 8',
        summary: 'constructor is recomended use for dependency injection for services etc.,'}
      ],
      // This is PAGE 3 array
      [
        {title: 'Post 9',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 10',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 11',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'Post 12',
        summary: 'constructor is recomended use for dependency injection for services etc.,'}
      ]
    ];
  }

}
