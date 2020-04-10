import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Apply = "Apply"
  constructor() { 
    
  }

  ngOnInit(): void {
    
    
  }
  apply(){
    this.Apply= "Applied"

    if(this.Apply =="Applied"){
      
    }
  }



}
