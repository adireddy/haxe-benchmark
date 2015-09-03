package benchmark;

@:native("Benchmark")
extern class Benchmark {

	static function filter(array:Dynamic, ?callback:Dynamic, ?thisArg:Dynamic):Dynamic;

	static function pluck(array:Dynamic, property:String):Dynamic;
}