import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  names: any[] = ["Megan", "Tom", "Mellisa", "Tom", "John", "Megan", "Megan", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Megan", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Megan", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Sam", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Megan", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Megan", "Tom", "Mellisa", "Tom", "John", "Megan",
    "Megan", "Tom", "Mellisa", "Tom", "John", "Megan"
  ];
  finalArr:any=[]
 
  constructor() { }

  ngOnInit() {

    const count = this.names.reduce((accumulator, value) => {
      return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});

    console.log(count)
    this.finalArr = Object.entries(count);

  }
}
