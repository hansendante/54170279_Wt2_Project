import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}
  profile(): void {
    this.userService.login().subscribe(() => {
      if (this.userService.isLoggedIn) {
        this.router.navigate(["profile"]);
      }
    });
  }

}
