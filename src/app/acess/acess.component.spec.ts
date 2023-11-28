import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessComponent } from './acess.component';

describe('AcessComponent', () => {
  let component: AcessComponent;
  let fixture: ComponentFixture<AcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessComponent]
    });
    fixture = TestBed.createComponent(AcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
