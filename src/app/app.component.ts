import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular";
  private exportTime = { hour: 7, minute: 15, meriden: "PM", format: 12 };

  onChangeHour(event) {
    console.log("event", event);
  }
}
