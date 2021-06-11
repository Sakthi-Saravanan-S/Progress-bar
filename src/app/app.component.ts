import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  progressPercent: number = 0;
  progressForm: FormGroup;
  showFormError: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.progressForm = this._formBuilder.group({
      progress: new FormControl('', [Validators.required, Validators.max(100)]),
    });
  }
  allowOnlyNumbers(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onSubmit(): void {
    if (this.progressForm.valid) {
      this.showFormError = false;
      this.progressPercent = this.progressForm.getRawValue().progress;
    } else {
      this.showFormError = true;
    }
  }

  get bar() {
    return this.progressForm.get('progress');
  }
}
