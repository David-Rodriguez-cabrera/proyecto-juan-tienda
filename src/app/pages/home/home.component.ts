import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models';
import { FirestoreService } from 'src/app/service/firestore.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private path = 'Productos/';
  productos:Producto[]=[];
  
  constructor(public firestoreService : FirestoreService) { this.leerProductos()}

  ngOnInit() {}
leerProductos(){
  this.firestoreService.getCollection<Producto>(this.path).subscribe(res => {
    console.log(res);
    this.productos=res;
  });
}
}
