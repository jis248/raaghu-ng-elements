import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdsBadgesComponent } from './RdsBadges.component';

describe('RdsBadgesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RdsBadgesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RdsBadgesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-badges'`, () => {
    const fixture = TestBed.createComponent(RdsBadgesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-badges');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RdsBadgesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-badges app is running!');
  });
});
