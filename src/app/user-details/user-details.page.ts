import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  characterId?:number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.characterId = +this.route.snapshot.paramMap.get('id');
  }

}
