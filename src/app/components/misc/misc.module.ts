import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { CdkTableModule } from '@angular/cdk';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '@shared/pipes/pipes.module';

import { CarouselComponent } from './carousel/carousel.component';
import { MiscComponent } from './misc.component';
import { ChangeDetectionComponent } from './change/change-detection.component';
import { ChangeDetailComponent } from './change/change-detail.component';
import { VirtRealComponent } from './virtual-reality/virtreal.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent,
    DragDropComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule,
    MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatSidenavModule,
    MatTableModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
    MatIconModule, MatToolbarModule,
    FormsModule, ReactiveFormsModule,
    PipesModule,
    DragDropModule
  ],
  exports: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent,
    ExpansionPanelComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class MiscModule {
}
