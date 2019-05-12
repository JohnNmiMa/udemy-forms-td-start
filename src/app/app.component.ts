import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;
    defaultQuestion = 'pet';
    answer = '';
    genders = ['male', 'female'];
    user = {
        username: '',
        email: '',
        secretQuestion: '',
        answer: '',
        gender: ''
    };
    submitted = false;

    suggestUserName() {
        const suggestedName = 'Superuser';
        // You can use setValue() on the form to set all of the values in the form
        // with a single call.
/*        this.signupForm.setValue({
            userData: {
                username: suggestedName,
                email: ''
            },
            secret: 'pet',
            questionAnswer: '', gender: 'male'
        });*/

        // So, rather than overriding all of the control values in the form, you
        // can change only a one or a few values in the form, or, 'patch' the form.
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
    }

    // This onSubmit example uses the ngForm from the #f local reference passed
    // into the onSubmit method
/*    onSubmit(form: NgForm) {
        // The form object has a lot of information about the form.
        // We can really understand the state of the form.
        // There are the controls (from the names)
        console.log(form);
        console.log(form.value.username);
        console.log(form.value.email);
        console.log(form.value.secret);
    }*/

    // This onSubmit example uses the @ViewChild of the #f local reference
    // Accessing the form through the @ViewChild is very useful if you want to
    // access the form at times other than submission of the form, before the form
    // is submitted.
    onSubmit() {
        console.log(this.signupForm);
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;
        this.submitted = true;

        this.signupForm.reset();
    }
}
