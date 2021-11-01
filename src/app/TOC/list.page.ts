import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url:"/chapter1"
    },
    {
      title: "Chapter 2 | The Continuation",
      url:"/chapter2"
    },
    {
      title: "Chapter 3 | The Climax",
      url:"/chapter3"
    },
    {
      title: "Chapter 4 | The Plotwist",
      url:"/chapter4"
    },
    {
      title: "Chapter 5 | The End",
      url:"/chapter5"
    }


  ];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
