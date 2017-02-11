import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Models
import { USERMODEL } from '../user/user.model';



@Component({
  selector: 'userpage',
  templateUrl:'../app/user/userpage.html'
})

export class USERCOMPONENT implements OnInit 
{
     
    instanceusermodel : USERMODEL;
    
    constructor()
    {
        this.instanceusermodel = new USERMODEL();
    }

    ngOnInit()
    {
    }
}