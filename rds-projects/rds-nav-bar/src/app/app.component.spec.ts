import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdsNavbarComponent } from './RdsNavbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RdsNavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RdsNavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-nav-bar'`, () => {
    const fixture = TestBed.createComponent(RdsNavbarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-nav-bar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RdsNavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-nav-bar app is running!');
  });
});
