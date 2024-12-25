import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: string[] = ['Own Hoouse', 'Rented'];
  units: string[] = ['1', '2'];
  firstFormGroup!: FormGroup;
  directorFormGroup!: FormGroup;
  financialGroup!: FormGroup;
  performancemGroup!: FormGroup;
  documentFormGroup!: FormGroup;
  finalForm!: FormGroup;
  url: string = '';
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      property_Name: ['', Validators.required],
      property_Type: ['0', Validators.required],
      number_of_Units: ['0', Validators.required],
      property_Address: ['', Validators.required],
      binaryData: [''],
      contentType: [''],
      fileType: ['']
    });
    this.directorFormGroup = this._formBuilder.group({
      name: ['']
    });
    this.financialGroup = this._formBuilder.group({
      name: ['']
    });
    this.performancemGroup = this._formBuilder.group({
      name: ['']
    });
    this.documentFormGroup = this._formBuilder.group({
      name: ['']
    });
    this.finalForm = this._formBuilder.group({
      BrowwerInfo: this.firstFormGroup,
      DirectorInfo: this.directorFormGroup,
      FinancialInfo: this.financialGroup,
      PerformanceInfo: this.performancemGroup,
      DocumentInfo: this.documentFormGroup
    });
  }

  onSelectFile(event: any) {
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  finalSubmit() {
    if (this.finalForm.valid) {
      console.log(this.finalForm.value)
    }
  }
}
