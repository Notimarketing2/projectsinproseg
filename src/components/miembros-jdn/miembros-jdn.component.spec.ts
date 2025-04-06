import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosJdnComponent } from './miembros-jdn.component';

describe('MiembrosJdnComponent', () => {
  let component: MiembrosJdnComponent;
  let fixture: ComponentFixture<MiembrosJdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiembrosJdnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembrosJdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
