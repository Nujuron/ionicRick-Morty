import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  characters: object[] = [];

  constructor(
    private HttpClient : HttpClient
  ) { }

  ngOnInit() {
    this.HttpClient.get<any>("https://rickandmortyapi.com/api/character")
      .subscribe(
        response => {
          console.log(response)
          this.characters = response.results;
        },
        error => console.log(error),
        () => console.log("Petición completa")
      )
      
  }

}
