import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class NewsService {
  apiKey = "db4a26f7436548e2ae55a7883d2c7a06";
  url;
  constructor(public http: Http) {
    console.log("API CALLED");
    this.url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db4a26f7436548e2ae55a7883d2c7a06";
  }
  getNews() {
    return this.http.get(this.url).map(res => res.json());
  }
}
