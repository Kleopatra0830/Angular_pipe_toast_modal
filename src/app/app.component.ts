import { Component, AfterViewInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { Toast } from 'bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-pipes-example';
  longText = 'This is a long piece of text that we want to truncate.';
  number = 5;
  appendText = ' - Angular Rocks!';

  // ngAfterViewInit() {
  //   const modalElement = document.getElementById('exampleModal');
  //   if (modalElement) {  // Check if modalElement is not null
  //     const myModal = new Modal(modalElement);

  //     // When the modal is shown, trigger focus on the input
  //     modalElement.addEventListener('shown.bs.modal', () => {
  //       const inputElement = document.getElementById('myInput');
  //       inputElement?.focus();  // Use optional chaining to safely access the element
  //     });

  //     document.getElementById('openModalButton')?.addEventListener('click', () => {
  //       myModal.show();
  //     });
  //   } else {
  //     console.error('Modal element not found!');
  //   }
  // }
  ngAfterViewInit() {
    // Get the toast element
    const toastElement = document.getElementById('myToast');
    if (toastElement) {
      const myToast = new Toast(toastElement);

      // Show the toast on button click
      document.getElementById('showToastButton')?.addEventListener('click', () => {
        myToast.show();
      });
    }
  }
}
