import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gistService: GifsService) {

  }

  get tags(): string[]{
    return this.gistService.tagsHistory;
  }

  searchTag( tag: string ){
    this.gistService.searchTag(tag);
  }
}
