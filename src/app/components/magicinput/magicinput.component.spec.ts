import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicinputComponent } from './magicinput.component';

describe('MagicinputComponent', () => {
  let component: MagicinputComponent;
  let fixture: ComponentFixture<MagicinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
