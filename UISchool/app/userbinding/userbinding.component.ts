import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Models
import { USERBINDINGMODEL } from '../userbinding/userbinding.model';

//Services
import { USERBINDINGSERVICE } from '../userbinding/userbinding.service';

@Component({
  selector: 'userbindingpage',
  templateUrl:'../app/userbinding/userbindingpage.html',
  providers: [USERBINDINGSERVICE]  
})


export class USERBINDINGCOMPONENT implements OnInit 
{
    
    instanceuserbindingmodel : USERBINDINGMODEL;

    citylistdetails : CityDetails[];
    statelistdetails : StateDetails[];
    countrylistdetails : CountryDetails[];

    constructor(private userbindingservice:USERBINDINGSERVICE)
    {
        this.instanceuserbindingmodel = new USERBINDINGMODEL();
    }
    
    ngOnInit()
    {
       this.GetCityValue();
       this.GetStateValue();
       this.GetCountryValue();
    }

    GetCityValue()
    {       
       this.userbindingservice
       .citylist()
       .subscribe(responsecitylist => { this.citylistdetails = responsecitylist;});
    }

    GetStateValue()
    {       
       this.userbindingservice
       .statelist()
       .subscribe(responsestatelist => { this.statelistdetails = responsestatelist;});
    }

    GetCountryValue()
    {       
       this.userbindingservice
       .countrylist()
       .subscribe(responsecountrylist => { this.countrylistdetails = responsecountrylist;});
    }

    studentselect(event) {
        console.log(event.target.value);
        console.log(this.instanceuserbindingmodel.bustudentid);
    }

    parentselect(event) {
        console.log(event.target.value);
    }

    classsectionselect(event) {
        console.log(event.target.value);
    }

}

export class CityDetails 
{
   public cyid: string;
   public expansion: string;
   public stateid: string;
}

export class StateDetails 
{
   public sid: string;
   public expansion: string;
   public countryid: string;
}

export class CountryDetails 
{
   public cid: string;
   public expansion: string;   
}