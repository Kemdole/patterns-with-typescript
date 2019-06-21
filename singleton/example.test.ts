import store, { Store } from './example';

describe('Singleton', () => {
  test('should have only one instance', () => {
    const instant1 = Store.createStore<any>({});
    const instant2 = Store.createStore<any>({});
    expect(instant1).toStrictEqual(instant2);
  });
});
