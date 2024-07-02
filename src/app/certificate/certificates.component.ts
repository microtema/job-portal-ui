import {Component} from '@angular/core';
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  standalone: true,
  imports: [
    MatTableModule,
  ]
})
export class CertificatesComponent {

}
