import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reciever',
  standalone: true,
  imports: [],
  templateUrl: './reciever.component.html',
  styleUrl: './reciever.component.scss'
})
export class RecieverComponent {
 @Input() message?: string;
}
