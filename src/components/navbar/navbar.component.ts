import { RouterOutlet , RouterLinkActive , RouterLink} from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
