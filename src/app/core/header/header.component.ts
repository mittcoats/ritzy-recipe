import { Component } from '@angular/core';
import { Response } from "@angular/http";

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  constructor(
    private dSService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSave() {
    this.dSService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onGet() {
    this.dSService.getRecipes();
  }

  onSignOut() {
    this.authService.signOutUser();
    this.router.navigate(["/"]);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

