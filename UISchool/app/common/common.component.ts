import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Models
import { CLASSSECTIONMODEL, CLASSSUBJECTMODEL } from '../common/common.model';


@Component({
  selector: 'commonpage',
  templateUrl:'../app/common/commonpage.html'
})

export class COMMONCOMPONENT implements OnInit 
{
    public cmndropdownlist:string;
        
    instanceclasssectionmodel : CLASSSECTIONMODEL;
    instanceclasssubjectmodel : CLASSSUBJECTMODEL;

    constructor()
    {        
        this.instanceclasssectionmodel = new CLASSSECTIONMODEL();
        this.instanceclasssubjectmodel = new CLASSSUBJECTMODEL();
    }

    ngOnInit()
    {
    }
}