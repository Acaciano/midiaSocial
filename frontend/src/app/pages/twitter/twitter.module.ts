import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterComponent } from './twitter.component';

import { TitleComponent } from '@shared/components/title/title.component';
import { ButtonLabelComponent } from '@shared/components/button-label/button-label.component';
import { TextareaComponent } from '@shared/components/textarea/textarea.component';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { LabelTwitterComponent } from '@shared/components/label-twitter/label-twitter.component';
import { ParametrosService } from 'src/app/core/services/parametros.service';
import { ApiService } from 'src/app/core/services/api.service';
import { TwitterService } from 'src/app/core/services/twitter.service';

@NgModule({
  declarations: [
    TwitterComponent,
    TitleComponent,
    ButtonLabelComponent,
    TextareaComponent,
    CheckboxComponent,
    LabelTwitterComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    ParametrosService,
    TwitterService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TwitterModule { }
