import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemPopupComponent } from './update-item-popup.component';

describe('UpdateItemPopupComponent', () => {
  let component: UpdateItemPopupComponent;
  let fixture: ComponentFixture<UpdateItemPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateItemPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
