import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

  onClickMusicBtn(){
    let call = this._http.get("http://localhost:8000/checkapi/") 
    call.subscribe((response)=>{
      console.log(response);
    })
  }

}
