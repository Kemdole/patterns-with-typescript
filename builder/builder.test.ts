import BandBuilder from './builder';

describe('Builder', () => {
  test('should create expected user instance', () => {
    const member = new BandBuilder('member')
      .setName('Alex')
      .setAge(22)
      .setGender('M')
      .build();
    expect(member).toEqual({
      role: 'member',
      name: 'Alex',
      gender: 'M',
      age: 22
    });
  });
  test('should throw error if there is no name', () => {
    expect(() =>
      new BandBuilder('singer')
        .setAge(22)
        .setGender('M')
        .build()
    ).toThrow(Error);
  });
});
