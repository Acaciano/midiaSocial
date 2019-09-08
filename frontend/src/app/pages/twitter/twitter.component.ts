import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/core/services/parametros.service';
import { TwitterService } from 'src/app/core/services/twitter.service';
import { TwitterResult } from 'src/app/core/models/twitterResult';
import { Parametros } from 'src/app/core/models/parametros';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  public terms = '';
  public checkbox = true;
  public twitter: TwitterResult;
  public parametros: Parametros;

  constructor(private api: ParametrosService,
              private twitterService: TwitterService) {
    this.api.get().subscribe(data => {
      this.parametros = data[0];

      if (this.parametros) {
        this.checkbox = this.parametros.ouvirTweets;
        this.parametros.termoDeBusca.forEach((element, i) => {
          if (i + 1 < this.parametros.termoDeBusca.length ){
            this.terms += element + ' ,';
          } else {
            this.terms += element + '';
          }
        });
      }
    });

    this.twitterService.get().subscribe(data => {
      this.twitter = data[0];
    });
  }

  ngOnInit() {
  }

  public save(): void {
    const arrayTerms = this.terms.split(',');
    this.parametros.ouvirTweets = this.checkbox;
    this.parametros.termoDeBusca = arrayTerms;

    /*this.api.put(this.parametros).subscribe(data => {
      console.log('Sucesso ao atualizar');
    }, error => {
      console.log('Erro ao atualizar');
    });*/
  }
}
