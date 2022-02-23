import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-nav-bar',
  templateUrl: './RdsNavbar.component.html',
  styleUrls: ['./RdsNavbar.component.scss']
})
export class RdsNavbarComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }


@Input() navbarItems:any[] =[ {
  label:"Home",
  isActive:true,
  navclass:'',
  href:'',
},
{
  label:"Features",
  isActive:false,
  navclass:'',
  href:'',
},
{
  label:"Pricing",
  isActive:false,
  navclass:'',
  href:'',
}];
@Input()
navbarId?:string
@Input()
type:'small'|'medium'|'large'|'extra large'='medium'
@Input()
backgroundColor?: string="#dee2e6";



 @Input()
 navbarheader!: TemplateRef<any>;
  @Input()
  navbarcontent!: TemplateRef<any>
  @Input()

public get classes(): string[] {
  var naveclass= ['navbar navbar-expand-md']
  if(this.type=="small"){
    naveclass.push('navbar-expand-sm')
    
  }
  if(this.type=="medium"){
    naveclass.push('navbar-expand-md')
    
  }
  if(this.type=="large"){
    naveclass.push('navbar-expand-lg')

  }
  if(this.type=="extra large"){
    naveclass.push('navbar-expand-xl')
   
  }
  this.navbarItems.forEach(function(element){
    if(element.isActive){
      var active='active'
      element.navclass = [`nav-link`, active].join(' ');
     
    }else{
      element.navclass = "nav-link";
    }
});
  
  return  naveclass

  }



}
