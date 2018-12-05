import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductComponentComponent } from './update-product-component.component';

describe('UpdateProductComponentComponent', () => {
  let component: UpdateProductComponentComponent;
  let fixture: ComponentFixture<UpdateProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
