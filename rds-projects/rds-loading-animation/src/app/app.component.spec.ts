import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdsLoadingAnimationComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RdsLoadingAnimationComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RdsLoadingAnimationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-loading-animation'`, () => {
    const fixture = TestBed.createComponent(RdsLoadingAnimationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-loading-animation');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RdsLoadingAnimationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-loading-animation app is running!');
  });
});
