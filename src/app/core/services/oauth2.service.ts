import 'rxjs/add/operator/map';
import {Inject, Injectable} from '@angular/core';
import { StorageService } from "./storage.service";
import { ConfigService } from "./config.service";
//import {AuthHelper} from './auth.helper';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CoreModule} from './../core.module';


//@Injectable()
@Injectable(
 )
export class OAuth2Service  {

  //constructor(private http: HttpClient/*, @Inject('api.config') private apiConfig: ApiConfig*/){
   constructor(private storage: StorageService, private config: ConfigService, private http: HttpClient) {/**/


	console.log("OAuth2Service_constructor_called");
  }
  public initialize() {
  }
}