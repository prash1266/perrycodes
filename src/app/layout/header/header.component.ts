import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() toggleState: boolean = false;
  @Output() toggler = new EventEmitter<boolean>();

  fireEvent() {
    this.toggleState = !this.toggleState;
    this.toggler.emit(this.toggleState);
  }

}
