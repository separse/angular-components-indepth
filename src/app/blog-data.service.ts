import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {


  constructor() { }

  getData(): BlogPost [] []{
    return [
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
}
