import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { DealersComponent } from './dealers/dealers.component';
import { Dashboard_barchartComponent } from './dashboard/dashboard_barchart/dashboard_barchart.component';
import { DashboardlinechartComponent } from './dashboard/dashboard_linechart/dashboard_linechart.component';


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'orders', component:OrdersComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'dealers', component:DealersComponent},
  {path: 'dashboard-barchart',component:Dashboard_barchartComponent},
  {path: 'dashboard-linechart',component:DashboardlinechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
