import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  
 

  private meteo = 'https://prevision-meteo.ch/services/json/lyon';

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get(this.meteo);
  }
  getAll(): void {
   
  }
}
