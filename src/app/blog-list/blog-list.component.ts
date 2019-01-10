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
  currentPage: number;
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
    
    this.currentPage = 0;
    this.blogPosts = 
    [
      // This is PAGE 1 array
      [
        {title: 'PAGE 1 Post 1',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 1 Post 2',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 1 Post 3',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 1 Post 4',
        summary: 'constructor is recomended use for dependency injection for services etc.,'}
      ],
      // This is PAGE 2 another array
      [
        {title: 'PAGE 2 Post 5',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 2 Post 6',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 2 Post 7',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 2 Post 8',
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
      ],
      // This is PAGE 4 array
      [
        {title: 'PAGE 4 Post 13',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 4 Post 14',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 4 Post 15',
        summary: 'constructor is recomended use for dependency injection for services etc.,'},
        {title: 'PAGE 4 Post 16',
        summary: 'constructor is recomended use for dependency injection for services etc.,'}
      ]
    ];
  }

  updatePage(newPage){
    console.log("Event Emitted and CAPTURED");
    this.currentPage = newPage;
  }

}
