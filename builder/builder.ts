interface UserBuilder {
  setName(s: string): void;
  setAge(n: number): void;
  setGender(s: string): void;
}

class BandBuilder implements UserBuilder {
  private role!: string;
  private name!: string;
  private age!: number;
  private gender!: string;

  constructor(role: string) {
    this.role = role;
  }

  get Role(): string {
    return this.role;
  }

  public setName(name: string): BandBuilder {
    this.name = name;
    return this;
  }
  get Name(): string {
    return this.name;
  }

  public setAge(age: number): BandBuilder {
    this.age = age;
    return this;
  }
  get Age(): number {
    return this.age;
  }

  public setGender(gender: string): BandBuilder {
    this.gender = gender;
    return this;
  }
  get Gender(): string {
    return this.gender;
  }

  public build(): User {
    if (!this.name) throw new Error('no name');
    return new User(this);
  }
}

class User {
  private role!: string;
  private name!: string;
  private age!: number;
  private gender!: string;

  constructor(builder: BandBuilder) {
    this.role = builder.Role;
    this.name = builder.Name;
    this.age = builder.Age;
    this.gender = builder.Gender;
  }
}

export default BandBuilder;
