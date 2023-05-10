import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipepracComponent } from './pipeprac.component';

describe('PipepracComponent', () => {
  let component: PipepracComponent;
  let fixture: ComponentFixture<PipepracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipepracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipepracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
