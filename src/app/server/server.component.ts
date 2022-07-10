// IF WE ARE BINDING AN OBJECT,USE NG

import { Component } from "@angular/core";
import { ServerService } from ".././server.service";

@Component({
  selector: "app-server",
  template: `
    <div>
      <h3>Employee List</h3>
      <ul *ngFor="let i of employee">
        <li>{{ i.id }}.{{ i.name }} - {{ i.age }}</li>
      </ul>
    </div>
  `,

  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  public employee: any[] = [];
  constructor(private _employeeService: ServerService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employee = data));
  }
}
