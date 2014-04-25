/*
 *
 */


;(function() {

	var defineMemberMothod = function(obj, name, fn) {
		Object.defineProperty(obj.prototype, name, {
			value: fn,
			enumerable: false,
		})
	};

	defineMemberMothod(String, "toKanaArray", function() {
		var arr = [];

		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];

			if (/[a-zA-Z]/.test(ch) === true) {
				if (ch == 'n') {
					var n = this[i+1];
					if (n && /[aiueon]/.test(n) === true) {
						ch += this[++i];
					}
				}
				else if (/[aiueo]/.test(ch) === false) {
					ch += this[++i];
				}
			}
			arr.push(ch);
		}

		return arr;
	});

	defineMemberMothod(String, "toHiragana", function() {

		var hiragana = '';

		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (/[a-zA-Z]/.test(ch) == true) {
				if (ch == 'n') {
					var n = this[i+1];
					if (n == undefined) {
						hiragana += 'ん';
						continue ;
					}
					else {
						ch += this[++i];
					}
				}
				else if (/[aiueo]/.test(ch) == false) {
					ch += this[++i];
				}
			}

			if (ja.TO_HIRAGANA[ch]) {
				hiragana += ja.TO_HIRAGANA[ch];
			}
			else {
				hiragana += ch;
			}
		}

		return hiragana;
	});

	defineMemberMothod(String, "toKatakana", function() {
		var katakana = '';

		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (/[a-zA-Z]/.test(ch) == true) {
				if (ch == 'n') {
					var n = this[i+1];
					if (n == undefined) {
						katakana += 'ン';
						continue ;
					}
					else {
						ch += this[++i];
					}
				}
				else if (/[aiueo]/.test(ch) == false) {
					ch += this[++i];
				}
			}

			if (ja.TO_KATAKANA[ch]) {
				katakana += ja.TO_KATAKANA[ch];
			}
			else {
				katakana += ch;
			}
		}

		return katakana;
	});

	defineMemberMothod(String, "isDakuten", function() {
		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (/[a-zA-Z]/.test(ch) == true) {

			}
			if (ja.DAKUTEN[ch] === undefined) return false;
		}

		return true;
	});
	defineMemberMothod(String, "hasDakuten", function() {
		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (ja.DAKUTEN[ch] !== undefined) return true;
		}

		return false;
	});


	defineMemberMothod(String, "isHandakuten", function() {
		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (ja.HANDAKUTEN[ch] === undefined) return false;
		}

		return true;
	});
	defineMemberMothod(String, "hasHandakuten", function() {
		for (var i=0,len=this.length; i<len; ++i) {
			var ch = this[i];
			if (ja.HANDAKUTEN[ch] !== undefined) return true;
		}

		return false;
	});



	// TODO
	/*
	toDakuten
	toHandakuten
	
	isKatakana
	isHiragana
	isRoman

	*/


})();
