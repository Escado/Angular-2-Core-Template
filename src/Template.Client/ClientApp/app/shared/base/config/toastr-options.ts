import {ToastOptions} from 'ng2-toastr';

export class CustomToastOptions extends ToastOptions {
  animate = 'flyRight';
  newestOnTop = false;
  showCloseButton = true;
}