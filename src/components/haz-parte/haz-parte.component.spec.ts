import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazParteComponent } from './haz-parte.component';

describe('HazParteComponent', () => {
  let component: HazParteComponent;
  let fixture: ComponentFixture<HazParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HazParteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
