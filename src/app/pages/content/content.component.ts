import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ""
  cardTitle:string = ""
  cardDescription:string = ""
  private id:string |null = "0"

  constructor(
    private route:ActivatedRoute
  ) {
      this.route.paramMap.subscribe( value=>{
      this.id = value.get('id')
      if (this.id){
        this.setValuesToComponent(this.id)
      }
    })
   }

  ngOnInit(): void {
  }

  setValuesToComponent( id:string ){
    const result = dataFake.filter(article =>  article.id==id
    )

    console.log(result)
    if(result){
      this.photoCover = result[0].image
      this.cardTitle = result[0].name
      this.cardDescription = result[0].description
    }
  }

}
