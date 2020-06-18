import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class HomeMaterialModule { }