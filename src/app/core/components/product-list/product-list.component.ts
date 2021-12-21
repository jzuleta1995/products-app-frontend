import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@core/models/product';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  productList: Array<Product> = [];
  displayedColumns: string[] = ['Name', 'Price', 'Quantity', 'Description', 'Created At', 'User'];
  dataSource = new MatTableDataSource<Product>(this.productList);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.productList = data.products;
      console.log(this.productList)
    }, error => {
      console.log(error);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  getImage(srcImg: string) {
    this.productService.getImage(srcImg).subscribe(data => {
      this.createImgFromBlob(data);
    });
  }

  private createImgFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      return reader.result;
    }, false);

    if(image){
      reader.readAsDataURL(image);
    }
  }

}
