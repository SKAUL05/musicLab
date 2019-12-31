import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.styl']
})
export class ProfileEditorComponent implements OnInit {
  constructor(private http: HttpClient) { }

  profileForm = new FormGroup({
    profileName: new FormControl(''),
    email: new FormControl(''),
  });
  

  uri = "http://localhost:8000"

  profileSubmit(name, email) {
    const obj = {
      name,
      email
    };
    this.http.post(`${this.uri}/profile/submit`, obj)
        .subscribe(res => console.log('Done'));
  }


  ngOnInit() {
    

  }

}
