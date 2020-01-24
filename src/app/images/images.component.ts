import { Component, OnInit } from '@angular/core';
import { ImageResponseService } from '../image-response.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  data:any;
  config: any;

  constructor(private service:ImageResponseService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 6
};
this.route.queryParamMap
        .map(params => params.get('page'))
        .subscribe(page => this.config.currentPage = page);
   }
   p: number = 1;
  ngOnInit() {
    this.service.getImages().subscribe(
      (res)=>{
        this.data = res;
        console.log(res);
      }
      );
  }
  pageChange(newPage: number) {
		this.router.navigate([''], { queryParams: { page: newPage } });
  }
}
