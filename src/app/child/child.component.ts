import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  hide: boolean = false;
  @Input("parentText") parentTextBoxValue: String;
  @Input() parentClick: Subject<void>;
  @Output("ontextFromChild") passToParent: EventEmitter<String> =
    new EventEmitter<String>();
  clickCount = 0;
  email: String;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.passToParent.emit(this.email);
  }
}
