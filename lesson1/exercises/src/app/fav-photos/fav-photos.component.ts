import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Pics';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.naturesbestphotography.com/galleries/images/15wsr/84_DomenicoRoscigno.jpg';
  image3 = 'https://i.ytimg.com/vi/FcRJVh6_yGs/maxresdefault.jpg';

  constructor() { }

  ngOnInit() {
  }

}
