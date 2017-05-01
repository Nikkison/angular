import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCompComponent } from './music-comp.component';

describe('MusicCompComponent', () => {
  let component: MusicCompComponent;
  let fixture: ComponentFixture<MusicCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
