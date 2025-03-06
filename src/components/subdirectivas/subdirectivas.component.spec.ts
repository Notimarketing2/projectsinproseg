import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdirectivasComponent } from './subdirectivas.component';

describe('SubdirectivasComponent', () => {
  let component: SubdirectivasComponent;
  let fixture: ComponentFixture<SubdirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubdirectivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
