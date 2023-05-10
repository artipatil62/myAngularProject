import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorspracComponent } from './rxjs-operatorsprac.component';

describe('RxjsOperatorspracComponent', () => {
  let component: RxjsOperatorspracComponent;
  let fixture: ComponentFixture<RxjsOperatorspracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOperatorspracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOperatorspracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
