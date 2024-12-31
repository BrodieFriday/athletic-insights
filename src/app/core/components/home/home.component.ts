import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GamesComponent } from './../../../core/components/games/games.component';
import { TeamsComponent } from './../../../core/components/teams/teams.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, GamesComponent, TeamsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
