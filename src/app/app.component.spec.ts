import { AppComponent } from './app.component';
import { Spectator, createComponentFactory, MockComponentDeprecated } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './component/header/header.component';
import { MockComponent } from 'ng-mocks';
import { FooterComponent } from './component/footer/footer.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
    declarations: [
      MockComponent(HeaderComponent), 
      MockComponent(FooterComponent)
    ]

  });

  beforeEach(() => {
    spectator = createComponent();
  });

  test('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
});
