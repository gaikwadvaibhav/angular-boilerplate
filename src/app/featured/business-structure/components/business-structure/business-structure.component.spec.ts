import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStructureComponent } from './business-structure.component';

describe('BusinessStructureComponent', () => {
  let component: BusinessStructureComponent;
  let fixture: ComponentFixture<BusinessStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
