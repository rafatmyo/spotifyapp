import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDcVe5Ywk51TxHr5jW39U31Kyg8QfluqLyVPOlIpVRB9iDU_D9lxR8IkHfZPO1dDEw2GmSJ0gd320RngC4'
    });

     this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
     .subscribe( data =>{
       console.log(data);
     });

   }
}
