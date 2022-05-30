import { AppSettings } from "./app.config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GiphyService {
  giphyData: any;

  private giphyApiKey = AppSettings.giphyApiKey;
  private giphyUrl = AppSettings.giphyUrl;

  constructor(private _http: HttpClient) {}

  search(query: any) {
    return this._http.get(
      `${this.giphyUrl}?api_key=${this.giphyApiKey}&limit=50&offset=0&rating=G&lang=en&q=${query}`
    );
  }
}
