

describe('ja', function() {
    
    it('toHiragana', function() {
        assert.equal('ワヲン'.toHiragana(), 'わをん');
        assert.equal('wawonnn'.toHiragana(), 'わをんん');
        return ;

        // 
        assert.equal('アイウエオ'.toHiragana(), 'あいうえお');
        assert.equal('カキクケコ'.toHiragana(), 'かきくけこ');
        assert.equal('サシスセソ'.toHiragana(), 'さしすせそ');
        assert.equal('タチツテト'.toHiragana(), 'たちつてと');
        assert.equal('ナニヌネノ'.toHiragana(), 'なにぬねの');
        assert.equal('ハヒフヘホ'.toHiragana(), 'はひふへほ');
        assert.equal('マミムメモ'.toHiragana(), 'まみむめも');
        assert.equal('ヤユヨ'.toHiragana(), 'やゆよ');
        assert.equal('ラリルレロ'.toHiragana(), 'らりるれろ');
        assert.equal('ワヲン'.toHiragana(), 'わをん');

        // 
        assert.equal('aiueo'.toHiragana(), 'あいうえお');
        assert.equal('kakikukeko'.toHiragana(), 'かきくけこ');
        assert.equal('sasisuseso'.toHiragana(), 'さしすせそ');
        assert.equal('tatituteto'.toHiragana(), 'たちつてと');
        assert.equal('naninuneno'.toHiragana(), 'なにぬねの');
        assert.equal('hahihuheho'.toHiragana(), 'はひふへほ');
        assert.equal('mamimumemo'.toHiragana(), 'まみむめも');
        assert.equal('yayuyo'.toHiragana(), 'やゆよ');
        assert.equal('rarirurero'.toHiragana(), 'らりるれろ');
        assert.equal('wawonnn'.toHiragana(), 'わをんん');

        assert.equal('hello, world!'.toHiragana(), 'へllお, をrld!');
    });
    
    it('toKatakana', function() {
        // 
        assert.equal('あいうえお'.toKatakana(), 'アイウエオ');
        assert.equal('かきくけこ'.toKatakana(), 'カキクケコ');
        assert.equal('さしすせそ'.toKatakana(), 'サシスセソ');
        assert.equal('たちつてと'.toKatakana(), 'タチツテト');
        assert.equal('なにぬねの'.toKatakana(), 'ナニヌネノ');
        assert.equal('はひふへほ'.toKatakana(), 'ハヒフヘホ');
        assert.equal('まみむめも'.toKatakana(), 'マミムメモ');

        assert.equal('やゆよ'.toKatakana(), 'ヤユヨ');
        assert.equal('らりるれろ'.toKatakana(), 'ラリルレロ');
        assert.equal('わをん'.toKatakana(), 'ワヲン');

        // 
        assert.equal('aiueo'.toKatakana(), 'アイウエオ');
        assert.equal('kakikukeko'.toKatakana(), 'カキクケコ');
        assert.equal('sasisuseso'.toKatakana(), 'サシスセソ');
        assert.equal('tatituteto'.toKatakana(), 'タチツテト');
        assert.equal('naninuneno'.toKatakana(), 'ナニヌネノ');
        assert.equal('hahihuheho'.toKatakana(), 'ハヒフヘホ');
        assert.equal('mamimumemo'.toKatakana(), 'マミムメモ');

        assert.equal('yayuyo'.toKatakana(), 'ヤユヨ');
        assert.equal('rarirurero'.toKatakana(), 'ラリルレロ');
        assert.equal('wawonnn'.toKatakana(), 'ワヲンン');

        assert.equal('hello, world!'.toKatakana(), 'ヘllオ, ヲrld!');
    });

    it('isDakuten', function() {
        return ;
        // 
        assert.equal('あいうえお'.isDakuten(), false);
        assert.equal('かきくけこ'.isDakuten(), false);
        assert.equal('がぎぐげご'.isDakuten(), true);
        assert.equal('かぎぐげご'.isDakuten(), false);

        assert.equal('ガギグゲゴ'.isDakuten(), true);
        assert.equal('gagigugego'.isDakuten(), true);
    });
});
