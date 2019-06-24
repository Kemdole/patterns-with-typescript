abstract class Creator {
  public abstract factoryMethod(type: string): Product;
}

interface Product {
  method(): string;
}

class Product1 implements Product {
  public method(): string {
    return 'method of product 1';
  }
}

class Product2 implements Product {
  public method(): string {
    return 'method of product 2';
  }
}

class CreateProduct extends Creator {
  public factoryMethod(type: string): Product {
    if (type === '1') return new Product1();
    if (type === '2') return new Product2();
    throw new Error('');
  }
}

export default CreateProduct;
