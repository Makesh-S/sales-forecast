import { Router } from '@angular/router';
import { Component, OnInit,VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  [x: string]: any;
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
constructor(private router:Router ) {
   
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    // send(){alert("Uploaded");
    // }
    send=  () => {
      this.router.navigateByUrl('/csv');
  }
    logout=  () => {
      this.router.navigateByUrl('/user');
    }
}
