import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check2 = 0;

  constructor() { }

  @Input() check;

  ngOnInit(): void {
  }

  myfunc(){
      this.check2 = 1
  }

}
