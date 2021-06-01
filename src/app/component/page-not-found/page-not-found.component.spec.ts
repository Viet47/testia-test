import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<PageNotFoundComponent>;
  const createComponent = createComponentFactory({
    component: PageNotFoundComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });
 
  test('should create', () => {
    expect(spectator.query('p').textContent).toEqual('404 - PAGE NOT FOUD');
  });
});
