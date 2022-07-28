import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
 
import { Exercise1Component } from './exercise1/exercise1.component';


const routes: Routes = [
  
  
    { path: 'exercise1', component: Exercise1Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
