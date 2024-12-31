import { Component, OnInit, ViewChild } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Game } from '../../model/game';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatSortModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public dataSource = new MatTableDataSource<Game>();
  public displayedColumns: string[] = [
    'home_team',
    'visitor_team',
    'week',
    'final_score',
    'date',
  ];

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getGames().subscribe((data) => {
      this.dataSource.data = data.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
