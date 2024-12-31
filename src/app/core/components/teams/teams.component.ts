import { Component, OnInit, ViewChild } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Team } from '../../model/team';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<Team>();
  public displayedColumns: string[] = [
    'name',
    'conference',
    'division',
    'location',
  ];

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getData().subscribe((data) => {
      this.dataSource.data = data.data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
