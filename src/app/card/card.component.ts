import { Component } from '@angular/core';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];
  data:any;
  constructor(private api:ServiceService) { }



  ngOnInit(): void {

    this.api.getimage().subscribe(res => {
      this.data = res;
    })
  
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.ngOnInit();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }




  
}

