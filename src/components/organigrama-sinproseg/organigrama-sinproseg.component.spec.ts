import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramaSinprosegComponent } from './organigrama-sinproseg.component';

describe('OrganigramaSinprosegComponent', () => {
  let component: OrganigramaSinprosegComponent;
  let fixture: ComponentFixture<OrganigramaSinprosegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigramaSinprosegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganigramaSinprosegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
