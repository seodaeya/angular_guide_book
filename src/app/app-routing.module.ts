import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main.component';
import { ProductModule } from './products/product.module';
import { ErrorComponent } from './error.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    ErrorComponent,
  ],
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
