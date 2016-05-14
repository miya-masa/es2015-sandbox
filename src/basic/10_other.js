xdescribe('その他のAPIとかシンタックスとか', () => {
  it('Map', () => {
    // Mapの宣言
    const map = new Map();
    // キーをオブジェクトで宣言
    const key = {};

    map.set('hoge', 'hoge');
    map.set(1, 1);
    map.set(key, 'object key');

    expect(map.get('hoge')).toEqual('hoge');
    expect(map.get(1)).toEqual(1);
    expect(map.get('1')).toBeUndefined();
    expect(map.get({})).toBeUndefined();
    expect(map.get(key)).toEqual('object key');

    // Mapの走査
    // TODO for of を使ったMAPの走査をしてコンソールに出力してみる
  });

  it('Set', () => {
    // Setの宣言
    const set = new Set();
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);
    expect(set.size).toEqual(5);
  });

  it('Proxy', () => {
    const target = {
      name: 'Yamada Taro'
    };

    const proxy = new Proxy(target, {
      get(target, property, receiver) {
        return target[property];
      }
    });

    const name = proxy.name;
    expect(name).toEqual('Yamada Taro');
  });

  it('Object assign', () => {
    const target = {
      name: 'abc'
    };
    const greeting = {
      greeting: 'Hello'
    };
    // targetにマージする
    // TODO object assign を使ってtargetにgreetingをマージする
    expect(target.name).toEqual('abc');
    expect(target.greeting).toEqual('Hello');
  });

  it('Objectシンタックス', () => {
    const name = 'Yamada';
    const obj = {
      // TODO オブジェクトのkey値省略方法で記述してみよう
    };

    expect(obj.getName()).toEqual('Yamada');
    expect(obj.name).toEqual('Yamada');
  });
});
