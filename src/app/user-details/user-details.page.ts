import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.characterId = +this.route.snapshot.paramMap.get('id');
    this.httpClient.get("https://rickandmortyapi.com/api/character/"+this.characterId)
      .subscribe(
        res =>{
          this.character = res;
        },
        error => console.log(error),
        () => console.log("personaje cargado")
      )
  }

}
