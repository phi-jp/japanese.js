/*
 *
 */


;(function() {

	var defineMemberMothod = function(obj, name, fn) {
		Object.defineProperty(obj.prototype, name, {
			value: fn,
			enumerable: false,
		});
	};

	defineMemberMothod(String, "toKanaArray", function() {
		var arr = [];

		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];

			if (/[a-zA-Z]/.test(ch) === true && /[aiueo]/.test(ch) === false) {
				for (var j=i+1; j<len; ++j) {
					var ch2 = this[j];

					if (/[a-zA-Z]/.test(ch2) === false) {
						break;
					}

					ch += ch2;
					++i;

					if (/[aiueo]/.test(ch2) === true || ch == 'nn') {
						break;
					}
				}
			}

			arr.push(ch);
		}

		return arr;
	});

	defineMemberMothod(String, "toHiragana", function() {
		return this.toKanaArray().map(function(ch) {
			return ja.TO_HIRAGANA[ch] || ch;
		}).join('');
	});

	defineMemberMothod(String, "toKatakana", function() {
		return this.toKanaArray().map(function(ch) {
			return ja.TO_KATAKANA[ch] || ch;
		}).join('');
	});

	defineMemberMothod(String, "toDakuten", function() {
		// TODO:
		console.assert(false, 'do not defined');
	});

	defineMemberMothod(String, "isDakuten", function() {
		return this.toKanaArray().every(function(ch) {
			return ja.DAKUTEN.indexOf(ch) != -1;
		});
	});

	defineMemberMothod(String, "hasDakuten", function() {
		return this.toKanaArray().some(function(ch) {
			return ja.DAKUTEN.indexOf(ch) != -1;
		});
	});

	defineMemberMothod(String, "toHandakuten", function() {
		return this.toKanaArray().map(function(ch) {
			return ja.TO_HANDAKUTEN[ch] || ch;
		}).join('');
	});

	defineMemberMothod(String, "isHandakuten", function() {
		return this.toKanaArray().every(function(ch) {
			return ja.HANDAKUTEN.indexOf(ch) != -1;
		});
	});

	defineMemberMothod(String, "hasHandakuten", function() {
		return this.toKanaArray().some(function(ch) {
			return ja.HANDAKUTEN.indexOf(ch) != -1;
		});
	});


	// TODO
	/*
	isKatakana
	isHiragana
	isRoman
	*/


})();
