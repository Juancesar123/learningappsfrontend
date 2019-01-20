import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsubkategoriComponent } from './contentsubkategori.component';

describe('ContentsubkategoriComponent', () => {
  let component: ContentsubkategoriComponent;
  let fixture: ComponentFixture<ContentsubkategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsubkategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsubkategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
