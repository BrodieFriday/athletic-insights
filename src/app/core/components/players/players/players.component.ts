import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { StatsService } from '../../../services/stats.service';
import { Player } from '../../../model/player';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<Player>();
  public displayedColumns: string[] = [
    'name',
    'position',
    'college',
    'experience',
  ];

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getPlayers().subscribe((data) => {
      this.dataSource.data = data.data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
