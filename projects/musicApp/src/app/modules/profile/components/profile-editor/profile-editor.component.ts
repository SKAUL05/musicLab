import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl} from '@angular/forms';
import { environment } from 'projects/musicApp/src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  


  constructor(private http: HttpClient,private _matSnackBar: MatSnackBar) { }

  uri = environment.defaultUri

  profileSubmit() {
    this.step++;

    let details = {}
    
    this.http.post(`${this.uri}/profile/submit`, this.profileData)
        .subscribe((res) => {
          details = res['details']
          console.log(details)
          this._matSnackBar.open(details['message'], "", {
            duration: 1000,
          });
          for (let a_data in this.profileData){
            this.profileData[a_data] = ''
          }
        });
        
   
  }



  ngOnInit() {
    // this.http.get(`${this.uri}`).subscribe(res =>
    //   console.log(res['data'])
    //   );

  }

}
