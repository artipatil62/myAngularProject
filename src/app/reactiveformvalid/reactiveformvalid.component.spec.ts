import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformvalidComponent } from './reactiveformvalid.component';

describe('ReactiveformvalidComponent', () => {
  let component: ReactiveformvalidComponent;
  let fixture: ComponentFixture<ReactiveformvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformvalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
