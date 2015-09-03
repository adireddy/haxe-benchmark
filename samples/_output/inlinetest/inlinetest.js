(function (console) { "use strict";
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var inlinetest_Main = function() {
	this._runs = 1000;
	this._suite = new Benchmark.Suite();
	this._suite.add("Function Call",$bind(this,this.testWithoutInline));
	this._suite.add("Inline",$bind(this,this.testWithInline));
	this._suite.on("cycle",$bind(this,this._onCycle));
	this._suite.on("complete",$bind(this,this._onComplete));
	this._suite.run();
};
inlinetest_Main.__name__ = true;
inlinetest_Main.main = function() {
	new inlinetest_Main();
};
inlinetest_Main.prototype = {
	testWithoutInline: function() {
		var _g1 = 0;
		var _g = this._runs;
		while(_g1 < _g) {
			var i = _g1++;
			var a = this.test1(i);
		}
	}
	,testWithInline: function() {
		var _g1 = 0;
		var _g = this._runs;
		while(_g1 < _g) {
			var i = _g1++;
			var a = this._runs + i;
		}
	}
	,test1: function(i) {
		return this._runs + i;
	}
	,_onCycle: function(event) {
		console.log(event.target.name + " - Done.");
	}
	,_onComplete: function() {
		var fastest = Benchmark.filter(this._suite,"fastest");
		console.log("Fastest is " + Std.string(Benchmark.pluck(fastest,"name")));
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
inlinetest_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
