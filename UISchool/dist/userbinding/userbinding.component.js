"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//Models
var userbinding_model_1 = require('../userbinding/userbinding.model');
//Services
var userbinding_service_1 = require('../userbinding/userbinding.service');
var USERBINDINGCOMPONENT = (function () {
    function USERBINDINGCOMPONENT(userbindingservice) {
        this.userbindingservice = userbindingservice;
        this.instanceuserbindingmodel = new userbinding_model_1.USERBINDINGMODEL();
    }
    USERBINDINGCOMPONENT.prototype.ngOnInit = function () {
        this.GetCityValue();
        this.GetStateValue();
        this.GetCountryValue();
    };
    USERBINDINGCOMPONENT.prototype.GetCityValue = function () {
        var _this = this;
        this.userbindingservice
            .citylist()
            .subscribe(function (responsecitylist) { _this.citylistdetails = responsecitylist; });
    };
    USERBINDINGCOMPONENT.prototype.GetStateValue = function () {
        var _this = this;
        this.userbindingservice
            .statelist()
            .subscribe(function (responsestatelist) { _this.statelistdetails = responsestatelist; });
    };
    USERBINDINGCOMPONENT.prototype.GetCountryValue = function () {
        var _this = this;
        this.userbindingservice
            .countrylist()
            .subscribe(function (responsecountrylist) { _this.countrylistdetails = responsecountrylist; });
    };
    USERBINDINGCOMPONENT.prototype.studentselect = function (event) {
        console.log(event.target.value);
        console.log(this.instanceuserbindingmodel.bustudentid);
    };
    USERBINDINGCOMPONENT.prototype.parentselect = function (event) {
        console.log(event.target.value);
    };
    USERBINDINGCOMPONENT.prototype.classsectionselect = function (event) {
        console.log(event.target.value);
    };
    USERBINDINGCOMPONENT = __decorate([
        core_1.Component({
            selector: 'userbindingpage',
            templateUrl: '../app/userbinding/userbindingpage.html',
            providers: [userbinding_service_1.USERBINDINGSERVICE]
        }), 
        __metadata('design:paramtypes', [userbinding_service_1.USERBINDINGSERVICE])
    ], USERBINDINGCOMPONENT);
    return USERBINDINGCOMPONENT;
}());
exports.USERBINDINGCOMPONENT = USERBINDINGCOMPONENT;
var CityDetails = (function () {
    function CityDetails() {
    }
    return CityDetails;
}());
exports.CityDetails = CityDetails;
var StateDetails = (function () {
    function StateDetails() {
    }
    return StateDetails;
}());
exports.StateDetails = StateDetails;
var CountryDetails = (function () {
    function CountryDetails() {
    }
    return CountryDetails;
}());
exports.CountryDetails = CountryDetails;
//# sourceMappingURL=userbinding.component.js.map