/*
 *
 */


;(function() {

    ja.ROMAN = [
        'a' ,'i' ,'u' ,'e' ,'o' ,
        'ka','ki','ku','ke','ko',
        'sa','si','su','se','so',
        'ta','ti','tu','te','to',
        'na','ni','nu','ne','no',
        'ha','hi','hu','he','ho',
        'ma','mi','mu','me','mo',
        'ya','yi','yu','ye','yo',
        'ra','ri','ru','re','ro',
        'wa','wyi','wu','wye','wo',
        'nn',
        
        // dakuten
        'ga','gi','gu','ge','go',
        'za','zi','zu','ze','zo',
        'da','di','du','de','do',
        'ba','bi','bu','be','bo',
        
        // handakuten
        'pa','pi','pu','pe','po',

        'n',

        // 3char
        'kya', 'kyu', 'kyo',

        // 
        'xtu', 'xtsu',
    ];

    // ひらがな
    // 参考(http://c4se.hatenablog.com/entry/20100330/1269906760)
    ja.HIRAGANA = [
        'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や', '？', 'ゆ', '？','よ',
        'ら', 'り', 'る', 'れ', 'ろ',
        'わ', 'ゐ', '？', 'ゑ', 'を',
        'ん',
        // dakuten
        'が', 'ぎ', 'ぐ', 'げ', 'ご',
        'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
        'だ', 'ぢ', 'づ', 'ぜ', 'ぞ',
        'ば', 'び', 'ぶ', 'べ', 'ぼ',
        // handakuten
        'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',

        'ん',

        // 3char
        'きゃ', 'きゅ', 'きょ',

        // 
        'っ', 'っ',
    ];

    ja.KATAKANA = [
        'ア','イ','ウ','エ','オ' ,
        'カ','キ','ク','ケ','コ',
        'サ','シ','ス','セ','ソ',
        'タ','チ','ツ','テ','ト',
        'ナ','ニ','ヌ','ネ','ノ',
        'ハ','ヒ','フ','ヘ','ホ',
        'マ','ミ','ム','メ','モ',
        'ヤ','？','ユ','？','ヨ',
        'ラ','リ','ル','レ','ロ',
        'ワ','？','？','？','ヲ',
        'ン',

        // dakuten
        'ガ','ギ','グ','ゲ','ゴ',
        'ザ','ジ','ズ','ゼ','ゾ',
        'ダ','ヂ','ヅ','デ','ド',
        'バ','ビ','ブ','ベ','ボ',

        // handakuten
        'パ','ピ','プ','ペ','ポ',

        'ン',

        // 3char
        'キャ', 'キュ', 'キョ',

        // 
        'ッ', 'ッ',
    ];

    ja.DAKUTEN = [
        'ga','gi','gu','ge','go',
        'za','zi','zu','ze','zo',
        'da','di','du','de','do',
        'ba','bi','bu','be','bo',

        'が', 'ぎ', 'ぐ', 'げ', 'ご',
        'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
        'だ', 'ぢ', 'づ', 'ぜ', 'ぞ',
        'ば', 'び', 'ぶ', 'べ', 'ぼ',

        'ガ','ギ','グ','ゲ','ゴ',
        'ザ','ジ','ズ','ゼ','ゾ',
        'ダ','ヂ','ヅ','デ','ド',
        'バ','ビ','ブ','ベ','ボ',
    ];

    ja.HANDAKUTEN = [
        'pa','pi','pu','pe','po',
        'ぱ','ぴ','ぷ','ぺ','ぽ',
        'パ','ピ','プ','ペ','ポ',
    ];

    // to hiragana
    ja.TO_HIRAGANA = (function() {
        var map = {};

        ja.ROMAN.forEach(function(ch, i) {
            map[ch] = ja.HIRAGANA[i];
        });

        ja.KATAKANA.forEach(function(ch, i) {
            map[ch] = ja.HIRAGANA[i];
        });

        return map;
    })();

    // to katakana
    ja.TO_KATAKANA = (function() {
        var map = {};

        ja.ROMAN.forEach(function(ch, i) {
            map[ch] = ja.KATAKANA[i];
        });

        ja.HIRAGANA.forEach(function(ch, i) {
            map[ch] = ja.KATAKANA[i];
        });

        return map;
    })();

    ja.TO_HANDAKUTEN = {
        ha: 'pa',
        hi: 'pi',
        hu: 'pu',
        he: 'pe',
        ho: 'po',

        は: 'ぱ',
        ひ: 'ぴ',
        ふ: 'ぷ',
        へ: 'ぺ',
        ほ: 'ぽ',

        ハ: 'パ',
        ヒ: 'ピ',
        フ: 'プ',
        ヘ: 'ペ',
        ホ: 'ポ',
    };

})();

