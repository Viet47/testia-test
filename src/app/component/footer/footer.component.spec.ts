import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { FooterComponent } from './footer.component';
import {
  toHaveClass,
} from '@testing-library/jest-dom/matchers'
 
expect.extend({toHaveClass})

describe('FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createComponentFactory({
    component: FooterComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });
  test('should create', () => {
    expect(spectator.query('div').getAttribute('class')).toEqual('footer')
  });

  test('should have texte', () => {
    expect(spectator.query('.footer > p').textContent).toEqual('Lilian Copyright')
  });
});
