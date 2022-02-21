import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { success } from './file-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AppComponent,
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit, ControlValueAccessor {
  onChange!: (value: string[]) => void;
  onTouched!: () => void;
   message: success[] = [];

  value = ''
  @Input()
  size?:string;
  @Input()
  label = 'Single file upload';
  @Input()
  multipleFiles=false
  @Input() maxfilesize?: any = 5;
  result: string = ''
  errorMsg: boolean = false;
  fileName: string ="";
  fileSize ?: number;
  errorSizeInKb ?: number;
  fileType?: string="";


 @Input() role : 'default' | 'fileUpload' = 'default';

 @Output() click = new EventEmitter<any>();
 @Output() onItemClick = new EventEmitter<any>();

  constructor() { }
  writeValue(obj: any): void {

    this.value = obj

  }
  registerOnChange(fn: any): void {
    this.onChange =fn

  }
  registerOnTouched(fn: any): void {
    this.onTouched =fn

  }

  ngOnInit(): void {
  }

  getValue(event:any){
    this.onChange(event.target.files)
    this.onTouched()
  }

  public get classes():string[]{
    var classList =['form-control']

    if(this.size === 'small'){
      var selectSize = 'form-control-sm'
      classList.push(selectSize)
    }
    else if(this.size === 'large'){
      var selectSize = 'form-control-lg'
      classList.push(selectSize)
    }
    else
    {
      var selectSize = ''
     classList.push(selectSize)
    }

    return classList
  }

  checkFileSize(event: any): void {
    this.message=[];
    // var selectedFile = event.target.files;
    // this.result += '<br>File Size(byte): ' + selectedFile.size;
    // var sizeInMB = (selectedFile.size / (1024*1024)).toFixed(2);

    // var sizeInKb = (selectedFile.size / 1024).toFixed(2);
    // this.errorSizeInKb = +sizeInKb;

    // var fileSize = +sizeInMB;
    // this.fileSize = fileSize;

    // if(fileSize > this.maxfilesize){
    //      this.errorMsg = true;

    // }else{
    //     this.errorMsg = false;

    // }

  var data = event.target.files;
    // var fileName = event.target.files.name;
    // var sizeInMB = (data.size / (1024*1024)).toFixed(2);
    var sizeInMB = (data.size / (1024*1024)).toFixed(2);
  for(let i=0;i<data.length;i++){
      this.result += '<br>File Size(byte): ' + data.size;
      var sizeInMB = (data[i].size / (1024*1024)).toFixed(2);
      var fileSize = +sizeInMB;
      this.fileSize = fileSize;

      let items=new success();

   if(fileSize > this.maxfilesize){
       items.filename=data[i].name;
       items.filesize=fileSize;
       items.iserror=false;
       this.message.push(items);
  }else{
        items.filename=data[i].name;
        items.filesize=fileSize;
        items.iserror=true;
        this.message.push(items);
  }
if(data){
  this.onItemClick.emit(data);
}

  }
    // var fileType = event.target.files[0].type;
    //  this.fileType = fileType;
    //   console.log(fileType);
  }

}
// export class success{

//   filename!: string;
//   filesize!:number|undefined;
//   iserror!:boolean|undefined;

// }
