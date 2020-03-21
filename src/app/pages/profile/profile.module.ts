// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { ProfileComponent } from './profile.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule,
    MatToolbarModule, MatCardModule, MatDialogModule,
    FormsModule
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfileModule {
}
