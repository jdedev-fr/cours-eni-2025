import { Routes } from '@angular/router';
import { CrudUserComponent } from './components/crud-user/crud-user.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { TestGuard2Guard } from './guard/test-guard2.guard';

export const routes: Routes = [
    { path: "", component: CrudUserComponent },
    { path: "pokedex", component: PokedexComponent },
    { path: "detail-user/:id", component: DetailUserComponent, canActivate: [TestGuard2Guard] }
];
