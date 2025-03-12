import { Routes } from '@angular/router';
import { CrudUserComponent } from './components/crud-user/crud-user.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { TestGuard2Guard } from './guard/test-guard2.guard';
import { FormsModuleComponent } from './components/forms-module/forms-module.component';

export const routes: Routes = [
    { path: "", component: CrudUserComponent },
    { path: "form", component: FormsModuleComponent },
    { path: "pokedex", component: PokedexComponent },
    { path: "detail-user/:id", component: DetailUserComponent, canActivate: [TestGuard2Guard] }
];
