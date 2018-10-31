import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpieListComponent } from './recpie-list.component';

describe('RecpieListComponent', () => {
  let component: RecpieListComponent;
  let fixture: ComponentFixture<RecpieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecpieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
