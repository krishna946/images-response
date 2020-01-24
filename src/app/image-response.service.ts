import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageResponseService {

  constructor(private http:HttpClient) { }
  imageURL1 = 'https://picsum.photos/v2/list?page=1';
  imageURL2 = 'https://picsum.photos/v2/list?page=2';
  imageURL3 = 'https://picsum.photos/v2/list?page=3'; 
  /**
   * getImages
   */
  public getImages() {
   return this.http.get(forkJoin[this.imageURL1]);
  }
}
