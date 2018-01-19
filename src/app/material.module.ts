import { NgModule } from '@angular/core';

import { MatCardModule,
         MatChipsModule,
         MatListModule,
         MatTabsModule,
         MatMenuModule,
         MatButtonModule,
         MatCheckboxModule,
         MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatSelect,
         MatStepperModule,
         MatAutocompleteModule,
         MatTableModule,
         MatTableDataSource,
         MatDialogModule,
         MatGridListModule,
         MatGridList
        } from '@angular/material';
@NgModule({
    imports: [
        MatButtonModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule ,
        MatTabsModule,
        MatChipsModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatTableModule,
        MatDialogModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule ,
        MatTabsModule,
        MatChipsModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatTableModule,
        MatDialogModule,
        MatGridListModule
    ]
})
export class MaterialModule {}
