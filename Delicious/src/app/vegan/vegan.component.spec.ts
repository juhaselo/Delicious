/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeganComponent } from './vegan.component';

describe('VeganComponent', () => {
  let component: VeganComponent;
  let fixture: ComponentFixture<VeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
