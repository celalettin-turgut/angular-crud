import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts? = [];
  todos? = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const posts = fetch('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => posts.json())
      .then((posts) => {
        console.log(posts);
        this.posts = posts;
      });

    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => this.todos);
  }

  click() {}
}
