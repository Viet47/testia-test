import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports:[ RouterTestingModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
});
