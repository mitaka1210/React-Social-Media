import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from '../Status/ProfileStatus';

//? Казваме кои компонент ще искам да тестваме втзои случай това е ProfileStatus
describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='Dimitar Dimitrov' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('Dimitar Dimitrov');
  });
});

//TODO: TEST 2

describe('ProfileStatus component', () => {
  test('after creation span should be display with status TEXT', () => {
    const component = create(<ProfileStatus status='Dimitar Dimitrov' />);
    const instance = component.root;
    const span = instance.findByType(span);

    expect(span.length).toBe(span);
  });
});
