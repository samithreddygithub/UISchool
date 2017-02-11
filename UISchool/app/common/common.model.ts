export class CLASSSECTIONMODEL
{     
    public csid:number;
    public csclassname:string;
    public cssectionname:string;    
    public cscreateddate : string;
    public csmodifieddate : string;
    public csstatus : string;
    public csoid : number;
}   

export class CLASSSUBJECTMODEL
{     
    public csubid:number;    
    public csubclasssectionid:number;
    public csubsubjectname:string; 
    public csstaffnameid:number;   
    public csubcreateddate:string;
    public csubmodifieddate:string;
    public csubstatus:string;
    public csuboid:number;
}   

