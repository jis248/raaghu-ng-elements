import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-pagination',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  {

 disabled: boolean = false;
@Input() totalRecords = 10;
@Input() recordsPerPage = 1;
currentPage = 1;
@Input() totalVisible = 5;

 startPage  = 1;
 endPage = 5;
public backarrow!:string

maxSize = 5;

@Input()
size: 'large' | 'small' | 'medium' = 'medium';

@Input() alignmentType : 'start' | 'center' | 'end'= 'start';

@Input() role : 'Basic' | 'Advanced' = 'Basic';

@Output() onPageChange = new EventEmitter<any>();

public pages!: number [];
  activePage!: number;
  totalPage: any;
  pageCount=5;

ngOnChanges() {
  this.pages=[];
  this.currentPage=1;
 this.totalPage=this.totalRecords/this.recordsPerPage;
  this.pages = this.getArrayOfPage(this.pageCount);
  this.activePage = 1;
  this.onPageChange.emit(1);
}
// private  getPageCount(): number {
//   var totalPage = 1;

//   if (this.totalRecords > 1 && this.recordsPerPage > 0) {
//     const pageCount = this.totalRecords / this.recordsPerPage;
//     const roundedPageCount = Math.floor(pageCount);
//     this.totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
//     console.log(totalPage);
//   }
//   return this.totalPage;
// }


private getArrayOfPage(pageCount: number): number [] {

  const pageArray = [];

if(this.totalPage>5){
  if (pageCount > 0) {
    for(let i = 1 ; i <= pageCount ; i++) {
      pageArray.push(i);
    }
    this.startPage=1;
    this.endPage=5;
    // console.log(pageCount);
}
return pageArray;
}
else
{
  if (this.totalPage > 0) {
    for(let i = 1 ; i <= this.totalPage ; i++) {
      pageArray.push(i);
    }
    this.startPage=1;
    this.endPage=this.totalPage;
}
return pageArray
}
}
private getArrayOfPage1(startpage: number,endpage :number): number [] {
  const pageArray = [];

  if (startpage > 0) {
      for(let i = startpage ; i <= endpage ; i++) {
        pageArray.push(i);
      }
      // console.log(startpage);
  }
  return pageArray;
}

onClickPage(pageNumber: number): void {


  if (pageNumber >= 1 && pageNumber <= this.totalRecords) {
    this.activePage = pageNumber;
    this.onPageChange.emit(this.activePage);
    this.disabled = true;
    // this.hideDot = true;
}
if(this.activePage === 1){
  this.disabled = false;
  // this.hideDot = false;
}


}

public get classes(): string {

  const size = ` pagination-${this.size === 'large' ? 'lg ' : this.size === 'small' ? 'sm ' : 'medium'}`;
  const align =  `pagination justify-content-${this.alignmentType}`;
  return size + align;

  }

  doubleArrow( currentPage: number,reverse: boolean){

   if(reverse){

     this.startPage = (this.currentPage - this.pageCount) - (this.currentPage % this.pageCount) + 1;
     this.endPage = this.startPage + this.pageCount - 1;
     this.pages= this.getArrayOfPage1(this.startPage,this.endPage);
     this.currentPage = this.startPage;
    // this.backArrowdisable()
     }else{
    if(this.endPage == this.totalPage){

    }else{

     this.startPage = (this.currentPage +this.pageCount) - (this.currentPage % this.pageCount) + 1;
     this.endPage = this.startPage + this.pageCount - 1;
     this.pages= this.getArrayOfPage1(this.startPage,this.endPage);
     this.currentPage = this.startPage;
    // this.backArrowdisable()
 }
   }
 }

 public get hideArrow() :string{
   let hide = "";
     if(this.endPage === this.totalPage){
       hide = "d-none"
     }

     return hide;
 }
public get backArrowdisable()
{
  let hide = "";
  this.backarrow="";
    if(this.startPage <=1){
      hide = "d-none"
      this.backarrow="d-none";
    }
return hide;

}
}

 
