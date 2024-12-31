import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/components/teams/teams.component').then(m => m.TeamsComponent)
      },
];
