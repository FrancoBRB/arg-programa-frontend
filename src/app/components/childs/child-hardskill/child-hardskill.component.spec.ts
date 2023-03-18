/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildHardskillComponent } from './child-hardskill.component';

describe('ChildHardskillComponent', () => {
  let component: ChildHardskillComponent;
  let fixture: ComponentFixture<ChildHardskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildHardskillComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
