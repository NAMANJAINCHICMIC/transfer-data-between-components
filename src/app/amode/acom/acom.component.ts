import { Component } from '@angular/core';
import { FormGroup, FormControl , NgForm } from '@angular/forms';
import { arr } from 'src/app/array';

@Component({
  selector: 'app-acom',
  templateUrl: './acom.component.html',
  styleUrls: ['./acom.component.css']
})
export class AcomComponent {
profileForm = new FormGroup({
  userName : new FormControl(''),
  email : new FormControl('')
})
// arraydata:FormData[] =[];
login(val:any){
console.log(val)
// adata = this.profileForm.value;
arr.push(val);
console.log(arr);
}
// arraydata:formData[];
// ngOnInit(): void {
// }
// data(f:NgForm){
// this.arraydata.push(f.value);
// }
// adata = this.profileForm.value;
// adata = this.arraydata;
}
