package benchmark;

@:native("Benchmark.Suite")
extern class Suite {

	function new(?name:String, ?options:Dynamic):Void;

	function add(name:String, fn:Void -> Void, ?options:Dynamic):Void;

	@:overload(function(type:String, listener:Void -> Void):Void {})
	function on(type:String, listener:Dynamic -> Void):Void;

	function run(?options:Dynamic):Void;
}