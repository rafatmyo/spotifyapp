import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
    nuevasCanciones: any[] = [];
    loading: boolean;
    error = false;
    errorMesage: string;
    
    constructor (private spotify: SpotifyService) {
        this.loading = true;
        this.error = false;

        this.spotify.getNewReleases()
        .subscribe( (data:any) => {
            this.nuevasCanciones = data;
            this.loading = false;
        }, (errorService)=>{
            this.error = true;
            this.loading = false;
            this.errorMesage = errorService.error.error.message;
        });
    }
}
