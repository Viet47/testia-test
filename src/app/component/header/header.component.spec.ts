import { MatToolbarModule } from '@angular/material/toolbar';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [MatToolbarModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  test('should create mat-toolbar', () => {
    expect(spectator.query('mat-toolbar').getAttribute('class')).toContain('header')

  });

  test('should create image', () => {
    expect(spectator.query('img').getAttribute('src')).toEqual("assets/logo.svg");
  });
});