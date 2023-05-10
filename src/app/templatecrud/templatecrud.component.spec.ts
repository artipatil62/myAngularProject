import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecrudComponent } from './templatecrud.component';

describe('TemplatecrudComponent', () => {
  let component: TemplatecrudComponent;
  let fixture: ComponentFixture<TemplatecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatecrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
