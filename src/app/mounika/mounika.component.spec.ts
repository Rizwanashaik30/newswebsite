import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounikaComponent } from './mounika.component';

describe('MounikaComponent', () => {
  let component: MounikaComponent;
  let fixture: ComponentFixture<MounikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MounikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MounikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
