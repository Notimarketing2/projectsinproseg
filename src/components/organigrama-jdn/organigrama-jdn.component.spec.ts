import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramaJdnComponent } from './organigrama-jdn.component';

describe('OrganigramaJdnComponent', () => {
  let component: OrganigramaJdnComponent;
  let fixture: ComponentFixture<OrganigramaJdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigramaJdnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganigramaJdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
