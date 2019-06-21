class Store<T> {
  private static INSTANCE: Store<any>;
  private static state: any;

  private constructor(initState: T) {
    if (!Store.INSTANCE) {
      Store.INSTANCE = this;
      Store.state = initState || {};
    }
  }

  public static createStore<S>(initState: S): Store<S> {
    return new Store<S>(initState);
  }

  public getState(): T {
    return Store.state;
  }

  public setState<P>(payload: P): void {
    Store.state = { ...Store.state, ...payload };
  }
}

interface InitState {
  name: string;
}

export const initState: InitState = {
  name: 'alex'
};

export { Store };
export default Store.createStore<InitState>(initState);
