import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';
import { byText, createComponentFactory, Spectator } from '@ngneat/spectator';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {

  let spectator: Spectator<DashboardComponent>;
  const createComponent = createComponentFactory({
    component: DashboardComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  test('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  test('should create canvas', () => {
    expect(spectator.query('canvas')).toBeTruthy();
  });

  test('should create three button', () => {
    expect(spectator.queryAll('button').length).toEqual(3);
  });


  test('enable draw', async ()=>{
    expect(spectator.component.enableDrawLine).toBeFalsy();
    spectator.click(byText('Dessiner'));
    expect(spectator.component.enableDrawLine).toBeTruthy();
    expect(spectator.queryAll('button')[1].getAttribute('class')).toEqual("active_draw");
  });

  test('test zoomer button', async ()=>{
    expect(spectator.component.enableZoom).toBeFalsy();

    spectator.click(byText('Zoomer'));
    expect(spectator.component.enableZoom).toBeTruthy();
    expect(spectator.queryAll('button')[2].textContent).toEqual("Dézoomer");

    spectator.click(byText('Dézoomer'));
    expect(spectator.component.enableZoom).toBeFalsy();
    expect(spectator.queryAll('button')[2].textContent).toEqual("Zoomer");

  });
});
