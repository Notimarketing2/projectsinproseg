import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopserparComponent } from './coopserpar.component';

describe('CoopserparComponent', () => {
  let component: CoopserparComponent;
  let fixture: ComponentFixture<CoopserparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoopserparComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopserparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
