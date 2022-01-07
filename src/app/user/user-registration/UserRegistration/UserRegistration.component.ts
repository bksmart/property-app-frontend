import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-UserRegistration',
  templateUrl: './UserRegistration.component.html',
  styleUrls: ['./UserRegistration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  user: User;
  formSubmitted:boolean;

  constructor(private fb:FormBuilder,private userService:UserService,private alertify:AlertifyService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup(
    //   {
    //     userName:new FormControl(null,Validators.required),
    //     email: new FormControl(null,[Validators.required,Validators.email]),
    //     password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword: new FormControl(null,[Validators.required]),
    //     mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    //   },this.passwordFieldsValidator);

    this.createRegistrationForm();
  }

  passwordFieldsValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  createRegistrationForm()
  {
    this.registrationForm=this.fb.group({
      userName:[null,Validators.required],
      email :[null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required]],
      mobile: [null,[Validators.required,Validators.maxLength(10)]],
    },{validators:this.passwordFieldsValidator})
  }

  userData() : User{
    return this.user={
      userName: this.userName.value,
      email:this.email.value,
      mobile:this.mobile.value,
      password:this.password.value
    }
  }

  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email()
  {
    return this.registrationForm.get('email') as FormControl;
  }

  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword()
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit()
  {
    this.formSubmitted=true;

    if(this.registrationForm.valid)
    {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.formSubmitted=false;
      this.alertify.success('You are registered successfully!')
    }
    else
    {
      this.alertify.error('Please check your inputs!')
    }

  }

  onReset() {
    this.formSubmitted = false;
    this.registrationForm.reset();
}

}

