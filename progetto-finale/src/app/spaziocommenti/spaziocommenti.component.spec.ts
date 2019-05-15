import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaziocommentiComponent } from './spaziocommenti.component';

describe('SpaziocommentiComponent', () => {
  let component: SpaziocommentiComponent;
  let fixture: ComponentFixture<SpaziocommentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaziocommentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaziocommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
