import { Component, OnInit } from '@angular/core';
import {recpie} from '../../Shares/Models/recpie.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
recpies:recpie[]=[
    new recpie('دستور پخت ماکارانی','دستور پخت تست برای ماکارانی','http://media.jamejamonline.ir/Media/Image/1394/06/10/635766990327000778.jpg'),
    new recpie('دستور پخت ماکارانی','دستور پخت تست برای ماکارانی','http://media.jamejamonline.ir/Media/Image/1394/06/10/635766990327000778.jpg'),
    new recpie('دستور پخت ماکارانی','دستور پخت تست برای ماکارانی','http://media.jamejamonline.ir/Media/Image/1394/06/10/635766990327000778.jpg'),
];
  constructor() { }

  ngOnInit() {
  }

}
