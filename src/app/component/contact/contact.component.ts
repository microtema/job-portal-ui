import {Component, Input} from '@angular/core';
import {ContactData} from "../../job/model/job";
import {JsonPipe} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true,
  imports: [
    JsonPipe,
    MatList,
    MatListItem,
    MatDivider,
    MatIcon
  ]
})
export class ContactComponent {

  @Input() data?: ContactData
}
