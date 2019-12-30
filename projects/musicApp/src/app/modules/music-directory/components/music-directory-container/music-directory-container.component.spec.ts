import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDirectoryContainerComponent } from './music-directory-container.component';

describe('MusicDirectoryContainerComponent', () => {
  let component: MusicDirectoryContainerComponent;
  let fixture: ComponentFixture<MusicDirectoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDirectoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDirectoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
