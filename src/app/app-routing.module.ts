import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add_product', component: Page2Component },
  { path: 'product', component: Page1Component },
  { path: 'edit_product', component: Page3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
