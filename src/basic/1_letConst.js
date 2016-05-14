// 変数宣言のletとconstについてを学ぶ
xdescribe('letとconst', () => {
  it('let', () => {
    // letで宣言
    // TODO
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      // TODO
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  });

  it('const', () => {
    // constで宣言
    // TODO
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      // TODO
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  // 再代入の動作を確認
  // hoge = 'hoga';
  });

  it('ifとfor', () => {
    const hoge = 'hoge';
    if (true) {
      const hoge = 'fuga';
      expect(hoge).toBe(/* TODO */);
    }

    expect(hoge).toBe('hoge');

    let i = 100;
    for (let i = 0; i < 1; i++) {
      expect(i).toEqual(/* TODO */);
    }
    expect(i).toEqual(/* TODO */);
  });
});
