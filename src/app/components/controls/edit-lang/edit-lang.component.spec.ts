/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditLangComponent } from './edit-lang.component';

describe('EditLangComponent', () => {
  let component: EditLangComponent;
  let fixture: ComponentFixture<EditLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
