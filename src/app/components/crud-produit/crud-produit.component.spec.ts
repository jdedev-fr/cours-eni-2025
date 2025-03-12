import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProduitComponent } from './crud-produit.component';

describe('CrudProduitComponent', () => {
  let component: CrudProduitComponent;
  let fixture: ComponentFixture<CrudProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
