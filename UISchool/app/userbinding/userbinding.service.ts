import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//Models
import { USERBINDINGMODEL }    from '../userbinding/userbinding.model';
import { CityDetails,StateDetails,CountryDetails }    from '../userbinding/userbinding.component';

@Injectable()
export class USERBINDINGSERVICE {

    constructor(private http: Http) { }

    citylist()
    {
        return this.http.get('http://www.webapidbhl.somee.com/api/common/citydetailsread')
        .map(responsecitylist => <CityDetails[]>responsecitylist.json());
    }

    statelist()
    {
        return this.http.get('http://www.webapidbhl.somee.com/api/common/statedetailsread')
        .map(responsestatelist => <StateDetails[]>responsestatelist.json());
    }

    countrylist()
    {
        return this.http.get('http://www.webapidbhl.somee.com/api/common/countrydetailsread')
        .map(responsecountrylist => <CountryDetails[]>responsecountrylist.json());
    }
    
}