/* eslint arrow-parens: "off" */
xdescribe('アロー関数などの関数シンタックス', () => {
  it('引数無しアロー関数', () => {

    // const func =  TODO  arrow関数で記述する
    expect(func()).toBe('Hello World');
  });

  it('引数ありアロー関数', () => {
    // const one = TODO  arrow関数で記述する
    expect(one('Taro')).toBe('Hello Taro');

    // const two = TODO  arrow関数で記述する
    expect(two('Taro', 'Yamada')).toBe('Hello Taro Yamada');
  });

  it('複数行アロー関数', () => {
    // const two = TODO arrow関数で記述する
    expect(two('Taro', 'Yamada')).toBe('GoodEvening Taro Yamada');
  });

  it('アロー関数のコンテキスト', () => {
    // arrow関数のthisを返す関数
    const func = () => {
      return this;
    };
    // 従来の関数定義のthisを返す関数
    const func2 = function() {
      return this;
    };

    const context = {
      // arrow関数の場合のコンテキストチェック
      func,
      // 従来の関数定義のコンテキストチェック
      func2,
      // 直接定義
      func3: () => this,
      // ES6関数定義
      func4() {
        return this;
      }
    };

    // 処理系によってコンテキストが異なることを確認する
    expect(context.func()).toEqual(/* TODO */);
    expect(context.func2()).toEqual(/* TODO */);
    expect(context.func3()).toEqual(/* TODO */);
    expect(context.func4()).toEqual(/* TODO */);
  });

  it('可変長引数', () => {
    const func = (one, two, ...args) => {
      expect(one).toEqual(/* TODO */);
      expect(two).toEqual(/* TODO */);
      expect(args).toEqual(/* TODO */);
      expect(...args).toEqual(/* TODO */);
    };

    func(1, 2, 3, 4, 5, 'Hello World');
  });

  it('デフォルト引数', () => {
    // nameのデフォルト値はYamada
    // const func = // TODO arrow関数で記述する
    expect(func()).toEqual('Hello Yamada');
    expect(func('Taro')).toEqual('Hello Taro');
  });
});
