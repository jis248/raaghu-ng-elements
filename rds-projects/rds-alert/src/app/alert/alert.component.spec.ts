import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlertComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-alert'`, () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-alert');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-alert app is running!');
  });
});
