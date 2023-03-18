/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditHardComponent } from './edit-hard.component';

describe('EditHardComponent', () => {
  let component: EditHardComponent;
  let fixture: ComponentFixture<EditHardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
