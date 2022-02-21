import { Story, Meta } from '@storybook/angular/types-6-0'
import { AppComponent } from './app.component';
export default {

    title: 'rds-modal',
    component: AppComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
        onShow: { click: "clicked" },
    },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});
export const FormModal: Story<AppComponent> = (args) => ({
    props: args,
    template:
        `
      <button type="button" (click)="onClick($event)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
      {{label}}
    </button> 
   <rds-modal modalId="storybookModal" (onShow) = "onShow($event)" [modalheader]="modalheader" [Modalbody]="Modalbody" [Modalfooter]="Modalfooter">
    <ng-template #modalheader>
          <h5 class="modal-title" id="storybookModal">Modal title</h5>
          <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </ng-template>    
   <ng-template #Modalbody>
          <p>Modal Content</p>
    </ng-template> 
    <ng-template #Modalfooter>
          <button type="button" (click)="onClose($event)" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
    </ng-template> 
  </rds-modal>
    `,

});
FormModal.args = {
    backgroundColor: '',
    label: 'Launch demo modal',
    height: 100,
    modalId: "storybookModal",
    ModalClasses: "modal-dialog",
    backdropstatic: true
};
// export const StaicBackdropModal: Story<AppComponent> = (args) => ({
//     props: args,
//     template:
//         `
//       <button type="button" (click)="onClick($event)"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
//       {{label}}
//     </button>

  
//           <storybook-modal backdropstatic="static" modalId="storybookModal" [modalheader]="modalheader" [Modalbody]="Modalbody" [Modalfooter]="Modalfooter">
//             <ng-template #modalheader>
//               <h5 class="modal-title" id="storybookModal">Modal title</h5>
//               <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//            </ng-template>  
//            <ng-template #Modalbody>
//              <p>Modal Body</p>
//            </ng-template>  
//            <ng-template #Modalfooter>
//              <button type="button" (click)="onClose($event)" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
//            </ng-template> 
//           </storybook-modal>
    
      
//       `,
// });
// StaicBackdropModal.args = {
//     backgroundColor: '',
//     label: 'Launch static backdrop modal',
//     height: 100,
//     backdropstatic: 'static',
//     modalId: "storybookModal",
//     ModalClasses: 'modal-dialog'

// };
// export const LongContentModal: Story<AppComponent> = (args) => ({
//     props: args,
//     template:
//         ` 
//       <button type="button"  (click)="onClick($event)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
//       {{label}}
//     </button>
//     <storybook-modal modalId="storybookModal" [modalheader]="modalheader" [Modalbody]="Modalbody" [Modalfooter]="Modalfooter">
//     <ng-template #modalheader>
//        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//    </ng-template>    
//     <ng-template #Modalbody>
//     <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.

//     </p>
//     <br>
//     <br>
//     <br>
//     <br>
//     <br>

//     <br>
//     <br>
//     <br>

//     <br>
//     <br>
//     <br>
//      <br>
//     </ng-template> 
//     <ng-template #Modalfooter>
//       <button type="button" (click)="onClose($event)" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary">Save changes</button>
//     </ng-template> 
//     </storybook-modal> 
//     `,
// });
// LongContentModal.args = {
//     backgroundColor: '',
//     label: 'Launch static backdrop modal',
//     height: 100,
//     modalId: "storybookModal",
//     ModalClasses: 'modal-dialog modal-dialog-scrollabl',

// };








