package inlinetest;

import benchmark.Benchmark;
import benchmark.Suite;

class Main {

	var _suite:Suite;
	var _runs:Int = 1000;

	public function new() {
		_suite = new Suite();
		_suite.add("Function Call", testWithoutInline);
		_suite.add("Inline", testWithInline);

		_suite.on("cycle", _onCycle);
		_suite.on("complete", _onComplete);
		_suite.run();
	}

	function testWithoutInline() {
		for (i in 0 ... _runs) {
			var a = test1(i);
		}
	}

	function testWithInline() {
		for (i in 0 ... _runs) {
			var a = test2(i);
		}
	}

	// Normal function
	function test1(i) {
		return _runs + i;
	}

	// Inline function
	inline function test2(i) {
		return _runs + i;
	}

	function _onCycle(event) {
		trace(event.target.name + " - Done.");
	}

	function _onComplete() {
		var fastest = Benchmark.filter(_suite, "fastest");
		trace("Fastest is " + Benchmark.pluck(fastest, "name"));
	}

	static function main() {
		new Main();
	}
}