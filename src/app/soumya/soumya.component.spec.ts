import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumyaComponent } from './soumya.component';

describe('SoumyaComponent', () => {
  let component: SoumyaComponent;
  let fixture: ComponentFixture<SoumyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoumyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoumyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
