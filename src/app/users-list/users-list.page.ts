import { Component, OnInit } from '@angular/core';
import { CharacterServiceService} from '../character-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  characters: object[] = [];

  constructor(
    private characterService : CharacterServiceService,
  ) { }

  ngOnInit() {
    this.characterService.getCharacters()
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
