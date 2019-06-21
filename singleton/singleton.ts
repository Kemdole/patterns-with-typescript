class Singleton {
  private static instace: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instace) {
      Singleton.instace = new Singleton();
    }
    return Singleton.instace;
  }
}

export default Singleton;
