import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMainComponent } from './components/sidebar-main/sidebar-main.component';
import { AddItemTableComponent } from './components/add-item-table/add-item-table.component';

const routes: Routes = [
  { path: "", component: AddItemTableComponent },
  { path: "sidebar", component: SidebarMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
