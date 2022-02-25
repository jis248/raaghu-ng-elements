import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreadcrumbsItems } from './breadcrumb-item';
  
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService{

  private subject = new Subject<any>();

  sendItems(breadcrumbs:BreadcrumbsItems[]) {
    this.subject.next(breadcrumbs);
}


getItem(): Observable<any> {
  return this.subject.asObservable();
}

}
