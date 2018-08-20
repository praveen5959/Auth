import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { NewsService } from "../news.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  news1: any;
  url: any;
  constructor(private user: UserService, private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      console.log(news);

      for (var i = 0; i < 20; i++) {
        var data = news.articles[i].title;
        var url = news.articles[i].url;
        console.log(data);
        this.news1 = data;
        this.url = url;
      }
    });
  }
}
