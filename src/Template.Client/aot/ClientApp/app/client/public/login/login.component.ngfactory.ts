/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../ClientApp/app/client/public/login/login.component';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/router';
import * as i4 from '@angular/common';
const styles_ClientLoginComponent:any[] = ([] as any[]);
export const RenderType_ClientLoginComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ClientLoginComponent,data:{}});
export function View_ClientLoginComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),60,'div',[['class',
      'login-panel container']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),57,'div',[['class','col-md-4 col-md-push-4']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),54,'div',[['class',
      'panel panel-info']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),4,'div',[['class','panel-heading']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',
      ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    Login Client\n                '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),45,'div',
          [['class','panel-body']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),42,'form',[['class','form'],['novalidate',
              '']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
              [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
                  (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
              [[(null as any),'ngSubmit'],[(null as any),'submit'],[(null as any),
                  'reset']],(_v,en,$event) => {
                var ad:boolean = true;
                var _co:i1.ClientLoginComponent = _v.component;
                if (('submit' === en)) {
                  const pd_0:any = ((<any>i0.ɵnov(_v,16).onSubmit($event)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('reset' === en)) {
                  const pd_1:any = ((<any>i0.ɵnov(_v,16).onReset()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('ngSubmit' === en)) {
                  const pd_2:any = ((<any>_co.login(i0.ɵnov(_v,16).value)) !== false);
                  ad = (pd_2 && ad);
                }
                return ad;
              },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.ɵbf,
          ([] as any[]),(null as any),(null as any)),i0.ɵdid(16384,[['loginForm',4]],
          0,i2.NgForm,[[8,(null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i0.ɵdid(16384,
          (null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),8,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),5,'input',[['class','form-control'],['name',
              'username'],['placeholder','Username'],['type','text']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModel'],
              [(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClientLoginComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,23)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,23).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,23)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,23)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModel' === en)) {
              const pd_4:any = ((<any>_co.username) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i2.NgModel,[[2,i2.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],{name:[0,'name']},
          (null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,(null as any),[i2.NgModel]),
      i0.ɵdid(16384,(null as any),0,i2.NgControlStatus,[i2.NgControl],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),8,'div',[['class','form-group']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          5,'input',[['class','form-control'],['name','password'],['placeholder','Password'],
              ['type','password']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModel'],[(null as any),'input'],
              [(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
                  'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClientLoginComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,33)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,33).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,33)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,33)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModel' === en)) {
              const pd_4:any = ((<any>_co.password) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i2.NgModel,[[2,i2.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],{name:[0,'name']},
          (null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,(null as any),[i2.NgModel]),
      i0.ɵdid(16384,(null as any),0,i2.NgControlStatus,[i2.NgControl],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),5,'div',[['class','center-block centered text-center']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'input',[['class','btn btn-success btn-default'],
              ['type','submit'],['value','Login']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'input',[['class','btn btn-primary btn-default'],
          ['type','button'],['value','Register']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵted((null as any),['\n\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          6,'div',[['class','text-center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'a',[['class','small']],[[1,
          'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,52).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i3.RouterLinkWithHref,
          [i3.Router,i3.ActivatedRoute,i4.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i0.ɵpad(1),(_l()(),i0.ɵted((null as any),['Forgot password? Click here to reset.'])),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    const currVal_14:any = 'username';
    _ck(_v,25,0,currVal_14);
    const currVal_22:any = 'password';
    _ck(_v,35,0,currVal_22);
    const currVal_25:any = _ck(_v,53,0,'/reset-password');
    _ck(_v,52,0,currVal_25);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,18).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,18).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,18).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,18).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,18).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,18).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,18).ngClassPending;
    _ck(_v,14,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = i0.ɵnov(_v,27).ngClassUntouched;
    const currVal_8:any = i0.ɵnov(_v,27).ngClassTouched;
    const currVal_9:any = i0.ɵnov(_v,27).ngClassPristine;
    const currVal_10:any = i0.ɵnov(_v,27).ngClassDirty;
    const currVal_11:any = i0.ɵnov(_v,27).ngClassValid;
    const currVal_12:any = i0.ɵnov(_v,27).ngClassInvalid;
    const currVal_13:any = i0.ɵnov(_v,27).ngClassPending;
    _ck(_v,22,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13);
    const currVal_15:any = i0.ɵnov(_v,37).ngClassUntouched;
    const currVal_16:any = i0.ɵnov(_v,37).ngClassTouched;
    const currVal_17:any = i0.ɵnov(_v,37).ngClassPristine;
    const currVal_18:any = i0.ɵnov(_v,37).ngClassDirty;
    const currVal_19:any = i0.ɵnov(_v,37).ngClassValid;
    const currVal_20:any = i0.ɵnov(_v,37).ngClassInvalid;
    const currVal_21:any = i0.ɵnov(_v,37).ngClassPending;
    _ck(_v,32,0,currVal_15,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,
        currVal_21);
    const currVal_23:any = i0.ɵnov(_v,52).target;
    const currVal_24:any = i0.ɵnov(_v,52).href;
    _ck(_v,51,0,currVal_23,currVal_24);
  });
}
export function View_ClientLoginComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ng-component',
      ([] as any[]),(null as any),(null as any),(null as any),View_ClientLoginComponent_0,
      RenderType_ClientLoginComponent)),i0.ɵdid(49152,(null as any),0,i1.ClientLoginComponent,
      [i3.Router],(null as any),(null as any))],(null as any),(null as any));
}
export const ClientLoginComponentNgFactory:i0.ComponentFactory<i1.ClientLoginComponent> = i0.ɵccf('ng-component',
    i1.ClientLoginComponent,View_ClientLoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvVmlsbWFudGFzL0RvY3VtZW50cy9WaXN1YWwgU3R1ZGlvIDIwMTcvUHJvamVjdHMvQW5ndWxhcjJDb3JlVGVtcGxhdGUvc3JjL1RlbXBsYXRlLkNsaWVudC9DbGllbnRBcHAvYXBwL2NsaWVudC9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL1ZpbG1hbnRhcy9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL0FuZ3VsYXIyQ29yZVRlbXBsYXRlL3NyYy9UZW1wbGF0ZS5DbGllbnQvQ2xpZW50QXBwL2FwcC9jbGllbnQvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL1ZpbG1hbnRhcy9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL0FuZ3VsYXIyQ29yZVRlbXBsYXRlL3NyYy9UZW1wbGF0ZS5DbGllbnQvQ2xpZW50QXBwL2FwcC9jbGllbnQvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvVmlsbWFudGFzL0RvY3VtZW50cy9WaXN1YWwgU3R1ZGlvIDIwMTcvUHJvamVjdHMvQW5ndWxhcjJDb3JlVGVtcGxhdGUvc3JjL1RlbXBsYXRlLkNsaWVudC9DbGllbnRBcHAvYXBwL2NsaWVudC9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzLkNsaWVudExvZ2luQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImxvZ2luLXBhbmVsIGNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1tZC1wdXNoLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naW4gQ2xpZW50XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cImxvZ2luKGxvZ2luRm9ybS52YWx1ZSlcIiAjbG9naW5Gb3JtPVwibmdGb3JtXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IChuZ01vZGVsKT1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKG5nTW9kZWwpPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJsb2NrIGNlbnRlcmVkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWRlZmF1bHRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZGVmYXVsdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic21hbGxcIiBbcm91dGVyTGlua109XCJbJy9yZXNldC1wYXNzd29yZCddXCI+Rm9yZ290IHBhc3N3b3JkPyBDbGljayBoZXJlIHRvIHJlc2V0LjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUEsZ0JBQW1DLDJDQUMvQjtNQUFBO01BQUEsMERBQW9DO01BQUEsaUJBQ2hDO01BQUE7TUFBQSxnQkFBOEIsbURBQzFCO01BQUE7TUFBQSwwREFBMkI7TUFBQSx5QkFDdkI7TUFBQTtNQUFNO01BRUMsbURBQ0w7VUFBQSxxQkFDTjtVQUFBO1VBQUEsZ0JBQXdCLHVEQUNwQjtpQkFBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBTTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBTjtjQUFBLHVDQUFBO1VBQUEsa0RBQUE7VUFBQTthQUFBLDBFQUFBO1VBQUE7VUFBQSxlQUEyRTtNQUN2RTtVQUFBO01BQXdCLCtEQUNwQjtVQUFBO2NBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFPO2NBQUE7Y0FBQTtZQUFBO1lBQVA7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSxzQkFBQTthQUFBO1VBQUEsZUFBb0c7TUFDbEcsMkRBQ047VUFBQTtVQUFBLDBEQUF3QjtVQUFBLGlDQUNwQjtVQUFBO2NBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7a0JBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBTztjQUFBO2NBQUE7WUFBQTtZQUFQO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsc0JBQUE7YUFBQTtVQUFBLGVBQXdHO01BQ3RHLDJEQUNOO1VBQUE7VUFBQTtNQUErQywrREFDM0M7VUFBQTtjQUFBO1VBQUEsOEJBQXlFO01BQ3pFO1VBQUE7VUFBQSw4QkFBNEU7TUFDMUUsNkRBRU47VUFBQTtVQUFBLDRDQUFJO1VBQUEsNkJBQ0o7VUFBQTtVQUFBLDhCQUF5QjtNQUNyQjtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQWlCLElBQW1DO01BQXlDLDJEQUMzRjtVQUFBLHlCQUNIO01BQ0wsK0NBQ0o7VUFBQSxhQUNKO0lBakIwQztJQUE1QixZQUE0QixVQUE1QjtJQUc0QjtJQUE1QixZQUE0QixVQUE1QjtJQVNpQjtJQUFqQixZQUFpQixVQUFqQjs7SUFkUjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEscUVBQUE7SUFFUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEseUVBQUE7SUFHQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUE7UUFBQSxVQUFBO0lBU0E7SUFBQTtJQUFBLFlBQUEscUJBQUE7Ozs7b0JDdkJ4QjtNQUFBO3FDQUFBLFVBQUE7TUFBQTs7OyJ9
