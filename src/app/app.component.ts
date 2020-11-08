import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      username: 'nature',
      content: 'Beautiful summer Oak tree'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      username: 'mountainlover',
      content: 'Picture of a snowy mountain'
    },
    {
      title: 'Morning driving',
      imageUrl: 'https://images.unsplash.com/photo-1562877961-efcec8439f9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
      username: 'anna-muzykina',
      content: 'Morning driving with amazing music'
    }
  ]
}
