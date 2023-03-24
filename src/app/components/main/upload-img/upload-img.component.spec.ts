import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIMGComponent } from './upload-img.component';

describe('UploadIMGComponent', () => {
  let component: UploadIMGComponent;
  let fixture: ComponentFixture<UploadIMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadIMGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadIMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
