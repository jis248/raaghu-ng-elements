import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RdsListGroupComponent } from './RdsListGroup.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RdsListGroupComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RdsListGroupComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rds-list-group'`, () => {
    const fixture = TestBed.createComponent(RdsListGroupComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rds-list-group');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RdsListGroupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rds-list-group app is running!');
  });
});
