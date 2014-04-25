

describe('ja', function() {
    
    it('toHiragana', function() {
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
        assert.equal('やnほ'.toHiragana(), 'やんほ');
        assert.equal('やnnほ'.toHiragana(), 'やんほ');
        assert.equal('やnnほn'.toHiragana(), 'やんほん');
        assert.equal('やnnほnn'.toHiragana(), 'やんほん');

        assert.equal('kyakyukyo'.toHiragana(), 'きゃきゅきょ');
        assert.equal('xtu'.toHiragana(), 'っ');


        assert.equal('hello, world!'.toHiragana(), 'へllo, をrld!');
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

        assert.equal('hello, world!'.toKatakana(), 'ヘllo, ヲrld!');
    });

    it('toDakuten', function() {
        // TODO: 
    });

    it('isDakuten', function() {
        // 
        assert.equal('あいうえお'.isDakuten(), false);
        assert.equal('かきくけこ'.isDakuten(), false);
        assert.equal('がぎぐげご'.isDakuten(), true);
        assert.equal('かぎぐげご'.isDakuten(), false);

        assert.equal('ガギグゲゴ'.isDakuten(), true);
        assert.equal('gagigugego'.isDakuten(), true);
    });

    it('hasDakuten', function() {
        // 
        assert.equal('あいうえお'.hasDakuten(), false);
        assert.equal('かきくけこ'.hasDakuten(), false);
        assert.equal('がぎぐげご'.hasDakuten(), true);
        assert.equal('かぎぐげご'.hasDakuten(), true);

        assert.equal('ガギグゲゴ'.hasDakuten(), true);
        assert.equal('gagigugego'.hasDakuten(), true);
    });


    it('toHandakuten', function() {
        // 
        assert.equal('はひふへほ'.toHandakuten(), 'ぱぴぷぺぽ');
        assert.equal('はひふぺほ'.toHandakuten(), 'ぱぴぷぺぽ');
        assert.equal('ぱ'.toHandakuten(), 'ぱ');
        assert.equal('かぎぐげご'.toHandakuten(), 'かぎぐげご');
        assert.equal('papipupepo'.toHandakuten(), 'papipupepo');
        assert.equal('haruhu'.toHandakuten(), 'parupu');
    });

    it('isHandakuten', function() {
        // 
        assert.equal('はひふへほ'.isHandakuten(), false);
        assert.equal('はひふぺほ'.isHandakuten(), false);
        assert.equal('ぱ'.isHandakuten(), true);
        assert.equal('かぎぐげご'.isHandakuten(), false);
        assert.equal('papipupepo'.isHandakuten(), true);
        assert.equal('papiko'.isHandakuten(), false);
    });

    it('hasHandakuten', function() {
        // 
        assert.equal('はひふへほ'.hasHandakuten(), false);
        assert.equal('はひふぺほ'.hasHandakuten(), true);
        assert.equal('ぱ'.hasHandakuten(), true);
        assert.equal('かぎぐげご'.hasHandakuten(), false);
        assert.equal('papipupepo'.hasHandakuten(), true);
        assert.equal('papiko'.hasHandakuten(), true);
    });
});
