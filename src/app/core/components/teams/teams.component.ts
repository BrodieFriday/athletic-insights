import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {

  constructor(private statsService: StatsService) {

  }

  ngOnInit() {
    this.statsService.getData().subscribe(data => {
      console.log("data",data);
    });
  }

}
