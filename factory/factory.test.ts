import CreateProduct from './factory';
const factory = new CreateProduct();

describe('Factory', () => {
  test('should return the two products', () => {
    const product1 = factory.factoryMethod('1');
    const product2 = factory.factoryMethod('2');
    expect(typeof product1.method()).toBe('string');
    expect(typeof product2.method()).toBe('string');
  });
});
