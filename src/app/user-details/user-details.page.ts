import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterServiceService} from '../character-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  characterId?:number;
  character?:object;
  constructor(
    private route: ActivatedRoute,
    private characterService : CharacterServiceService,
  ) { }

  ngOnInit() {
    this.characterId = +this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(this.characterId)
      .subscribe(
        res =>{
          this.character = res;
        },
        error => console.log(error),
        () => console.log("personaje cargado")
      )
  }

}
