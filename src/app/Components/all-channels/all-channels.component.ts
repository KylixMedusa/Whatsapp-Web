import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-channels',
  templateUrl: './all-channels.component.html',
  styleUrls: ['./all-channels.component.scss']
})
export class AllChannelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openmenu(event){
    var node = document.getElementById('menu');
    var top  = event.srcElement.parentElement.parentElement.parentElement.parentElement.offsetTop + 60;
    node.style.top = String(top)+"px";
    node.style.left = "calc(100% - 40px)";
    node.style.width = "max-content";
    node.style.height = "max-content";
    node.style.opacity = '1';
  }
}
