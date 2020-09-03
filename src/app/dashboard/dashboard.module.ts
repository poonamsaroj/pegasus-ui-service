import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MatNativeDateModule,  MatDatepickerModule, MatAutocompleteModule, MatProgressSpinnerModule, MatExpansionModule, MatTooltipModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule,  MatSelectModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSortModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatSelectSearchModule,
    FlexLayoutModule
  ],
  /**It is important to provide GlobalErrorHandler too along with the object , other staticInjector error is thrown */
  providers: [
    // GlobalErrorHandler,
    // { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class DashboardModule { }
