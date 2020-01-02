import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';
import { environment } from 'projects/musicApp/src/environments/environment';


@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.styl']
})
export class ProfileEditorComponent implements OnInit {
  step = 0;
  public profileData = {
    name:'',
    email:'',
    age:null,
    dob:null,
    country:'',
    password:''
  }

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

  uri = environment.defaultUri

  profileSubmit() {
    this.step++;

    
    this.http.post(`${this.uri}/profile/submit`, this.profileData)
        .subscribe(res => console.log(res['details']['message']));
    for (let a_data in this.profileData){
      this.profileData[a_data] = ''
    }
  }



  ngOnInit() {
    // this.http.get(`${this.uri}`).subscribe(res =>
    //   console.log(res['data'])
    //   );

  }

}
