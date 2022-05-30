import { Component, HostListener } from "@angular/core";
import { GiphyService } from "./giphy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  query = "";
  title = "Ultra coding test";
  giphyData: any[];
  giphyDataResult: any;
  pageSize = 9;
  page: any;
  collectionSize: any;

  constructor(public giphyService: GiphyService) {}

  searchGiphy(event: any) {
    event.preventDefault();
    this.giphyService.search(this.query).subscribe((res: any) => {
      this.giphyData = res.data;
      this.giphyDataResult = this.giphyData;
      this.collectionSize = res.pagination.count;
    });
  }

  gty(page: any) {
    window.scrollTo(0, 0);
  }
}
