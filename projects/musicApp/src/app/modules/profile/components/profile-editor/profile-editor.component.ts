import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.styl']
})
export class ProfileEditorComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  


  constructor(private http: HttpClient) { }

  profileForm = new FormGroup({
    profileName: new FormControl(''),
    email: new FormControl(''),
  });
  

  uri = "http://localhost:8000"

  profileSubmit(name, email) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
         })
 };

    const obj = {
      name,
      email
    };
    this.http.post(`${this.uri}/profile/submit`, obj, httpOptions)
        .subscribe(res => console.log('Done'));
  }


  ngOnInit() {
    
    

  }

}
