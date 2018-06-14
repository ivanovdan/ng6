import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ShapesComponent } from './shapes/shapes.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';
import { AlgosComponent } from './algos/algos.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'shapes',
    component: ShapesComponent
  },
  {
    path: 'flex-box',
    component: FlexBoxComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'algos',
    component: AlgosComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
