import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaribeComponent } from './caribe.component';

describe('CaribeComponent', () => {
  let component: CaribeComponent;
  let fixture: ComponentFixture<CaribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
