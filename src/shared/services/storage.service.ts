const isBrowser = 
typeof window !== "undefined";


export const storageService = {

  get<T>(key:string):T | null {

    if(!isBrowser)
      return null;

    const value = localStorage.getItem(key);

    return value 
      ? JSON.parse(value)
      : null;
  },


  set<T>(
    key:string,
    value:T
  ):void {

    if(!isBrowser)
      return;

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  },


  remove(key:string):void {

    if(!isBrowser)
      return;

    localStorage.removeItem(key);
  },


  clear():void {

    if(!isBrowser)
      return;

    localStorage.clear();
  }

};