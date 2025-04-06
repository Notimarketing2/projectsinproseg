import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrinoquiaComponent } from './orinoquia.component';

describe('OrinoquiaComponent', () => {
  let component: OrinoquiaComponent;
  let fixture: ComponentFixture<OrinoquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrinoquiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrinoquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
