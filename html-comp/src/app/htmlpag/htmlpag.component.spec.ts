import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlpagComponent } from './htmlpag.component';

describe('HtmlpagComponent', () => {
  let component: HtmlpagComponent;
  let fixture: ComponentFixture<HtmlpagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlpagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
