import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddNewBoxComponent } from './add-new-box.component';

describe('AddNewBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AddNewBoxComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddNewBoxComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-add-new-box'`, () => {
    const fixture = TestBed.createComponent(AddNewBoxComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-add-new-box');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AddNewBoxComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-add-new-box app is running!');
  });
});
