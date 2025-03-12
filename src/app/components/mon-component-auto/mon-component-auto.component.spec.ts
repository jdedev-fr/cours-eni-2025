import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComponentAutoComponent } from './mon-component-auto.component';

describe('MonComponentAutoComponent', () => {
  let component: MonComponentAutoComponent;
  let fixture: ComponentFixture<MonComponentAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComponentAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonComponentAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
