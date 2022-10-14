import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRequestComponent } from './basic-request.component';

describe('BasicRequestComponent', () => {
  let component: BasicRequestComponent;
  let fixture: ComponentFixture<BasicRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
