
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;
				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolveResult = function (resultDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		resultDecoder,
		function (result) {
			return A2(
				_elm_lang$core$Json_Decode$customDecoder,
				_elm_lang$core$Json_Decode$succeed(
					{ctor: '_Tuple0'}),
				function (_p0) {
					return result;
				});
		});
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = F2(
	function (delegated, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			decoder,
			function (wrappedFn) {
				return A2(_elm_lang$core$Json_Decode$map, wrappedFn, delegated);
			});
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = F2(
	function (val, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			decoder,
			function (wrappedFn) {
				return A2(
					_elm_lang$core$Json_Decode$map,
					wrappedFn,
					_elm_lang$core$Json_Decode$succeed(val));
			});
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				return A2(_elm_lang$core$Json_Decode$decodeValue, valDecoder, _p1._0);
			} else {
				return _elm_lang$core$Result$Ok(fallback);
			}
		};
		return A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$value, handleResult);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode_ops[':='], key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode_ops[':='], key, valDecoder),
			decoder);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$dict_extra$Dict_Extra$keepOnly = F2(
	function (set, dict) {
		return A3(
			_elm_lang$core$Set$foldl,
			F2(
				function (k, acc) {
					return A2(
						_elm_lang$core$Maybe$withDefault,
						acc,
						A2(
							_elm_lang$core$Maybe$map,
							function (v) {
								return A3(_elm_lang$core$Dict$insert, k, v, acc);
							},
							A2(_elm_lang$core$Dict$get, k, dict)));
				}),
			_elm_lang$core$Dict$empty,
			set);
	});
var _elm_community$dict_extra$Dict_Extra$removeMany = F2(
	function (set, dict) {
		return A3(_elm_lang$core$Set$foldl, _elm_lang$core$Dict$remove, dict, set);
	});
var _elm_community$dict_extra$Dict_Extra$removeWhen = F2(
	function (pred, dict) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (c, v) {
					return _elm_lang$core$Basics$not(
						A2(pred, c, v));
				}),
			dict);
	});
var _elm_community$dict_extra$Dict_Extra$groupBy = F2(
	function (keyfn, list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, acc) {
					var key = keyfn(x);
					return A3(
						_elm_lang$core$Dict$update,
						key,
						function (_p0) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Maybe$withDefault,
									_elm_lang$core$Native_List.fromArray(
										[x]),
									A2(
										_elm_lang$core$Maybe$map,
										F2(
											function (x, y) {
												return A2(_elm_lang$core$List_ops['::'], x, y);
											})(x),
										_p0)));
						},
						acc);
				}),
			_elm_lang$core$Dict$empty,
			list);
	});

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('unable to parse \'' + str + '\' as a date')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[i - 1],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$dom$Native_Dom = function() {

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

return {
	onDocument: F3(on(document)),
	onWindow: F3(on(window))
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: undefined };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};

			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			var data = patch.data;

			// end inserts
			var endInserts = data.endInserts;
			var end;
			if (typeof endInserts !== 'undefined')
			{
				if (endInserts.length === 1)
				{
					var insert = endInserts[0];
					var entry = insert.entry;
					var end = entry.tag === 'move'
						? entry.data
						: render(entry.vnode, patch.eventNode);
				}
				else
				{
					end = document.createDocumentFragment();
					for (var i = 0; i < endInserts.length; i++)
					{
						var insert = endInserts[i];
						var entry = insert.entry;
						var node = entry.tag === 'move'
							? entry.data
							: render(entry.vnode, patch.eventNode);
						end.appendChild(node);
					}
				}
			}

			// removals
			domNode = applyPatchesHelp(domNode, data.patches);

			// inserts
			var inserts = data.inserts;
			for (var i = 0; i < inserts.length; i++)
			{
				var insert = inserts[i];
				var entry = insert.entry;
				var node = entry.tag === 'move'
					? entry.data
					: render(entry.vnode, patch.eventNode);
				domNode.insertBefore(node, domNode.childNodes[insert.index]);
			}

			if (typeof end !== 'undefined')
			{
				domNode.appendChild(end);
			}

			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$navigation$Native_Navigation = function() {

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


return {
	go: go,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
	return _elm_lang$core$Process$spawn(
		A3(
			_elm_lang$dom$Dom_LowLevel$onWindow,
			'popstate',
			_elm_lang$core$Json_Decode$value,
			function (_p0) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			task1,
			function (_p1) {
				return task2;
			});
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p2) {
			var _p3 = _p2;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p3._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p4 = cmd;
		switch (_p4.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p4._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$pushState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
			default:
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$replaceState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
		}
	});
var _elm_lang$navigation$Navigation$updateHelp = F2(
	function (func, _p5) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: _p6._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, func, _p6._1)
		};
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, process: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p7) {
		var _p8 = _p7;
		var _p10 = _p8.process;
		var stepState = function () {
			var _p9 = {ctor: '_Tuple2', _0: subs, _1: _p10};
			_v4_2:
			do {
				if (_p9._0.ctor === '[]') {
					if (_p9._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$core$Process$kill(_p9._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v4_2;
					}
				} else {
					if (_p9._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$navigation$Navigation$spawnPopState(router),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(pid)));
							});
					} else {
						break _v4_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p10));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
var _elm_lang$navigation$Navigation$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$navigation$Navigation$Change = function (a) {
	return {ctor: 'Change', _0: a};
};
var _elm_lang$navigation$Navigation$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_lang$navigation$Navigation$makeParser = _elm_lang$navigation$Navigation$Parser;
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p11, myCmd) {
		var _p12 = myCmd;
		switch (_p12.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p12._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p12._0);
			default:
				return _elm_lang$navigation$Navigation$Modify(_p12._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (_p13, stuff) {
		var _p14 = _p13;
		var _p16 = _p14._0;
		var location = _elm_lang$navigation$Native_Navigation.getLocation(
			{ctor: '_Tuple0'});
		var init = function (flags) {
			return A2(
				_elm_lang$navigation$Navigation$updateHelp,
				_elm_lang$navigation$Navigation$UserMsg,
				A2(
					stuff.init,
					flags,
					_p16(location)));
		};
		var view = function (model) {
			return A2(
				_elm_lang$html$Html_App$map,
				_elm_lang$navigation$Navigation$UserMsg,
				stuff.view(model));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(_elm_lang$navigation$Navigation$Change)),
						A2(
						_elm_lang$core$Platform_Sub$map,
						_elm_lang$navigation$Navigation$UserMsg,
						stuff.subscriptions(model))
					]));
		};
		var update = F2(
			function (msg, model) {
				return A2(
					_elm_lang$navigation$Navigation$updateHelp,
					_elm_lang$navigation$Navigation$UserMsg,
					function () {
						var _p15 = msg;
						if (_p15.ctor === 'Change') {
							return A2(
								stuff.urlUpdate,
								_p16(_p15._0),
								model);
						} else {
							return A2(stuff.update, _p15._0, model);
						}
					}());
			});
		return _elm_lang$html$Html_App$programWithFlags(
			{init: init, view: view, update: update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$program = F2(
	function (parser, stuff) {
		return A2(
			_elm_lang$navigation$Navigation$programWithFlags,
			parser,
			_elm_lang$core$Native_Utils.update(
				stuff,
				{
					init: function (_p17) {
						return stuff.init;
					}
				}));
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p18) {
		var _p19 = _p18;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p20) {
				return func(
					_p19._0(_p20));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

//import Dict, List, Maybe, Native.Scheduler //

var _evancz$elm_http$Native_Http = function() {

function send(settings, request)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var req = new XMLHttpRequest();

		// start
		if (settings.onStart.ctor === 'Just')
		{
			req.addEventListener('loadStart', function() {
				var task = settings.onStart._0;
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// progress
		if (settings.onProgress.ctor === 'Just')
		{
			req.addEventListener('progress', function(event) {
				var progress = !event.lengthComputable
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({
						loaded: event.loaded,
						total: event.total
					});
				var task = settings.onProgress._0(progress);
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// end
		req.addEventListener('error', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawNetworkError' }));
		});

		req.addEventListener('timeout', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawTimeout' }));
		});

		req.addEventListener('load', function() {
			return callback(_elm_lang$core$Native_Scheduler.succeed(toResponse(req)));
		});

		req.open(request.verb, request.url, true);

		// set all the headers
		function setHeader(pair) {
			req.setRequestHeader(pair._0, pair._1);
		}
		A2(_elm_lang$core$List$map, setHeader, request.headers);

		// set the timeout
		req.timeout = settings.timeout;

		// enable this withCredentials thing
		req.withCredentials = settings.withCredentials;

		// ask for a specific MIME type for the response
		if (settings.desiredResponseType.ctor === 'Just')
		{
			req.overrideMimeType(settings.desiredResponseType._0);
		}

		// actuall send the request
		if(request.body.ctor === "BodyFormData")
		{
			req.send(request.body.formData)
		}
		else
		{
			req.send(request.body._0);
		}

		return function() {
			req.abort();
		};
	});
}


// deal with responses

function toResponse(req)
{
	var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
	var response = tag === 'Blob' ? req.response : req.responseText;
	return {
		status: req.status,
		statusText: req.statusText,
		headers: parseHeaders(req.getAllResponseHeaders()),
		url: req.responseURL,
		value: { ctor: tag, _0: response }
	};
}


function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


function multipart(dataList)
{
	var formData = new FormData();

	while (dataList.ctor !== '[]')
	{
		var data = dataList._0;
		if (data.ctor === 'StringData')
		{
			formData.append(data._0, data._1);
		}
		else
		{
			var fileName = data._1.ctor === 'Nothing'
				? undefined
				: data._1._0;
			formData.append(data._0, data._2, fileName);
		}
		dataList = dataList._1;
	}

	return { ctor: 'BodyFormData', formData: formData };
}


function uriEncode(string)
{
	return encodeURIComponent(string);
}

function uriDecode(string)
{
	return decodeURIComponent(string);
}

return {
	send: F2(send),
	multipart: multipart,
	uriEncode: uriEncode,
	uriDecode: uriDecode
};

}();

var _evancz$elm_http$Http$send = _evancz$elm_http$Native_Http.send;
var _evancz$elm_http$Http$defaultSettings = {timeout: 0, onStart: _elm_lang$core$Maybe$Nothing, onProgress: _elm_lang$core$Maybe$Nothing, desiredResponseType: _elm_lang$core$Maybe$Nothing, withCredentials: false};
var _evancz$elm_http$Http$multipart = _evancz$elm_http$Native_Http.multipart;
var _evancz$elm_http$Http$uriDecode = _evancz$elm_http$Native_Http.uriDecode;
var _evancz$elm_http$Http$uriEncode = _evancz$elm_http$Native_Http.uriEncode;
var _evancz$elm_http$Http$queryEscape = function (string) {
	return A2(
		_elm_lang$core$String$join,
		'+',
		A2(
			_elm_lang$core$String$split,
			'%20',
			_evancz$elm_http$Http$uriEncode(string)));
};
var _evancz$elm_http$Http$queryPair = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_evancz$elm_http$Http$queryEscape(_p1._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_evancz$elm_http$Http$queryEscape(_p1._1)));
};
var _evancz$elm_http$Http$url = F2(
	function (baseUrl, args) {
		var _p2 = args;
		if (_p2.ctor === '[]') {
			return baseUrl;
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'?',
					A2(
						_elm_lang$core$String$join,
						'&',
						A2(_elm_lang$core$List$map, _evancz$elm_http$Http$queryPair, args))));
		}
	});
var _evancz$elm_http$Http$Request = F4(
	function (a, b, c, d) {
		return {verb: a, headers: b, url: c, body: d};
	});
var _evancz$elm_http$Http$Settings = F5(
	function (a, b, c, d, e) {
		return {timeout: a, onStart: b, onProgress: c, desiredResponseType: d, withCredentials: e};
	});
var _evancz$elm_http$Http$Response = F5(
	function (a, b, c, d, e) {
		return {status: a, statusText: b, headers: c, url: d, value: e};
	});
var _evancz$elm_http$Http$TODO_implement_blob_in_another_library = {ctor: 'TODO_implement_blob_in_another_library'};
var _evancz$elm_http$Http$TODO_implement_file_in_another_library = {ctor: 'TODO_implement_file_in_another_library'};
var _evancz$elm_http$Http$BodyBlob = function (a) {
	return {ctor: 'BodyBlob', _0: a};
};
var _evancz$elm_http$Http$BodyFormData = {ctor: 'BodyFormData'};
var _evancz$elm_http$Http$ArrayBuffer = {ctor: 'ArrayBuffer'};
var _evancz$elm_http$Http$BodyString = function (a) {
	return {ctor: 'BodyString', _0: a};
};
var _evancz$elm_http$Http$string = _evancz$elm_http$Http$BodyString;
var _evancz$elm_http$Http$Empty = {ctor: 'Empty'};
var _evancz$elm_http$Http$empty = _evancz$elm_http$Http$Empty;
var _evancz$elm_http$Http$FileData = F3(
	function (a, b, c) {
		return {ctor: 'FileData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$BlobData = F3(
	function (a, b, c) {
		return {ctor: 'BlobData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$blobData = _evancz$elm_http$Http$BlobData;
var _evancz$elm_http$Http$StringData = F2(
	function (a, b) {
		return {ctor: 'StringData', _0: a, _1: b};
	});
var _evancz$elm_http$Http$stringData = _evancz$elm_http$Http$StringData;
var _evancz$elm_http$Http$Blob = function (a) {
	return {ctor: 'Blob', _0: a};
};
var _evancz$elm_http$Http$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _evancz$elm_http$Http$RawNetworkError = {ctor: 'RawNetworkError'};
var _evancz$elm_http$Http$RawTimeout = {ctor: 'RawTimeout'};
var _evancz$elm_http$Http$BadResponse = F2(
	function (a, b) {
		return {ctor: 'BadResponse', _0: a, _1: b};
	});
var _evancz$elm_http$Http$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _evancz$elm_http$Http$handleResponse = F2(
	function (handle, response) {
		if ((_elm_lang$core$Native_Utils.cmp(200, response.status) < 1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) {
			var _p3 = response.value;
			if (_p3.ctor === 'Text') {
				return handle(_p3._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload('Response body is a blob, expecting a string.'));
			}
		} else {
			return _elm_lang$core$Task$fail(
				A2(_evancz$elm_http$Http$BadResponse, response.status, response.statusText));
		}
	});
var _evancz$elm_http$Http$NetworkError = {ctor: 'NetworkError'};
var _evancz$elm_http$Http$Timeout = {ctor: 'Timeout'};
var _evancz$elm_http$Http$promoteError = function (rawError) {
	var _p4 = rawError;
	if (_p4.ctor === 'RawTimeout') {
		return _evancz$elm_http$Http$Timeout;
	} else {
		return _evancz$elm_http$Http$NetworkError;
	}
};
var _evancz$elm_http$Http$getString = function (url) {
	var request = {
		verb: 'GET',
		headers: _elm_lang$core$Native_List.fromArray(
			[]),
		url: url,
		body: _evancz$elm_http$Http$empty
	};
	return A2(
		_elm_lang$core$Task$andThen,
		A2(
			_elm_lang$core$Task$mapError,
			_evancz$elm_http$Http$promoteError,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request)),
		_evancz$elm_http$Http$handleResponse(_elm_lang$core$Task$succeed));
};
var _evancz$elm_http$Http$fromJson = F2(
	function (decoder, response) {
		var decode = function (str) {
			var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
			if (_p5.ctor === 'Ok') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload(_p5._0));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			A2(_elm_lang$core$Task$mapError, _evancz$elm_http$Http$promoteError, response),
			_evancz$elm_http$Http$handleResponse(decode));
	});
var _evancz$elm_http$Http$get = F2(
	function (decoder, url) {
		var request = {
			verb: 'GET',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: _evancz$elm_http$Http$empty
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});
var _evancz$elm_http$Http$post = F3(
	function (decoder, url, body) {
		var request = {
			verb: 'POST',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: body
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});

var _evancz$url_parser$UrlParser$oneOfHelp = F3(
	function (choices, chunks, formatter) {
		oneOfHelp:
		while (true) {
			var _p0 = choices;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Result$Err('Tried many parsers, but none of them worked!');
			} else {
				var _p1 = A2(_p0._0._0, chunks, formatter);
				if (_p1.ctor === 'Err') {
					var _v2 = _p0._1,
						_v3 = chunks,
						_v4 = formatter;
					choices = _v2;
					chunks = _v3;
					formatter = _v4;
					continue oneOfHelp;
				} else {
					return _elm_lang$core$Result$Ok(_p1._0);
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Chunks = F2(
	function (a, b) {
		return {seen: a, rest: b};
	});
var _evancz$url_parser$UrlParser$parse = F3(
	function (input, _p2, url) {
		var _p3 = _p2;
		var _p4 = A2(
			_p3._0,
			A2(
				_evancz$url_parser$UrlParser$Chunks,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(_elm_lang$core$String$split, '/', url)),
			input);
		if (_p4.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p4._0);
		} else {
			var _p7 = _p4._0._1;
			var _p6 = _p4._0._0.rest;
			var _p5 = _p6;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Result$Ok(_p7);
			} else {
				if ((_p5._0 === '') && (_p5._1.ctor === '[]')) {
					return _elm_lang$core$Result$Ok(_p7);
				} else {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'The parser worked, but /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$String$join, '/', _p6),
								' was left over.')));
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		F2(
			function (_p8, result) {
				var _p9 = _p8;
				var _p12 = _p9.rest;
				var _p10 = _p12;
				if (_p10.ctor === '[]') {
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', str));
				} else {
					var _p11 = _p10._0;
					return _elm_lang$core$Native_Utils.eq(_p11, str) ? _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: A2(
								_evancz$url_parser$UrlParser$Chunks,
								A2(_elm_lang$core$List_ops['::'], _p11, _p9.seen),
								_p10._1),
							_1: result
						}) : _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Wanted /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								str,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' but got /',
									A2(_elm_lang$core$String$join, '/', _p12)))));
				}
			}));
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (_p13, func) {
					var _p14 = _p13;
					var _p15 = _p14.rest;
					if (_p15.ctor === '[]') {
						return _elm_lang$core$Result$Err(
							A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', tipe));
					} else {
						var _p17 = _p15._0;
						var _p16 = stringToSomething(_p17);
						if (_p16.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								{
									ctor: '_Tuple2',
									_0: A2(
										_evancz$url_parser$UrlParser$Chunks,
										A2(_elm_lang$core$List_ops['::'], _p17, _p14.seen),
										_p15._1),
									_1: func(_p16._0)
								});
						} else {
							return _elm_lang$core$Result$Err(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Parsing `',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p17,
										A2(_elm_lang$core$Basics_ops['++'], '` went wrong: ', _p16._0))));
						}
					}
				}));
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					return A2(
						_elm_lang$core$Result$andThen,
						A2(_p20._0, chunks, func),
						function (_p22) {
							var _p23 = _p22;
							return A2(_p21._0, _p23._0, _p23._1);
						});
				}));
	});
var _evancz$url_parser$UrlParser$oneOf = function (choices) {
	return _evancz$url_parser$UrlParser$Parser(
		_evancz$url_parser$UrlParser$oneOfHelp(choices));
};
var _evancz$url_parser$UrlParser$format = F2(
	function (input, _p24) {
		var _p25 = _p24;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					var _p26 = A2(_p25._0, chunks, input);
					if (_p26.ctor === 'Err') {
						return _elm_lang$core$Result$Err(_p26._0);
					} else {
						return _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: _p26._0._0,
								_1: func(_p26._0._1)
							});
					}
				}));
	});

// Code borrowed shamelessly from https://github.com/w0rm/elm-flatris

var _fredcy$localstorage$Native_LocalStorage = function()
{
    function storageAvailable(type) {
	try {
	    var storage = window[type],
		x = '__storage_test__';
	    storage.setItem(x, x);
	    storage.removeItem(x);
	    return true;
	}
	catch(e) {
	    return false;
	}
    }

    // shorthand for native APIs
    var unit = {ctor: '_Tuple0'};
    var nativeBinding = _elm_lang$core$Native_Scheduler.nativeBinding;
    var succeed = _elm_lang$core$Native_Scheduler.succeed;
    var fail = _elm_lang$core$Native_Scheduler.fail;
    var Nothing = _elm_lang$core$Maybe$Nothing;
    var Just = _elm_lang$core$Maybe$Just;
    

    function set(key, value) {
        return nativeBinding(function(callback) {
            try {
                localStorage.setItem(key, value);
                return callback(succeed( unit ));
            } catch (e) {
                return callback(fail( {'ctor': 'Overflow'} ));
            }
        });
    }


    function get (key) {
        return nativeBinding(function(callback) {
            var value = localStorage.getItem(key);
            return callback(succeed(
                (value === null) ? Nothing : Just(value)
            ));
        });
    }
    

    function remove (key) {
        return nativeBinding(function(callback) {
            localStorage.removeItem(key);
            return callback(succeed( unit ));
        });
    }
    

    var keys = nativeBinding(function(callback) {
        var _keys = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            _keys.push(key);
        }
        return callback(succeed(
            _elm_lang$core$Native_List.fromArray( _keys )
        ));
    });


    var clear = nativeBinding(function(callback) {
        localStorage.clear();
        return callback(succeed( unit ));
    });


    var storageFail = nativeBinding(function(callback) {
            return callback(fail( {ctor: 'NoStorage'} ));
    });
    

    if (storageAvailable('localStorage')) {
        return {
            get: get,
            set: F2(set),
            remove: remove,
            clear: clear,
            keys: keys,
        }
    }
    else {
        return {
            get: storageFail,
            set: storageFail,
            remove: storageFail,
            clear: storageFail,
            keys: storageFail,
        }
    }

}();

var _fredcy$localstorage$LocalStorage_ops = _fredcy$localstorage$LocalStorage_ops || {};
_fredcy$localstorage$LocalStorage_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			t1,
			function (_p0) {
				return t2;
			});
	});
var _fredcy$localstorage$LocalStorage$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_fredcy$localstorage$LocalStorage_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _fredcy$localstorage$LocalStorage$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _fredcy$localstorage$LocalStorage$keys = _fredcy$localstorage$Native_LocalStorage.keys;
var _fredcy$localstorage$LocalStorage$clear = _fredcy$localstorage$Native_LocalStorage.clear;
var _fredcy$localstorage$LocalStorage$remove = _fredcy$localstorage$Native_LocalStorage.remove;
var _fredcy$localstorage$LocalStorage$set = _fredcy$localstorage$Native_LocalStorage.set;
var _fredcy$localstorage$LocalStorage$get = _fredcy$localstorage$Native_LocalStorage.get;
var _fredcy$localstorage$LocalStorage$subscription = _elm_lang$core$Native_Platform.leaf('LocalStorage');
var _fredcy$localstorage$LocalStorage$Event = F4(
	function (a, b, c, d) {
		return {key: a, oldValue: b, newValue: c, url: d};
	});
var _fredcy$localstorage$LocalStorage$event = A5(
	_elm_lang$core$Json_Decode$object4,
	_fredcy$localstorage$LocalStorage$Event,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'key', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'oldValue', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'newValue', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'url', _elm_lang$core$Json_Decode$string));
var _fredcy$localstorage$LocalStorage$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'storage',
							_fredcy$localstorage$LocalStorage$event,
							_elm_lang$core$Platform$sendToSelf(router))),
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					});
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_fredcy$localstorage$LocalStorage_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _fredcy$localstorage$LocalStorage$Overflow = {ctor: 'Overflow'};
var _fredcy$localstorage$LocalStorage$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _fredcy$localstorage$LocalStorage$fromJson = F2(
	function (decoder, str) {
		var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
		if (_p5.ctor === 'Ok') {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Maybe$Just(_p5._0));
		} else {
			return _elm_lang$core$Task$fail(
				_fredcy$localstorage$LocalStorage$UnexpectedPayload(_p5._0));
		}
	});
var _fredcy$localstorage$LocalStorage$getJson = F2(
	function (decoder, key) {
		var decode = function (maybe) {
			var _p6 = maybe;
			if (_p6.ctor === 'Just') {
				return A2(_fredcy$localstorage$LocalStorage$fromJson, decoder, _p6._0);
			} else {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			_fredcy$localstorage$LocalStorage$get(key),
			decode);
	});
var _fredcy$localstorage$LocalStorage$NoStorage = {ctor: 'NoStorage'};
var _fredcy$localstorage$LocalStorage$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _fredcy$localstorage$LocalStorage$changes = function (tagger) {
	return _fredcy$localstorage$LocalStorage$subscription(
		_fredcy$localstorage$LocalStorage$MySub(tagger));
};
var _fredcy$localstorage$LocalStorage$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _fredcy$localstorage$LocalStorage$MySub(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['LocalStorage'] = {pkg: 'fredcy/localstorage', init: _fredcy$localstorage$LocalStorage$init, onEffects: _fredcy$localstorage$LocalStorage$onEffects, onSelfMsg: _fredcy$localstorage$LocalStorage$onSelfMsg, tag: 'sub', subMap: _fredcy$localstorage$LocalStorage$subMap};

var _lukewestby$elm_http_builder$HttpBuilder$appendQuery = F3(
	function (url, key, value) {
		return A2(_elm_lang$core$String$contains, '?', url) ? A2(
			_elm_lang$core$Basics_ops['++'],
			url,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'&',
				A2(
					_elm_lang$core$Basics_ops['++'],
					key,
					A2(_elm_lang$core$Basics_ops['++'], '=', value)))) : A2(
			_elm_lang$core$Basics_ops['++'],
			url,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'?',
				A2(
					_elm_lang$core$Basics_ops['++'],
					key,
					A2(_elm_lang$core$Basics_ops['++'], '=', value))));
	});
var _lukewestby$elm_http_builder$HttpBuilder$replace = F2(
	function (old, $new) {
		return function (_p0) {
			return A2(
				_elm_lang$core$String$join,
				$new,
				A2(_elm_lang$core$String$split, old, _p0));
		};
	});
var _lukewestby$elm_http_builder$HttpBuilder$queryEscape = function (_p1) {
	return A3(
		_lukewestby$elm_http_builder$HttpBuilder$replace,
		'%20',
		'+',
		_evancz$elm_http$Http$uriEncode(_p1));
};
var _lukewestby$elm_http_builder$HttpBuilder$queryPair = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._1)));
};
var _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded = function (args) {
	return A2(
		_elm_lang$core$String$join,
		'&',
		A2(_elm_lang$core$List$map, _lukewestby$elm_http_builder$HttpBuilder$queryPair, args));
};
var _lukewestby$elm_http_builder$HttpBuilder$toSettings = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _lukewestby$elm_http_builder$HttpBuilder$toRequest = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _lukewestby$elm_http_builder$HttpBuilder$appendCacheBusterToUrl = F2(
	function (request, time) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				url: A3(
					_lukewestby$elm_http_builder$HttpBuilder$appendQuery,
					request.url,
					'_',
					_elm_lang$core$Basics$toString(time))
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$jsonReader = F2(
	function (decoder, value) {
		var _p8 = value;
		if (_p8.ctor === 'Text') {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p8._0);
		} else {
			return _elm_lang$core$Result$Err('JSON reader does not support given body type.');
		}
	});
var _lukewestby$elm_http_builder$HttpBuilder$stringReader = function (value) {
	var _p9 = value;
	if (_p9.ctor === 'Text') {
		return _elm_lang$core$Result$Ok(_p9._0);
	} else {
		return _elm_lang$core$Result$Err('String reader does not support given body type.');
	}
};
var _lukewestby$elm_http_builder$HttpBuilder$url = _evancz$elm_http$Http$url;
var _lukewestby$elm_http_builder$HttpBuilder$defaultInternals = {cacheBuster: false, zeroStatusAllowed: false};
var _lukewestby$elm_http_builder$HttpBuilder$Internals = F2(
	function (a, b) {
		return {cacheBuster: a, zeroStatusAllowed: b};
	});
var _lukewestby$elm_http_builder$HttpBuilder$Response = F5(
	function (a, b, c, d, e) {
		return {data: a, status: b, statusText: c, headers: d, url: e};
	});
var _lukewestby$elm_http_builder$HttpBuilder$RequestBuilder = F3(
	function (a, b, c) {
		return {ctor: 'RequestBuilder', _0: a, _1: b, _2: c};
	});
var _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl = F2(
	function (verb, url) {
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			{
				verb: verb,
				url: url,
				headers: _elm_lang$core$Native_List.fromArray(
					[]),
				body: _evancz$elm_http$Http$empty
			},
			_evancz$elm_http$Http$defaultSettings,
			_lukewestby$elm_http_builder$HttpBuilder$defaultInternals);
	});
var _lukewestby$elm_http_builder$HttpBuilder$get = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('GET');
var _lukewestby$elm_http_builder$HttpBuilder$post = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('POST');
var _lukewestby$elm_http_builder$HttpBuilder$put = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('PUT');
var _lukewestby$elm_http_builder$HttpBuilder$patch = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('PATCH');
var _lukewestby$elm_http_builder$HttpBuilder$delete = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('DELETE');
var _lukewestby$elm_http_builder$HttpBuilder$mapRequest = F2(
	function (updater, _p10) {
		var _p11 = _p10;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			updater(_p11._0),
			_p11._1,
			_p11._2);
	});
var _lukewestby$elm_http_builder$HttpBuilder$withHeader = F2(
	function (key, value) {
		return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
			function (request) {
				return _elm_lang$core$Native_Utils.update(
					request,
					{
						headers: A2(
							_elm_lang$core$List_ops['::'],
							{ctor: '_Tuple2', _0: key, _1: value},
							request.headers)
					});
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withHeaders = function (headers) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
		function (request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{
					headers: A2(_elm_lang$core$Basics_ops['++'], headers, request.headers)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withBody = function (body) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
		function (request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{body: body});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withStringBody = function (_p12) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_evancz$elm_http$Http$string(_p12));
};
var _lukewestby$elm_http_builder$HttpBuilder$withJsonBody = function (_p13) {
	return _lukewestby$elm_http_builder$HttpBuilder$withStringBody(
		A2(_elm_lang$core$Json_Encode$encode, 0, _p13));
};
var _lukewestby$elm_http_builder$HttpBuilder$withUrlEncodedBody = function (_p14) {
	return _lukewestby$elm_http_builder$HttpBuilder$withStringBody(
		_lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(_p14));
};
var _lukewestby$elm_http_builder$HttpBuilder$withMultipartBody = function (_p15) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_evancz$elm_http$Http$multipart(_p15));
};
var _lukewestby$elm_http_builder$HttpBuilder$withMultipartStringBody = function (_p16) {
	return _lukewestby$elm_http_builder$HttpBuilder$withMultipartBody(
		A2(
			_elm_lang$core$List$map,
			function (_p17) {
				var _p18 = _p17;
				return A2(_evancz$elm_http$Http$stringData, _p18._0, _p18._1);
			},
			_p16));
};
var _lukewestby$elm_http_builder$HttpBuilder$mapSettings = F2(
	function (updater, _p19) {
		var _p20 = _p19;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			_p20._0,
			updater(_p20._1),
			_p20._2);
	});
var _lukewestby$elm_http_builder$HttpBuilder$withTimeout = function (timeout) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{timeout: timeout});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withStartHandler = function (task) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					onStart: _elm_lang$core$Maybe$Just(task)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withProgressHandler = function (progressHandler) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					onProgress: _elm_lang$core$Maybe$Just(progressHandler)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withMimeType = function (mimeType) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					desiredResponseType: _elm_lang$core$Maybe$Just(mimeType)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withCredentials = _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
	function (settings) {
		return _elm_lang$core$Native_Utils.update(
			settings,
			{withCredentials: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$mapInternals = F2(
	function (updater, _p21) {
		var _p22 = _p21;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			_p22._0,
			_p22._1,
			updater(_p22._2));
	});
var _lukewestby$elm_http_builder$HttpBuilder$withCacheBuster = _lukewestby$elm_http_builder$HttpBuilder$mapInternals(
	function (internals) {
		return _elm_lang$core$Native_Utils.update(
			internals,
			{cacheBuster: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withZeroStatusAllowed = _lukewestby$elm_http_builder$HttpBuilder$mapInternals(
	function (internals) {
		return _elm_lang$core$Native_Utils.update(
			internals,
			{zeroStatusAllowed: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$BadResponse = function (a) {
	return {ctor: 'BadResponse', _0: a};
};
var _lukewestby$elm_http_builder$HttpBuilder$Timeout = {ctor: 'Timeout'};
var _lukewestby$elm_http_builder$HttpBuilder$NetworkError = {ctor: 'NetworkError'};
var _lukewestby$elm_http_builder$HttpBuilder$promoteRawError = function (rawError) {
	var _p23 = rawError;
	if (_p23.ctor === 'RawTimeout') {
		return _lukewestby$elm_http_builder$HttpBuilder$Timeout;
	} else {
		return _lukewestby$elm_http_builder$HttpBuilder$NetworkError;
	}
};
var _lukewestby$elm_http_builder$HttpBuilder$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _lukewestby$elm_http_builder$HttpBuilder$responseFromRaw = F2(
	function (reader, response) {
		var _p24 = reader(response.value);
		if (_p24.ctor === 'Ok') {
			return _elm_lang$core$Task$succeed(
				{data: _p24._0, status: response.status, statusText: response.statusText, headers: response.headers, url: response.url});
		} else {
			return _elm_lang$core$Task$fail(
				_lukewestby$elm_http_builder$HttpBuilder$UnexpectedPayload(_p24._0));
		}
	});
var _lukewestby$elm_http_builder$HttpBuilder$handleResponse = F4(
	function (successReader, errorReader, internals, response) {
		var isSuccessful = ((_elm_lang$core$Native_Utils.cmp(response.status, 200) > -1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) || (_elm_lang$core$Native_Utils.eq(response.status, 0) && internals.zeroStatusAllowed);
		return isSuccessful ? A2(_lukewestby$elm_http_builder$HttpBuilder$responseFromRaw, successReader, response) : A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			function (_p25) {
				return _elm_lang$core$Task$fail(
					_lukewestby$elm_http_builder$HttpBuilder$BadResponse(_p25));
			},
			A2(_lukewestby$elm_http_builder$HttpBuilder$responseFromRaw, errorReader, response));
	});
var _lukewestby$elm_http_builder$HttpBuilder$sendHelp = F5(
	function (successReader, errorReader, internals, settings, request) {
		return A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			A3(_lukewestby$elm_http_builder$HttpBuilder$handleResponse, successReader, errorReader, internals),
			A2(
				_elm_lang$core$Task$mapError,
				_lukewestby$elm_http_builder$HttpBuilder$promoteRawError,
				A2(_evancz$elm_http$Http$send, settings, request)));
	});
var _lukewestby$elm_http_builder$HttpBuilder$send = F3(
	function (successReader, errorReader, _p26) {
		var _p27 = _p26;
		var _p30 = _p27._1;
		var _p29 = _p27._0;
		var _p28 = _p27._2;
		return _p28.cacheBuster ? A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			A4(_lukewestby$elm_http_builder$HttpBuilder$sendHelp, successReader, errorReader, _p28, _p30),
			A2(
				_elm_lang$core$Task$map,
				_lukewestby$elm_http_builder$HttpBuilder$appendCacheBusterToUrl(_p29),
				_elm_lang$core$Time$now)) : A5(_lukewestby$elm_http_builder$HttpBuilder$sendHelp, successReader, errorReader, _p28, _p30, _p29);
	});

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css_helpers$Html_CssHelpers$stylesheetLink = function (url) {
	return A3(
		_elm_lang$html$Html$node,
		'link',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html_Attributes$property,
				'rel',
				_elm_lang$core$Json_Encode$string('stylesheet')),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'type',
				_elm_lang$core$Json_Encode$string('text/css')),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'href',
				_elm_lang$core$Json_Encode$string(url))
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$style = function (text) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html_Attributes$property,
				'textContent',
				_elm_lang$core$Json_Encode$string(text)),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'type',
				_elm_lang$core$Json_Encode$string('text/css'))
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass = F2(
	function (name, list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css_util$Css_Helpers$identifierToString(name),
					list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$class = _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass('');
var _rtfeldman$elm_css_helpers$Html_CssHelpers$classList = function (list) {
	return _rtfeldman$elm_css_helpers$Html_CssHelpers$class(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList = F2(
	function (name, list) {
		return A2(
			_rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass,
			name,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$helpers = {
	$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$class,
	classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$classList,
	id: function (_p0) {
		return _elm_lang$html$Html_Attributes$id(
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p0));
	}
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace = function (name) {
	return {
		$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass(name),
		classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList(name),
		id: function (_p1) {
			return _elm_lang$html$Html_Attributes$id(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p1));
		},
		name: name
	};
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Helpers = F3(
	function (a, b, c) {
		return {$class: a, classList: b, id: c};
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Namespace = F4(
	function (a, b, c, d) {
		return {$class: a, classList: b, id: c, name: d};
	});

var _user$project$Api_Bus$fullUrl = function (relative) {
	return A2(_elm_lang$core$Basics_ops['++'], 'https://cta-json-api.herokuapp.com', relative);
};
var _user$project$Api_Bus$dateDecoder = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _elm_lang$core$Date$fromString);
var _user$project$Api_Bus$trackError = function (error) {
	var _p0 = error;
	switch (_p0.ctor) {
		case 'UnexpectedPayload':
			return _p0._0;
		case 'NetworkError':
			return 'Failed network';
		case 'Timeout':
			return 'timeout';
		default:
			return _p0._0.data;
	}
};
var _user$project$Api_Bus$BusRouteSummary = F3(
	function (a, b, c) {
		return {id: a, name: b, color: c};
	});
var _user$project$Api_Bus$busRouteSummariesReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'color',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'name',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'id',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Bus$BusRouteSummary))))));
var _user$project$Api_Bus$getBusRoutes = A2(
	_elm_lang$core$Task$mapError,
	_user$project$Api_Bus$trackError,
	A2(
		_elm_lang$core$Task$map,
		function (_) {
			return _.data;
		},
		A3(
			_lukewestby$elm_http_builder$HttpBuilder$send,
			_user$project$Api_Bus$busRouteSummariesReader,
			_lukewestby$elm_http_builder$HttpBuilder$stringReader,
			_lukewestby$elm_http_builder$HttpBuilder$get(
				_user$project$Api_Bus$fullUrl('/bus/routes')))));
var _user$project$Api_Bus$BusRoute = F4(
	function (a, b, c, d) {
		return {id: a, name: b, color: c, directions: d};
	});
var _user$project$Api_Bus$BusStop = F4(
	function (a, b, c, d) {
		return {id: a, name: b, latitude: c, longitude: d};
	});
var _user$project$Api_Bus$busStopDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'longitude',
	_elm_lang$core$Json_Decode$float,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'latitude',
		_elm_lang$core$Json_Decode$float,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'name',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'id',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Bus$BusStop)))));
var _user$project$Api_Bus$busStopsReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(_user$project$Api_Bus$busStopDecoder));
var _user$project$Api_Bus$getBusStops = function (routeId) {
	return A2(
		_elm_lang$core$Task$mapError,
		_user$project$Api_Bus$trackError,
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_user$project$Api_Bus$busStopsReader,
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					_user$project$Api_Bus$fullUrl(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'/bus/routes/',
							A2(_elm_lang$core$Basics_ops['++'], routeId, '/stops')))))));
};
var _user$project$Api_Bus$busStopReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$Api_Bus$busStopDecoder);
var _user$project$Api_Bus$getBusStop = F2(
	function (routeId, stopId) {
		return A2(
			_elm_lang$core$Task$mapError,
			_user$project$Api_Bus$trackError,
			A2(
				_elm_lang$core$Task$map,
				function (_) {
					return _.data;
				},
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_user$project$Api_Bus$busStopReader,
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					_lukewestby$elm_http_builder$HttpBuilder$get(
						_user$project$Api_Bus$fullUrl(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'/bus/routes/',
								A2(
									_elm_lang$core$Basics_ops['++'],
									routeId,
									A2(_elm_lang$core$Basics_ops['++'], '/stops/', stopId))))))));
	});
var _user$project$Api_Bus$BusVehicle = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {id: a, updatedAt: b, latitude: c, longitude: d, heading: e, patternId: f, patternDistance: g, routeId: h, destination: i};
	});
var _user$project$Api_Bus$busVehiclesReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'destination',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'routeId',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'patternDistance',
					_elm_lang$core$Json_Decode$int,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'patternId',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'heading',
							_elm_lang$core$Json_Decode$int,
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'longitude',
								_elm_lang$core$Json_Decode$float,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'latitude',
									_elm_lang$core$Json_Decode$float,
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'updatedAt',
										_user$project$Api_Bus$dateDecoder,
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'id',
											_elm_lang$core$Json_Decode$string,
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Bus$BusVehicle))))))))))));
var _user$project$Api_Bus$getBusVehicles = function (routeId) {
	return A2(
		_elm_lang$core$Task$mapError,
		_user$project$Api_Bus$trackError,
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_user$project$Api_Bus$busVehiclesReader,
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					_user$project$Api_Bus$fullUrl(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'/bus/routes/',
							A2(_elm_lang$core$Basics_ops['++'], routeId, '/vehicles')))))));
};
var _user$project$Api_Bus$BusPrediction = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {timestamp: a, approach: b, stopId: c, stopName: d, vehicleId: e, distance: f, routeId: g, routeDirection: h, vehicleDestination: i, predictedTime: j, isDelayed: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Api_Bus$Westbound = {ctor: 'Westbound'};
var _user$project$Api_Bus$Eastbound = {ctor: 'Eastbound'};
var _user$project$Api_Bus$Southbound = {ctor: 'Southbound'};
var _user$project$Api_Bus$Northbound = {ctor: 'Northbound'};
var _user$project$Api_Bus$parseDirection = function (value) {
	var _p1 = value;
	switch (_p1) {
		case 'Northbound':
			return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Northbound);
		case 'Southbound':
			return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Southbound);
		case 'Eastbound':
			return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Eastbound);
		case 'Westbound':
			return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Westbound);
		default:
			return _elm_lang$core$Result$Err(
				A2(_elm_lang$core$Basics_ops['++'], 'Unknown direction ', value));
	}
};
var _user$project$Api_Bus$directionDecoder = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _user$project$Api_Bus$parseDirection);
var _user$project$Api_Bus$busRouteReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'directions',
		A3(
			_elm_lang$core$Json_Decode$tuple2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_user$project$Api_Bus$directionDecoder,
			_user$project$Api_Bus$directionDecoder),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'color',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'name',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'id',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Bus$BusRoute))))));
var _user$project$Api_Bus$getBusRoute = function (id) {
	return A2(
		_elm_lang$core$Task$mapError,
		_user$project$Api_Bus$trackError,
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_user$project$Api_Bus$busRouteReader,
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					_user$project$Api_Bus$fullUrl(
						A2(_elm_lang$core$Basics_ops['++'], '/bus/routes/', id))))));
};
var _user$project$Api_Bus$Departing = {ctor: 'Departing'};
var _user$project$Api_Bus$Arriving = {ctor: 'Arriving'};
var _user$project$Api_Bus$approachDecoder = A2(
	_elm_lang$core$Json_Decode$customDecoder,
	_elm_lang$core$Json_Decode$string,
	function (value) {
		var _p2 = value;
		switch (_p2) {
			case 'Arriving':
				return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Arriving);
			case 'Departing':
				return _elm_lang$core$Result$Ok(_user$project$Api_Bus$Departing);
			default:
				return _elm_lang$core$Result$Err(
					A2(_elm_lang$core$Basics_ops['++'], 'Unknown approach ', value));
		}
	});
var _user$project$Api_Bus$busPredictionsDecoder = _elm_lang$core$Json_Decode$list(
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'isDelayed',
		_elm_lang$core$Json_Decode$bool,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'predictedTime',
			_user$project$Api_Bus$dateDecoder,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'vehicleDestination',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'routeDirection',
					_user$project$Api_Bus$directionDecoder,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'routeId',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'distance',
							_elm_lang$core$Json_Decode$int,
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'vehicleId',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'stopName',
									_elm_lang$core$Json_Decode$string,
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'stopId',
										_elm_lang$core$Json_Decode$string,
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'approach',
											_user$project$Api_Bus$approachDecoder,
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'timestamp',
												_user$project$Api_Bus$dateDecoder,
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Bus$BusPrediction)))))))))))));
var _user$project$Api_Bus$busPredictionsReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$Api_Bus$busPredictionsDecoder);
var _user$project$Api_Bus$getBusPredictions = F2(
	function (routeId, stopId) {
		return A2(
			_elm_lang$core$Task$mapError,
			_user$project$Api_Bus$trackError,
			A2(
				_elm_lang$core$Task$map,
				function (_) {
					return _.data;
				},
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_user$project$Api_Bus$busPredictionsReader,
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					_lukewestby$elm_http_builder$HttpBuilder$get(
						_user$project$Api_Bus$fullUrl(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'/bus/routes/',
								A2(
									_elm_lang$core$Basics_ops['++'],
									routeId,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'/stops/',
										A2(_elm_lang$core$Basics_ops['++'], stopId, '/predictions')))))))));
	});

var _user$project$Utils$listUniqueBy = F2(
	function (accessor, list) {
		var fold = F2(
			function (item, memo) {
				var id = accessor(item);
				return A2(_elm_lang$core$Set$member, id, memo.ids) ? memo : _elm_lang$core$Native_Utils.update(
					memo,
					{
						output: A2(_elm_lang$core$List_ops['::'], item, memo.output),
						ids: A2(_elm_lang$core$Set$insert, id, memo.ids)
					});
			});
		return function (_) {
			return _.output;
		}(
			A3(
				_elm_lang$core$List$foldl,
				fold,
				{
					output: _elm_lang$core$Native_List.fromArray(
						[]),
					ids: _elm_lang$core$Set$empty
				},
				list));
	});
var _user$project$Utils$flatten = _elm_lang$core$List$filterMap(
	function (_p0) {
		var _p1 = _p0;
		return _p1._0 ? _elm_lang$core$Maybe$Just(_p1._1) : _elm_lang$core$Maybe$Nothing;
	});
var _user$project$Utils$never = function (a) {
	never:
	while (true) {
		var _v1 = a;
		a = _v1;
		continue never;
	}
};
var _user$project$Utils$performSucceed = F2(
	function (onFinished, task) {
		return A3(
			_elm_lang$core$Task$perform,
			_user$project$Utils$never,
			onFinished,
			_elm_lang$core$Task$toResult(task));
	});
var _user$project$Utils$constant = function (msg) {
	return A2(
		_user$project$Utils$performSucceed,
		_elm_lang$core$Basics$always(msg),
		_elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'}));
};
var _user$project$Utils$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$Task$andThen);
var _user$project$Utils$delay = F2(
	function (howLong, task) {
		return A2(
			_user$project$Utils$andThen,
			_elm_lang$core$Basics$always(task),
			_elm_lang$core$Process$sleep(howLong));
	});
var _user$project$Utils$loadStateToMaybe = function (loadState) {
	var _p2 = loadState;
	if (_p2.ctor === 'Success') {
		return _elm_lang$core$Maybe$Just(_p2._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Utils$dateDecoder = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _elm_lang$core$Date$fromString);
var _user$project$Utils$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _user$project$Utils$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _user$project$Utils$loadStateFromResult = function (result) {
	var _p3 = result;
	if (_p3.ctor === 'Ok') {
		return _user$project$Utils$Success(_p3._0);
	} else {
		return _user$project$Utils$Failure(_p3._0);
	}
};
var _user$project$Utils$Loading = {ctor: 'Loading'};
var _user$project$Utils$Initial = {ctor: 'Initial'};
var _user$project$Utils$loadStateMap = F2(
	function (tagger, loadState) {
		var _p4 = loadState;
		switch (_p4.ctor) {
			case 'Success':
				return _user$project$Utils$Success(
					tagger(_p4._0));
			case 'Failure':
				return _user$project$Utils$Failure(_p4._0);
			case 'Loading':
				return _user$project$Utils$Loading;
			default:
				return _user$project$Utils$Initial;
		}
	});

var _user$project$Api_Train$fullUrl = function (relative) {
	return A2(_elm_lang$core$Basics_ops['++'], 'https://cta-json-api.herokuapp.com', relative);
};
var _user$project$Api_Train$TrainRoute = F4(
	function (a, b, c, d) {
		return {id: a, name: b, color: c, textColor: d};
	});
var _user$project$Api_Train$trainRouteDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'textColor',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'color',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'name',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'id',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Train$TrainRoute)))));
var _user$project$Api_Train$trainRoutesReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(_user$project$Api_Train$trainRouteDecoder));
var _user$project$Api_Train$getTrainRoutes = A2(
	_elm_lang$core$Task$mapError,
	function (_p0) {
		return 'Could not fetch train routes';
	},
	A2(
		_elm_lang$core$Task$map,
		function (_) {
			return _.data;
		},
		A3(
			_lukewestby$elm_http_builder$HttpBuilder$send,
			_user$project$Api_Train$trainRoutesReader,
			_lukewestby$elm_http_builder$HttpBuilder$stringReader,
			_lukewestby$elm_http_builder$HttpBuilder$get(
				_user$project$Api_Train$fullUrl('/train/routes')))));
var _user$project$Api_Train$trainRouteReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$Api_Train$trainRouteDecoder);
var _user$project$Api_Train$getTrainRoute = function (routeId) {
	return A2(
		_elm_lang$core$Task$mapError,
		function (_p1) {
			return A2(_elm_lang$core$Basics_ops['++'], 'Could not fetch train route ', routeId);
		},
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_user$project$Api_Train$trainRouteReader,
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					_user$project$Api_Train$fullUrl(
						A2(_elm_lang$core$Basics_ops['++'], '/train/routes/', routeId))))));
};
var _user$project$Api_Train$TrainStop = F5(
	function (a, b, c, d, e) {
		return {id: a, name: b, latitude: c, longitude: d, isAccessible: e};
	});
var _user$project$Api_Train$trainStopDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'isAccessible',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'longitude',
		_elm_lang$core$Json_Decode$float,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'latitude',
			_elm_lang$core$Json_Decode$float,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'name',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'id',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Train$TrainStop))))));
var _user$project$Api_Train$trainStopsReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(_user$project$Api_Train$trainStopDecoder));
var _user$project$Api_Train$getTrainStops = function (routeId) {
	return A2(
		_elm_lang$core$Task$mapError,
		function (_p2) {
			return A2(_elm_lang$core$Basics_ops['++'], 'Could not fetch stops for train route ', routeId);
		},
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_user$project$Api_Train$trainStopsReader,
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					_user$project$Api_Train$fullUrl(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'/train/routes/',
							A2(_elm_lang$core$Basics_ops['++'], routeId, '/stops')))))));
};
var _user$project$Api_Train$trainStopReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$Api_Train$trainStopDecoder);
var _user$project$Api_Train$getTrainStop = F2(
	function (routeId, stopId) {
		return A2(
			_elm_lang$core$Task$mapError,
			function (_p3) {
				return A2(_elm_lang$core$Basics_ops['++'], 'Could not fetch stop ', stopId);
			},
			A2(
				_elm_lang$core$Task$map,
				function (_) {
					return _.data;
				},
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_user$project$Api_Train$trainStopReader,
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					_lukewestby$elm_http_builder$HttpBuilder$get(
						_user$project$Api_Train$fullUrl(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'/train/routes/',
								A2(
									_elm_lang$core$Basics_ops['++'],
									routeId,
									A2(_elm_lang$core$Basics_ops['++'], '/stops/', stopId))))))));
	});
var _user$project$Api_Train$TrainPrediction = F5(
	function (a, b, c, d, e) {
		return {destination: a, timestamp: b, predictedTime: c, isDelayed: d, isDue: e};
	});
var _user$project$Api_Train$trainPredictionDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'isDue',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'isDelayed',
		_elm_lang$core$Json_Decode$bool,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'predictedTime',
			_user$project$Utils$dateDecoder,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'timestamp',
				_user$project$Utils$dateDecoder,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'destination',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Api_Train$TrainPrediction))))));
var _user$project$Api_Train$trainPredictionsReader = _lukewestby$elm_http_builder$HttpBuilder$jsonReader(
	_elm_lang$core$Json_Decode$list(_user$project$Api_Train$trainPredictionDecoder));
var _user$project$Api_Train$getTrainPredictions = F2(
	function (routeId, stopId) {
		return A2(
			_elm_lang$core$Task$mapError,
			function (_p4) {
				return A2(_elm_lang$core$Basics_ops['++'], 'Could not fetch predictions for stop ', stopId);
			},
			A2(
				_elm_lang$core$Task$map,
				function (_) {
					return _.data;
				},
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_user$project$Api_Train$trainPredictionsReader,
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					_lukewestby$elm_http_builder$HttpBuilder$get(
						_user$project$Api_Train$fullUrl(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'/train/routes/',
								A2(
									_elm_lang$core$Basics_ops['++'],
									routeId,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'/stops/',
										A2(_elm_lang$core$Basics_ops['++'], stopId, '/predictions')))))))));
	});

var _user$project$BusRoute_Classes$cssNamespace = 'BusRoute';
var _user$project$BusRoute_Classes$ActiveDirectionButton = {ctor: 'ActiveDirectionButton'};
var _user$project$BusRoute_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$BusRoute_Classes$DirectionButton = {ctor: 'DirectionButton'};
var _user$project$BusRoute_Classes$DirectionsSelector = {ctor: 'DirectionsSelector'};
var _user$project$BusRoute_Classes$StopName = {ctor: 'StopName'};
var _user$project$BusRoute_Classes$Chevron = {ctor: 'Chevron'};
var _user$project$BusRoute_Classes$StopItem = {ctor: 'StopItem'};

var _user$project$Icons$fromSvgString = function (svgCode) {
	return A2(
		_elm_lang$html$Html$i,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html_Attributes$property,
				'innerHTML',
				_elm_lang$core$Json_Encode$string(svgCode))
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _user$project$Icons$star = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\">\n    <polygon stroke=\"none\" fill-rule=\"evenodd\" points=\"32 12 19.7513571 12 16.0020714 0 12.2513571 12 0 12 9.92471429 19.4435 6 32 16 24 26 32 22.0766429 19.4425\"></polygon>\n</svg>');
var _user$project$Icons$starOutline = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"-2 -2 28 28\">\n    <polygon stroke-width=\"1\" fill=\"none\" points=\"24 9 14.8135179 9 12.0015536 0 9.18851786 9 0 9 7.44353571 14.582625 4.5 24 12 18 19.5 24 16.5574821 14.581875\"></polygon>\n</svg>');
var _user$project$Icons$bus = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 -1 32 33\">\n    <path d=\"M0,23.9376623 C0,25.5333403 1.26036364,25.9766026 2.42427273,26.9523948 L2.42427273,30.1437506 C2.42427273,31.1186286 3.29690909,31.9169662 4.36363636,31.9169662 L6.303,31.9169662 C7.36972727,31.9169662 8.24245455,31.1187117 8.24245455,30.1437506 L8.24245455,28.3706182 L23.7575455,28.3706182 L23.7575455,30.1437506 C23.7575455,31.1186286 24.6306364,31.9169662 25.697,31.9169662 L27.6363636,31.9169662 C28.7026364,31.9169662 29.5757273,31.1187117 29.5757273,30.1437506 L29.5757273,26.9523948 C30.7396364,25.9766026 32,25.4450701 32,23.9376623 L32,7.00957922 C32,0.803490909 24.5330909,-1.77635684e-15 16,-1.77635684e-15 C7.46690909,-1.77635684e-15 0,0.803490909 0,7.00957922 L0,23.9376623 L0,23.9376623 Z M7.27272727,25.2666182 C5.624,25.2666182 4.36363636,24.1142857 4.36363636,22.6068779 C4.36363636,21.0995532 5.624,19.9471377 7.27272727,19.9471377 C8.92145455,19.9471377 10.1818182,21.0995532 10.1818182,22.6068779 C10.1818182,24.1142857 8.92145455,25.2666182 7.27272727,25.2666182 L7.27272727,25.2666182 Z M24.7272727,25.2666182 C23.0785455,25.2666182 21.8181818,24.1142857 21.8181818,22.6068779 C21.8181818,21.0995532 23.0785455,19.9471377 24.7272727,19.9471377 C26.376,19.9471377 27.6363636,21.0995532 27.6363636,22.6068779 C27.6363636,24.1142857 26.376,25.2666182 24.7272727,25.2666182 L24.7272727,25.2666182 Z M27.6363636,15.0718338 L4.36363636,15.0718338 L4.36363636,6.20608831 L27.6363636,6.20608831 L27.6363636,15.0718338 L27.6363636,15.0718338 Z\" stroke=\"none\" fill-rule=\"evenodd\"></path>\n</svg>');
var _user$project$Icons$train = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 33 32\">\n    <path d=\"M0,22.9743077 C0,26.1746154 3.00563636,28.7178462 6.78790909,28.7178462 L4.36363636,30.7692308 L4.36363636,32 L27.6363636,32 L27.6363636,30.7692308 L25.2120909,28.7178462 C28.9942727,28.7178462 32,26.1746154 32,22.9743077 L32,6.56415385 C32,0.820615385 24.5330909,0 16,0 C7.46690909,0 0,0.820615385 0,6.56415385 L0,22.9743077 L0,22.9743077 Z M16,25.2307692 C13.9998182,25.2307692 12.3636364,23.8463846 12.3636364,22.1539231 C12.3636364,20.4614615 13.9998182,19.0769231 16,19.0769231 C18.0001818,19.0769231 19.6363636,20.4614615 19.6363636,22.1539231 C19.6363636,23.8463846 18.0001818,25.2307692 16,25.2307692 L16,25.2307692 Z M27.6363636,13.5384615 L4.36363636,13.5384615 L4.36363636,6.15384615 L27.6363636,6.15384615 L27.6363636,13.5384615 L27.6363636,13.5384615 Z\" stroke=\"none\" fill-rule=\"evenodd\"></path>\n</svg>');
var _user$project$Icons$search = _user$project$Icons$fromSvgString('\n<svg viewBox=\"0 0 32 32\">\n    <path d=\"M31.75,26.8352332 L24.6833333,19.7139896 C25.8333333,17.7160622 26.4333333,15.4943005 26.4333333,13.2559585 C26.4333333,5.99378238 20.5,0.0829015544 13.2166667,0.0829015544 C5.93333333,0.0829015544 0,5.99378238 0,13.2559585 C0,20.5181347 5.93333333,26.4290155 13.2166667,26.4290155 C15.5416667,26.4290155 17.8416667,25.7906736 19.8916667,24.5720207 L26.925,31.6683938 C27.0833333,31.8259067 27.3083333,31.9253886 27.5333333,31.9253886 C27.7583333,31.9253886 27.9833333,31.8341969 28.1416667,31.6683938 L31.75,28.0373057 C32.0833333,27.6974093 32.0833333,27.1668394 31.75,26.8352332 L31.75,26.8352332 Z M13.2166667,5.21450777 C17.6666667,5.21450777 21.2833333,8.82072539 21.2833333,13.2559585 C21.2833333,17.6911917 17.6666667,21.2974093 13.2166667,21.2974093 C8.76666667,21.2974093 5.15,17.6911917 5.15,13.2559585 C5.15,8.82072539 8.76666667,5.21450777 13.2166667,5.21450777 L13.2166667,5.21450777 Z\" stroke=\"none\" fill-rule=\"evenodd\"></path>\n</svg>');
var _user$project$Icons$chevronRight = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 12 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <polygon stroke=\"none\" fill-rule=\"evenodd\" points=\"0 1.2125 1.29375 0 12 10 1.29375 20 0 18.79375 9.40625 10\"></polygon>\n</svg>');
var _user$project$Icons$close = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 -1 20 21\">\n    <path d=\"M17.0382775,2.90174279 C13.15311,-0.967247596 6.85167464,-0.967247596 2.96172249,2.90174279 C-0.928229665,6.77073317 -0.923444976,13.0459306 2.96172249,16.9196858 C6.84688995,20.7886762 13.1483254,20.7886762 17.0382775,16.9196858 C20.9282297,13.0506954 20.923445,6.77073317 17.0382775,2.90174279 L17.0382775,2.90174279 Z M14.5933014,13.9226477 L14.0287081,14.4848901 L9.99043062,10.4729567 L5.97129187,14.465831 L5.40669856,13.9035886 L9.42583732,9.91071429 L5.40669856,5.91783997 L5.97129187,5.35559753 L9.99043062,9.34847184 L14.0287081,5.33653846 L14.5933014,5.89878091 L10.5550239,9.91071429 L14.5933014,13.9226477 L14.5933014,13.9226477 Z\" stroke=\"none\" fill-rule=\"evenodd\"></path>\n</svg>');
var _user$project$Icons$loading = _user$project$Icons$fromSvgString('\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 44 44\">\n    <g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\">\n        <circle cx=\"22\" cy=\"22\" r=\"14.6417\">\n            <animate attributeName=\"r\" begin=\"0s\" dur=\"1.8s\" values=\"1; 20\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.165, 0.84, 0.44, 1\" repeatCount=\"indefinite\"/>\n            <animate attributeName=\"stroke-opacity\" begin=\"0s\" dur=\"1.8s\" values=\"1; 0\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.3, 0.61, 0.355, 1\" repeatCount=\"indefinite\"/>\n        </circle>\n        <circle cx=\"22\" cy=\"22\" r=\"19.7557\">\n            <animate attributeName=\"r\" begin=\"-0.9s\" dur=\"1.8s\" values=\"1; 20\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.165, 0.84, 0.44, 1\" repeatCount=\"indefinite\"/>\n            <animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" dur=\"1.8s\" values=\"1; 0\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.3, 0.61, 0.355, 1\" repeatCount=\"indefinite\"/>\n        </circle>\n    </g>\n</svg>');

var _user$project$Components_Classes$cssNamespace = 'Components';
var _user$project$Components_Classes$SearchBarContainer = {ctor: 'SearchBarContainer'};
var _user$project$Components_Classes$SearchInput = {ctor: 'SearchInput'};
var _user$project$Components_Classes$SearchIcon = {ctor: 'SearchIcon'};
var _user$project$Components_Classes$LoadingContainer = {ctor: 'LoadingContainer'};
var _user$project$Components_Classes$LoadingIcon = {ctor: 'LoadingIcon'};

var _user$project$Components_SearchBar$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$Components_Classes$cssNamespace);
var _user$project$Components_SearchBar$class = _user$project$Components_SearchBar$_p0.$class;
var _user$project$Components_SearchBar$update = F2(
	function (msg, model) {
		var _p1 = msg;
		if (_p1.ctor === 'UpdateSearchValue') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{searchValue: _p1._0}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{searchValue: ''}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		}
	});
var _user$project$Components_SearchBar$getSearchValue = function (_) {
	return _.searchValue;
};
var _user$project$Components_SearchBar$model = {searchValue: ''};
var _user$project$Components_SearchBar$Model = function (a) {
	return {searchValue: a};
};
var _user$project$Components_SearchBar$ClearSearchValue = {ctor: 'ClearSearchValue'};
var _user$project$Components_SearchBar$UpdateSearchValue = function (a) {
	return {ctor: 'UpdateSearchValue', _0: a};
};
var _user$project$Components_SearchBar$view = F2(
	function (model, upgrade) {
		return A2(
			_elm_lang$html$Html_App$map,
			upgrade,
			A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Components_SearchBar$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Components_Classes$SearchBarContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Components_SearchBar$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Components_Classes$SearchIcon]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Icons$search])),
						A2(
						_elm_lang$html$Html$input,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$type$('text'),
								_elm_lang$html$Html_Events$onInput(_user$project$Components_SearchBar$UpdateSearchValue),
								_user$project$Components_SearchBar$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Components_Classes$SearchInput])),
								_elm_lang$html$Html_Attributes$value(model.searchValue)
							]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Components_SearchBar$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Components_Classes$SearchIcon])),
								_elm_lang$html$Html_Events$onClick(_user$project$Components_SearchBar$ClearSearchValue)
							]),
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Icons$close]))
					])));
	});

var _user$project$BusRoute_Model$model = F2(
	function (route, stops) {
		var groupedStops = A2(
			_elm_community$dict_extra$Dict_Extra$groupBy,
			function (_p0) {
				return _elm_lang$core$String$trim(
					function (_) {
						return _.name;
					}(_p0));
			},
			stops);
		return {searchModel: _user$project$Components_SearchBar$model, route: route, stops: groupedStops};
	});
var _user$project$BusRoute_Model$Model = F3(
	function (a, b, c) {
		return {searchModel: a, route: b, stops: c};
	});

var _user$project$BusRoute_Update$load = function (routeId) {
	var routeToStops = function (route) {
		return A2(
			_elm_lang$core$Task$map,
			function (stops) {
				return {ctor: '_Tuple2', _0: route, _1: stops};
			},
			_user$project$Api_Bus$getBusStops(route.id));
	};
	return A2(
		_elm_lang$core$Task$map,
		function (_p0) {
			var _p1 = _p0;
			return A2(_user$project$BusRoute_Model$model, _p1._0, _p1._1);
		},
		A2(
			_user$project$Utils$andThen,
			routeToStops,
			_user$project$Api_Bus$getBusRoute(routeId)));
};
var _user$project$BusRoute_Update$SearchBarMsg = function (a) {
	return {ctor: 'SearchBarMsg', _0: a};
};
var _user$project$BusRoute_Update$update = F2(
	function (msg, model) {
		var _p2 = msg;
		var _p3 = A2(_user$project$Components_SearchBar$update, _p2._0, model.searchModel);
		var subModel = _p3._0;
		var subCmd = _p3._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{searchModel: subModel}),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$BusRoute_Update$SearchBarMsg, subCmd)
		};
	});

var _user$project$Pages$url = function (page) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'#/',
		function () {
			var _p0 = page;
			switch (_p0.ctor) {
				case 'FavoritesPage':
					return '';
				case 'BusRoutesPage':
					return 'bus/routes';
				case 'BusRoutePage':
					return A2(_elm_lang$core$Basics_ops['++'], 'bus/routes/', _p0._0);
				case 'BusStopPage':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'bus/routes/',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p0._0,
							A2(_elm_lang$core$Basics_ops['++'], '/stops/', _p0._1)));
				case 'TrainRoutesPage':
					return 'train/routes';
				case 'TrainStopPage':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'train/routes/',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p0._0,
							A2(_elm_lang$core$Basics_ops['++'], '/stops/', _p0._1)));
				case 'TrainRoutePage':
					return A2(_elm_lang$core$Basics_ops['++'], 'train/routes/', _p0._0);
				default:
					return 'not-found';
			}
		}());
};
var _user$project$Pages$navigateTo = function (page) {
	return _elm_lang$navigation$Navigation$newUrl(
		_user$project$Pages$url(page));
};
var _user$project$Pages$redirectTo = function (page) {
	return _elm_lang$navigation$Navigation$modifyUrl(
		_user$project$Pages$url(page));
};
var _user$project$Pages$NotFound = {ctor: 'NotFound'};
var _user$project$Pages$FavoritesPage = {ctor: 'FavoritesPage'};
var _user$project$Pages$TrainStopPage = F2(
	function (a, b) {
		return {ctor: 'TrainStopPage', _0: a, _1: b};
	});
var _user$project$Pages$TrainRoutePage = function (a) {
	return {ctor: 'TrainRoutePage', _0: a};
};
var _user$project$Pages$TrainRoutesPage = {ctor: 'TrainRoutesPage'};
var _user$project$Pages$BusStopPage = F2(
	function (a, b) {
		return {ctor: 'BusStopPage', _0: a, _1: b};
	});
var _user$project$Pages$BusRoutePage = function (a) {
	return {ctor: 'BusRoutePage', _0: a};
};
var _user$project$Pages$BusRoutesPage = {ctor: 'BusRoutesPage'};
var _user$project$Pages$pageParser = _evancz$url_parser$UrlParser$oneOf(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$FavoritesPage,
			_evancz$url_parser$UrlParser$s('')),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$BusStopPage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('bus'),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('routes'),
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						_evancz$url_parser$UrlParser$string,
						A2(
							_evancz$url_parser$UrlParser_ops['</>'],
							_evancz$url_parser$UrlParser$s('stops'),
							_evancz$url_parser$UrlParser$string))))),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$BusRoutePage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('bus'),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('routes'),
					_evancz$url_parser$UrlParser$string))),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$BusRoutesPage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('bus'),
				_evancz$url_parser$UrlParser$s('routes'))),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$TrainStopPage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('train'),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('routes'),
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						_evancz$url_parser$UrlParser$string,
						A2(
							_evancz$url_parser$UrlParser_ops['</>'],
							_evancz$url_parser$UrlParser$s('stops'),
							_evancz$url_parser$UrlParser$string))))),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$TrainRoutePage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('train'),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('routes'),
					_evancz$url_parser$UrlParser$string))),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$Pages$TrainRoutesPage,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('train'),
				_evancz$url_parser$UrlParser$s('routes')))
		]));
var _user$project$Pages$parser = _elm_lang$navigation$Navigation$makeParser(
	function (_p1) {
		return A2(
			_elm_lang$core$Result$withDefault,
			_user$project$Pages$NotFound,
			A3(
				_evancz$url_parser$UrlParser$parse,
				_elm_lang$core$Basics$identity,
				_user$project$Pages$pageParser,
				A2(
					_elm_lang$core$String$dropLeft,
					2,
					function (_) {
						return _.hash;
					}(_p1))));
	});

var _user$project$BusRoute_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$BusRoute_Classes$cssNamespace);
var _user$project$BusRoute_View$class = _user$project$BusRoute_View$_p0.$class;
var _user$project$BusRoute_View$classList = _user$project$BusRoute_View$_p0.classList;
var _user$project$BusRoute_View$groupId = function (busStops) {
	return A2(
		_elm_lang$core$String$join,
		'-',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.id;
			},
			busStops));
};
var _user$project$BusRoute_View$viewStop = F2(
	function (routeId, _p1) {
		var _p2 = _p1;
		return A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$BusRoute_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$BusRoute_Classes$StopItem])),
					_elm_lang$html$Html_Attributes$href(
					_user$project$Pages$url(
						A2(
							_user$project$Pages$BusStopPage,
							routeId,
							_user$project$BusRoute_View$groupId(_p2._1))))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusRoute_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusRoute_Classes$StopName]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(_p2._0)
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusRoute_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusRoute_Classes$Chevron]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Icons$chevronRight]))
				]));
	});
var _user$project$BusRoute_View$filterStops = F2(
	function (searchText, stopGroups) {
		var lowerSearchText = _elm_lang$core$String$toLower(searchText);
		return A2(
			_elm_lang$core$List$filter,
			function (_p3) {
				var _p4 = _p3;
				return A2(
					_elm_lang$core$String$contains,
					lowerSearchText,
					_elm_lang$core$String$toLower(_p4._0));
			},
			stopGroups);
	});
var _user$project$BusRoute_View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$BusRoute_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$BusRoute_Classes$ControlsContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_SearchBar$view, model.searchModel, _user$project$BusRoute_Update$SearchBarMsg)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					_user$project$BusRoute_View$viewStop(model.route.id),
					A2(
						_elm_lang$core$List$sortBy,
						_elm_lang$core$Basics$fst,
						A2(
							_user$project$BusRoute_View$filterStops,
							_user$project$Components_SearchBar$getSearchValue(model.searchModel),
							_elm_lang$core$Dict$toList(model.stops)))))
			]));
};

var _user$project$BusRoutes_Classes$cssNamespace = 'BusRoutes';
var _user$project$BusRoutes_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$BusRoutes_Classes$ReloadingContainer = {ctor: 'ReloadingContainer'};
var _user$project$BusRoutes_Classes$RouteName = {ctor: 'RouteName'};
var _user$project$BusRoutes_Classes$RouteNameContainer = {ctor: 'RouteNameContainer'};
var _user$project$BusRoutes_Classes$Chevron = {ctor: 'Chevron'};
var _user$project$BusRoutes_Classes$RouteIdLabel = {ctor: 'RouteIdLabel'};
var _user$project$BusRoutes_Classes$RouteItem = {ctor: 'RouteItem'};

var _user$project$BusRoutes_Model$model = function (routes) {
	return {routes: routes, searchModel: _user$project$Components_SearchBar$model};
};
var _user$project$BusRoutes_Model$Model = F2(
	function (a, b) {
		return {routes: a, searchModel: b};
	});

var _user$project$BusRoutes_Update$load = A2(_elm_lang$core$Task$map, _user$project$BusRoutes_Model$model, _user$project$Api_Bus$getBusRoutes);
var _user$project$BusRoutes_Update$SearchBarMsg = function (a) {
	return {ctor: 'SearchBarMsg', _0: a};
};
var _user$project$BusRoutes_Update$update = F2(
	function (msg, model) {
		var _p0 = msg;
		var _p1 = A2(_user$project$Components_SearchBar$update, _p0._0, model.searchModel);
		var subModel = _p1._0;
		var subCmd = _p1._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{searchModel: subModel}),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$BusRoutes_Update$SearchBarMsg, subCmd)
		};
	});

var _user$project$BusRoutes_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$BusRoutes_Classes$cssNamespace);
var _user$project$BusRoutes_View$class = _user$project$BusRoutes_View$_p0.$class;
var _user$project$BusRoutes_View$classList = _user$project$BusRoutes_View$_p0.classList;
var _user$project$BusRoutes_View$fieldMatches = F3(
	function (searchText, accessor, summary) {
		return A2(
			_elm_lang$core$String$contains,
			searchText,
			_elm_lang$core$String$toLower(
				accessor(summary)));
	});
var _user$project$BusRoutes_View$filteredRoutes = function (model) {
	var lowerSearchText = _elm_lang$core$String$toLower(
		_user$project$Components_SearchBar$getSearchValue(model.searchModel));
	return A2(
		_elm_lang$core$List$filter,
		function (s) {
			return A3(
				_user$project$BusRoutes_View$fieldMatches,
				lowerSearchText,
				function (_) {
					return _.id;
				},
				s) || A3(
				_user$project$BusRoutes_View$fieldMatches,
				lowerSearchText,
				function (_) {
					return _.name;
				},
				s);
		},
		model.routes);
};
var _user$project$BusRoutes_View$viewRouteIdLabel = F2(
	function (routeId, color) {
		return A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$BusRoutes_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$BusRoutes_Classes$RouteIdLabel]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(routeId)
				]));
	});
var _user$project$BusRoutes_View$viewRoute = function (summary) {
	return A2(
		_elm_lang$html$Html$a,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$BusRoutes_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$BusRoutes_Classes$RouteItem])),
				_elm_lang$html$Html_Attributes$href(
				_user$project$Pages$url(
					_user$project$Pages$BusRoutePage(summary.id)))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(_user$project$BusRoutes_View$viewRouteIdLabel, summary.id, summary.color),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$BusRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$BusRoutes_Classes$RouteName]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(summary.name)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$BusRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$BusRoutes_Classes$Chevron]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Icons$chevronRight]))
			]));
};
var _user$project$BusRoutes_View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$BusRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$BusRoutes_Classes$ControlsContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_SearchBar$view, model.searchModel, _user$project$BusRoutes_Update$SearchBarMsg)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					_user$project$BusRoutes_View$viewRoute,
					_user$project$BusRoutes_View$filteredRoutes(model)))
			]));
};

var _user$project$BusStop_Classes$cssNamespace = 'BusStop';
var _user$project$BusStop_Classes$DirectionLabel = {ctor: 'DirectionLabel'};
var _user$project$BusStop_Classes$FavoriteText = {ctor: 'FavoriteText'};
var _user$project$BusStop_Classes$FavoriteIcon = {ctor: 'FavoriteIcon'};
var _user$project$BusStop_Classes$FavoriteContainer = {ctor: 'FavoriteContainer'};
var _user$project$BusStop_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$BusStop_Classes$FarPrediction = {ctor: 'FarPrediction'};
var _user$project$BusStop_Classes$MediumPrediction = {ctor: 'MediumPrediction'};
var _user$project$BusStop_Classes$NearPrediction = {ctor: 'NearPrediction'};
var _user$project$BusStop_Classes$PredictionLabel = {ctor: 'PredictionLabel'};
var _user$project$BusStop_Classes$PredictionValue = {ctor: 'PredictionValue'};
var _user$project$BusStop_Classes$RouteName = {ctor: 'RouteName'};
var _user$project$BusStop_Classes$StopName = {ctor: 'StopName'};
var _user$project$BusStop_Classes$PredictionDetails = {ctor: 'PredictionDetails'};
var _user$project$BusStop_Classes$PredictionItem = {ctor: 'PredictionItem'};
var _user$project$BusStop_Classes$ItemIcon = {ctor: 'ItemIcon'};

var _user$project$BusStop_Model$Model = F4(
	function (a, b, c, d) {
		return {isFavorited: a, busStops: b, predictions: c, routeId: d};
	});
var _user$project$BusStop_Model$model = _user$project$BusStop_Model$Model;

var _user$project$Favorites$set = F2(
	function (l, r) {
		return A2(
			_elm_lang$core$Task$mapError,
			_elm_lang$core$Basics$always('Couldn\'t save value to LocalStorage'),
			A2(_fredcy$localstorage$LocalStorage$set, l, r));
	});
var _user$project$Favorites$busStopSummaryEncoder = function (summary) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'name',
				_1: _elm_lang$core$Json_Encode$string(summary.name)
			},
				{
				ctor: '_Tuple2',
				_0: 'routeId',
				_1: _elm_lang$core$Json_Encode$string(summary.routeId)
			},
				{
				ctor: '_Tuple2',
				_0: 'stopIds',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, summary.stopIds))
			}
			]));
};
var _user$project$Favorites$BusStopSummary = F3(
	function (a, b, c) {
		return {name: a, routeId: b, stopIds: c};
	});
var _user$project$Favorites$busStopSummaryDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'stopIds',
	_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string),
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'routeId',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'name',
			_elm_lang$core$Json_Decode$string,
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Favorites$BusStopSummary))));
var _user$project$Favorites$getBusFavorites = function () {
	var parse = function (result) {
		return A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Result$andThen,
			_elm_lang$core$Json_Decode$decodeString(
				_elm_lang$core$Json_Decode$list(_user$project$Favorites$busStopSummaryDecoder)),
			result);
	};
	return A3(
		_elm_lang$core$Basics$flip,
		_elm_lang$core$Task$andThen,
		_elm_lang$core$Task$fromResult,
		A2(
			_elm_lang$core$Task$map,
			parse,
			_elm_lang$core$Task$toResult(
				A2(
					_elm_lang$core$Task$map,
					_elm_lang$core$Maybe$withDefault('[]'),
					A2(
						_elm_lang$core$Task$mapError,
						_elm_lang$core$Basics$always('Couldn\'t fetch favorites from LocalStorage'),
						_fredcy$localstorage$LocalStorage$get('busFavorites'))))));
}();
var _user$project$Favorites$saveBusFavorite = function (summary) {
	return A2(
		_user$project$Utils$andThen,
		function (jsValue) {
			return A2(
				_user$project$Favorites$set,
				'busFavorites',
				A2(_elm_lang$core$Json_Encode$encode, 0, jsValue));
		},
		A2(
			_elm_lang$core$Task$map,
			function (favorites) {
				return _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _user$project$Favorites$busStopSummaryEncoder, favorites));
			},
			A2(
				_elm_lang$core$Task$map,
				function (favorites) {
					return A2(_elm_lang$core$List_ops['::'], summary, favorites);
				},
				_user$project$Favorites$getBusFavorites)));
};
var _user$project$Favorites$removeBusFavorite = function (summary) {
	return A2(
		_user$project$Utils$andThen,
		function (jsValue) {
			return A2(
				_user$project$Favorites$set,
				'busFavorites',
				A2(_elm_lang$core$Json_Encode$encode, 0, jsValue));
		},
		A2(
			_elm_lang$core$Task$map,
			function (favorites) {
				return _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _user$project$Favorites$busStopSummaryEncoder, favorites));
			},
			A2(
				_elm_lang$core$Task$map,
				_elm_lang$core$List$filter(
					F2(
						function (x, y) {
							return !_elm_lang$core$Native_Utils.eq(x, y);
						})(summary)),
				_user$project$Favorites$getBusFavorites)));
};

var _user$project$BusStop_Update$toBusStopSummary = F2(
	function (routeId, busStops) {
		return {
			name: A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.name;
					},
					_elm_lang$core$List$head(busStops))),
			stopIds: A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.id;
				},
				busStops),
			routeId: routeId
		};
	});
var _user$project$BusStop_Update$groupStopIds = function (stops) {
	return A2(
		_elm_lang$core$String$join,
		'-',
		_elm_lang$core$List$sort(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.id;
				},
				stops)));
};
var _user$project$BusStop_Update$getPredictionsForStops = F2(
	function (routeId, stops) {
		return A2(
			_elm_lang$core$Task$map,
			_elm_lang$core$List$concat,
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					function (_p0) {
						return A2(
							_user$project$Api_Bus$getBusPredictions,
							routeId,
							function (_) {
								return _.id;
							}(_p0));
					},
					stops)));
	});
var _user$project$BusStop_Update$load = F2(
	function (routeId, stopGroupIds) {
		var stopsPredictionsToFavorites = function (_p1) {
			var _p2 = _p1;
			var _p3 = _p2._0;
			return A2(
				_elm_lang$core$Task$map,
				function (isFavorited) {
					return {ctor: '_Tuple3', _0: _p3, _1: _p2._1, _2: isFavorited};
				},
				A2(
					_elm_lang$core$Task$map,
					_elm_lang$core$List$member(
						A2(_user$project$BusStop_Update$toBusStopSummary, routeId, _p3)),
					_user$project$Favorites$getBusFavorites));
		};
		var stopIds = A2(_elm_lang$core$String$split, '-', stopGroupIds);
		var stopsTask = _elm_lang$core$Task$sequence(
			A2(
				_elm_lang$core$List$map,
				_user$project$Api_Bus$getBusStop(routeId),
				stopIds));
		var stopsToPredictions = function (stops) {
			return A2(
				_elm_lang$core$Task$map,
				function (predictions) {
					return {ctor: '_Tuple2', _0: stops, _1: predictions};
				},
				A2(
					_elm_lang$core$Task$map,
					_elm_lang$core$List$concat,
					_elm_lang$core$Task$sequence(
						A2(
							_elm_lang$core$List$map,
							_user$project$Api_Bus$getBusPredictions(routeId),
							stopIds))));
		};
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				var _p5 = _p4;
				return A4(_user$project$BusStop_Model$model, _p5._2, _p5._0, _p5._1, routeId);
			},
			A2(
				_user$project$Utils$andThen,
				stopsPredictionsToFavorites,
				A2(_user$project$Utils$andThen, stopsToPredictions, stopsTask)));
	});
var _user$project$BusStop_Update$RemoveFavoriteSucceed = {ctor: 'RemoveFavoriteSucceed'};
var _user$project$BusStop_Update$RemoveFavorite = {ctor: 'RemoveFavorite'};
var _user$project$BusStop_Update$SaveFavoriteSucceed = {ctor: 'SaveFavoriteSucceed'};
var _user$project$BusStop_Update$SaveFavorite = {ctor: 'SaveFavorite'};
var _user$project$BusStop_Update$ReloadPredictionsFinish = function (a) {
	return {ctor: 'ReloadPredictionsFinish', _0: a};
};
var _user$project$BusStop_Update$ReloadPredictionsStart = {ctor: 'ReloadPredictionsStart'};
var _user$project$BusStop_Update$NoOp = {ctor: 'NoOp'};
var _user$project$BusStop_Update$update = F2(
	function (msg, model) {
		var _p6 = msg;
		switch (_p6.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'ReloadPredictionsStart':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_user$project$Utils$performSucceed,
						_user$project$BusStop_Update$ReloadPredictionsFinish,
						A2(_user$project$BusStop_Update$getPredictionsForStops, model.routeId, model.busStops))
				};
			case 'ReloadPredictionsFinish':
				var _p7 = _p6._0;
				if (_p7.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{predictions: _p7._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'SaveFavorite':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A3(
						_elm_lang$core$Task$perform,
						_elm_lang$core$Basics$always(_user$project$BusStop_Update$NoOp),
						_elm_lang$core$Basics$always(_user$project$BusStop_Update$SaveFavoriteSucceed),
						_user$project$Favorites$saveBusFavorite(
							A2(_user$project$BusStop_Update$toBusStopSummary, model.routeId, model.busStops)))
				};
			case 'SaveFavoriteSucceed':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{isFavorited: true}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'RemoveFavorite':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A3(
						_elm_lang$core$Task$perform,
						_elm_lang$core$Basics$always(_user$project$BusStop_Update$NoOp),
						_elm_lang$core$Basics$always(_user$project$BusStop_Update$RemoveFavoriteSucceed),
						_user$project$Favorites$removeBusFavorite(
							A2(_user$project$BusStop_Update$toBusStopSummary, model.routeId, model.busStops)))
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{isFavorited: false}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _user$project$BusStop_Subscriptions$subscriptions = function (model) {
	return A2(
		_elm_lang$core$Time$every,
		60 * _elm_lang$core$Time$second,
		_elm_lang$core$Basics$always(_user$project$BusStop_Update$ReloadPredictionsStart));
};

var _user$project$BusStop_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$BusStop_Classes$cssNamespace);
var _user$project$BusStop_View$class = _user$project$BusStop_View$_p0.$class;
var _user$project$BusStop_View$classList = _user$project$BusStop_View$_p0.classList;
var _user$project$BusStop_View$viewFavoriteControl = function (isFavorited) {
	var _p1 = isFavorited ? {ctor: '_Tuple3', _0: _user$project$Icons$star, _1: 'Added to favorites', _2: _user$project$BusStop_Update$RemoveFavorite} : {ctor: '_Tuple3', _0: _user$project$Icons$starOutline, _1: 'Add to favorites', _2: _user$project$BusStop_Update$SaveFavorite};
	var icon = _p1._0;
	var favoriteText = _p1._1;
	var message = _p1._2;
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$BusStop_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$BusStop_Classes$ControlsContainer]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$BusStop_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$BusStop_Classes$FavoriteContainer])),
						_elm_lang$html$Html_Events$onClick(message)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$BusStop_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$BusStop_Classes$FavoriteIcon]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[icon])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$BusStop_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$BusStop_Classes$FavoriteText]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(favoriteText)
							]))
					]))
			]));
};
var _user$project$BusStop_View$viewDirection = function (direction) {
	return A2(
		_elm_lang$core$String$dropRight,
		5,
		_elm_lang$core$Basics$toString(direction));
};
var _user$project$BusStop_View$arrivingClass = function (inMinutes) {
	return _user$project$BusStop_View$classList(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: _user$project$BusStop_Classes$NearPrediction,
				_1: _elm_lang$core$Native_Utils.cmp(inMinutes, 5) < 1
			},
				{
				ctor: '_Tuple2',
				_0: _user$project$BusStop_Classes$MediumPrediction,
				_1: (_elm_lang$core$Native_Utils.cmp(inMinutes, 5) > 0) && (_elm_lang$core$Native_Utils.cmp(inMinutes, 12) < 1)
			},
				{
				ctor: '_Tuple2',
				_0: _user$project$BusStop_Classes$FarPrediction,
				_1: _elm_lang$core$Native_Utils.cmp(inMinutes, 12) > 0
			}
			]));
};
var _user$project$BusStop_View$viewArrivingMinutes = function (inMinutes) {
	return _elm_lang$core$Native_Utils.eq(inMinutes, 0) ? 'now' : (_elm_lang$core$Native_Utils.eq(inMinutes, 1) ? '1 min' : A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(inMinutes),
		' mins'));
};
var _user$project$BusStop_View$viewArrivingLabel = function (inMinutes) {
	return _elm_lang$core$Native_Utils.eq(inMinutes, 0) ? 'Arrives' : 'Arrives in';
};
var _user$project$BusStop_View$predictionInMinutes = function (prediction) {
	var predictedTime = _elm_lang$core$Date$toTime(prediction.predictedTime);
	var timestamp = _elm_lang$core$Date$toTime(prediction.timestamp);
	return _elm_lang$core$Basics$round((predictedTime - timestamp) / 60000);
};
var _user$project$BusStop_View$viewPrediction = F3(
	function (routeId, stop, prediction) {
		var inMinutes = _user$project$BusStop_View$predictionInMinutes(prediction);
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$BusStop_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$BusStop_Classes$PredictionItem]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusStop_Classes$ItemIcon]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Icons$bus])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusStop_Classes$PredictionDetails]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$BusStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$BusStop_Classes$RouteName]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									A2(_elm_lang$core$Basics_ops['++'], 'Route ', routeId))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$BusStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$BusStop_Classes$StopName]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(stop.name)
								]))
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusStop_Classes$PredictionValue]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$BusStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$BusStop_Classes$PredictionLabel]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_user$project$BusStop_View$viewArrivingLabel(inMinutes))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$BusStop_View$arrivingClass(inMinutes)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_user$project$BusStop_View$viewArrivingMinutes(inMinutes))
								]))
						]))
				]));
	});
var _user$project$BusStop_View$viewPredictionGroup = F3(
	function (routeId, stop, _p2) {
		var _p3 = _p2;
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$BusStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$BusStop_Classes$DirectionLabel]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(_p3._0)
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[]),
					A2(
						_elm_lang$core$List$map,
						A2(_user$project$BusStop_View$viewPrediction, routeId, stop),
						A2(_elm_lang$core$List$sortBy, _user$project$BusStop_View$predictionInMinutes, _p3._1)))
				]));
	});
var _user$project$BusStop_View$view = function (model) {
	var items = function (busStop) {
		return A2(
			_elm_lang$core$List$map,
			A2(_user$project$BusStop_View$viewPredictionGroup, model.routeId, busStop),
			_elm_lang$core$Dict$toList(
				A2(
					_elm_community$dict_extra$Dict_Extra$groupBy,
					function (_p4) {
						return _elm_lang$core$Basics$toString(
							function (_) {
								return _.routeDirection;
							}(_p4));
					},
					model.predictions)));
	};
	var _p5 = _elm_lang$core$List$head(model.busStops);
	if (_p5.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$BusStop_View$viewFavoriteControl(model.isFavorited),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[]),
					items(_p5._0))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	}
};

var _user$project$Classes$appNamespace = 'elm-cta-app';
var _user$project$Classes$PageTitleInner = {ctor: 'PageTitleInner'};
var _user$project$Classes$FailureView = {ctor: 'FailureView'};
var _user$project$Classes$ErrorMessage = {ctor: 'ErrorMessage'};
var _user$project$Classes$ReloadButton = {ctor: 'ReloadButton'};
var _user$project$Classes$ReloadButtonContainer = {ctor: 'ReloadButtonContainer'};
var _user$project$Classes$PageContainer = {ctor: 'PageContainer'};
var _user$project$Classes$PageTitle = {ctor: 'PageTitle'};
var _user$project$Classes$HeaderNavIconActive = {ctor: 'HeaderNavIconActive'};
var _user$project$Classes$HeaderNavIcon = {ctor: 'HeaderNavIcon'};
var _user$project$Classes$HeaderNav = {ctor: 'HeaderNav'};
var _user$project$Classes$AppContainer = {ctor: 'AppContainer'};

var _user$project$Components_Loading$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$Components_Classes$cssNamespace);
var _user$project$Components_Loading$class = _user$project$Components_Loading$_p0.$class;
var _user$project$Components_Loading$view = A2(
	_elm_lang$html$Html$div,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Components_Loading$class(
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Components_Classes$LoadingContainer]))
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Components_Loading$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Components_Classes$LoadingIcon]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Icons$loading]))
		]));

var _user$project$Favorites_Classes$cssNamespace = 'Favorites';
var _user$project$Favorites_Classes$EmptyMessageLink = {ctor: 'EmptyMessageLink'};
var _user$project$Favorites_Classes$EmptyMessage = {ctor: 'EmptyMessage'};
var _user$project$Favorites_Classes$Chevron = {ctor: 'Chevron'};
var _user$project$Favorites_Classes$StopName = {ctor: 'StopName'};
var _user$project$Favorites_Classes$RouteName = {ctor: 'RouteName'};
var _user$project$Favorites_Classes$FavoriteDetails = {ctor: 'FavoriteDetails'};
var _user$project$Favorites_Classes$ItemIcon = {ctor: 'ItemIcon'};
var _user$project$Favorites_Classes$ListTitle = {ctor: 'ListTitle'};
var _user$project$Favorites_Classes$FavoriteItem = {ctor: 'FavoriteItem'};

var _user$project$Favorites_Model$model = function (busFavorites) {
	return {busFavorites: busFavorites};
};
var _user$project$Favorites_Model$Model = function (a) {
	return {busFavorites: a};
};

var _user$project$Favorites_Load$load = A2(_elm_lang$core$Task$map, _user$project$Favorites_Model$model, _user$project$Favorites$getBusFavorites);

var _user$project$Favorites_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$Favorites_Classes$cssNamespace);
var _user$project$Favorites_View$class = _user$project$Favorites_View$_p0.$class;
var _user$project$Favorites_View$viewEmpty = A2(
	_elm_lang$html$Html$div,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Favorites_View$class(
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Favorites_Classes$EmptyMessage]))
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('Add some favorites by searching for ')
				])),
			A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Favorites_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Favorites_Classes$EmptyMessageLink])),
					_elm_lang$html$Html_Attributes$href(
					_user$project$Pages$url(_user$project$Pages$BusRoutesPage))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('bus stops')
				])),
			A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(' or ')
				])),
			A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Favorites_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Favorites_Classes$EmptyMessageLink])),
					_elm_lang$html$Html_Attributes$href(
					_user$project$Pages$url(_user$project$Pages$NotFound))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('train station')
				])),
			A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(' that you take frequently.')
				]))
		]));
var _user$project$Favorites_View$viewBusPage = function (summary) {
	return A2(
		_user$project$Pages$BusStopPage,
		summary.routeId,
		A2(_elm_lang$core$String$join, '-', summary.stopIds));
};
var _user$project$Favorites_View$viewBusItem = function (summary) {
	return A2(
		_elm_lang$html$Html$a,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Favorites_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Favorites_Classes$FavoriteItem])),
				_elm_lang$html$Html_Attributes$href(
				_user$project$Pages$url(
					_user$project$Favorites_View$viewBusPage(summary)))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Favorites_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Favorites_Classes$ItemIcon]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Icons$bus])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Favorites_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Favorites_Classes$FavoriteDetails]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Favorites_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Favorites_Classes$StopName]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(summary.name)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Favorites_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Favorites_Classes$RouteName]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(
								A2(_elm_lang$core$Basics_ops['++'], 'Route ', summary.routeId))
							]))
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Favorites_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Favorites_Classes$Chevron]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Icons$chevronRight]))
			]));
};
var _user$project$Favorites_View$viewBusFavorites = function (summaries) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Favorites_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Favorites_Classes$ListTitle]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Buses')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(_elm_lang$core$List$map, _user$project$Favorites_View$viewBusItem, summaries))
			]));
};
var _user$project$Favorites_View$view = function (model) {
	var children = function () {
		var _p1 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$List$isEmpty(model.busFavorites),
			_1: _elm_lang$core$List$isEmpty(
				_elm_lang$core$Native_List.fromArray(
					[]))
		};
		if (((_p1.ctor === '_Tuple2') && (_p1._0 === false)) && (_p1._1 === true)) {
			return _elm_lang$core$Native_List.fromArray(
				[
					_user$project$Favorites_View$viewBusFavorites(model.busFavorites)
				]);
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[_user$project$Favorites_View$viewEmpty]);
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		children);
};

var _user$project$TrainRoutes_Model$model = function (routes) {
	return {routes: routes};
};
var _user$project$TrainRoutes_Model$Model = function (a) {
	return {routes: a};
};

var _user$project$TrainRoutes_Update$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
	});
var _user$project$TrainRoutes_Update$load = A2(_elm_lang$core$Task$map, _user$project$TrainRoutes_Model$model, _user$project$Api_Train$getTrainRoutes);
var _user$project$TrainRoutes_Update$NoOp = {ctor: 'NoOp'};

var _user$project$TrainRoutes_Classes$cssNamespace = 'TrainRoutes';
var _user$project$TrainRoutes_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$TrainRoutes_Classes$ReloadingContainer = {ctor: 'ReloadingContainer'};
var _user$project$TrainRoutes_Classes$RouteName = {ctor: 'RouteName'};
var _user$project$TrainRoutes_Classes$RouteNameContainer = {ctor: 'RouteNameContainer'};
var _user$project$TrainRoutes_Classes$Chevron = {ctor: 'Chevron'};
var _user$project$TrainRoutes_Classes$RouteIconContainer = {ctor: 'RouteIconContainer'};
var _user$project$TrainRoutes_Classes$RouteIcon = {ctor: 'RouteIcon'};
var _user$project$TrainRoutes_Classes$RouteItem = {ctor: 'RouteItem'};

var _user$project$TrainRoutes_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$TrainRoutes_Classes$cssNamespace);
var _user$project$TrainRoutes_View$class = _user$project$TrainRoutes_View$_p0.$class;
var _user$project$TrainRoutes_View$classList = _user$project$TrainRoutes_View$_p0.classList;
var _user$project$TrainRoutes_View$viewRouteIcon = function (color) {
	return A2(
		_elm_lang$html$Html$span,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TrainRoutes_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$TrainRoutes_Classes$RouteIconContainer])),
				_elm_lang$html$Html_Attributes$style(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 'background-color', _1: color}
					]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$span,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$TrainRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TrainRoutes_Classes$RouteIcon]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Icons$train]))
			]));
};
var _user$project$TrainRoutes_View$viewRoute = function (route) {
	return A2(
		_elm_lang$html$Html$a,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TrainRoutes_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$TrainRoutes_Classes$RouteItem])),
				_elm_lang$html$Html_Attributes$href(
				_user$project$Pages$url(
					_user$project$Pages$TrainRoutePage(route.id)))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TrainRoutes_View$viewRouteIcon(route.color),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$TrainRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TrainRoutes_Classes$RouteName]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(route.name)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$TrainRoutes_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TrainRoutes_Classes$Chevron]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Icons$chevronRight]))
			]));
};
var _user$project$TrainRoutes_View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		A2(_elm_lang$core$List$map, _user$project$TrainRoutes_View$viewRoute, model.routes));
};

var _user$project$TrainRoute_Model$model = F2(
	function (route, stops) {
		return {searchModel: _user$project$Components_SearchBar$model, route: route, stops: stops};
	});
var _user$project$TrainRoute_Model$Model = F3(
	function (a, b, c) {
		return {searchModel: a, route: b, stops: c};
	});

var _user$project$TrainRoute_Update$load = function (routeId) {
	var routeToStops = function (route) {
		return A2(
			_elm_lang$core$Task$map,
			function (stops) {
				return {ctor: '_Tuple2', _0: route, _1: stops};
			},
			_user$project$Api_Train$getTrainStops(route.id));
	};
	return A2(
		_elm_lang$core$Task$map,
		function (_p0) {
			var _p1 = _p0;
			return A2(_user$project$TrainRoute_Model$model, _p1._0, _p1._1);
		},
		A2(
			_user$project$Utils$andThen,
			routeToStops,
			_user$project$Api_Train$getTrainRoute(routeId)));
};
var _user$project$TrainRoute_Update$SearchBarMsg = function (a) {
	return {ctor: 'SearchBarMsg', _0: a};
};
var _user$project$TrainRoute_Update$update = F2(
	function (msg, model) {
		var _p2 = msg;
		var _p3 = A2(_user$project$Components_SearchBar$update, _p2._0, model.searchModel);
		var subModel = _p3._0;
		var subCmd = _p3._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{searchModel: subModel}),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$TrainRoute_Update$SearchBarMsg, subCmd)
		};
	});

var _user$project$TrainRoute_Classes$cssNamespace = 'TrainRoute';
var _user$project$TrainRoute_Classes$ActiveDirectionButton = {ctor: 'ActiveDirectionButton'};
var _user$project$TrainRoute_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$TrainRoute_Classes$DirectionButton = {ctor: 'DirectionButton'};
var _user$project$TrainRoute_Classes$DirectionsSelector = {ctor: 'DirectionsSelector'};
var _user$project$TrainRoute_Classes$StopName = {ctor: 'StopName'};
var _user$project$TrainRoute_Classes$Chevron = {ctor: 'Chevron'};
var _user$project$TrainRoute_Classes$StopItem = {ctor: 'StopItem'};

var _user$project$TrainRoute_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$TrainRoute_Classes$cssNamespace);
var _user$project$TrainRoute_View$class = _user$project$TrainRoute_View$_p0.$class;
var _user$project$TrainRoute_View$classList = _user$project$TrainRoute_View$_p0.classList;
var _user$project$TrainRoute_View$viewStop = F2(
	function (routeId, stop) {
		return A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$TrainRoute_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$TrainRoute_Classes$StopItem])),
					_elm_lang$html$Html_Attributes$href(
					_user$project$Pages$url(
						A2(_user$project$Pages$TrainStopPage, routeId, stop.id)))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainRoute_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainRoute_Classes$StopName]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(stop.name)
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainRoute_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainRoute_Classes$Chevron]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Icons$chevronRight]))
				]));
	});
var _user$project$TrainRoute_View$filterStops = F2(
	function (searchText, stops) {
		var lowerSearchText = _elm_lang$core$String$toLower(searchText);
		return A2(
			_elm_lang$core$List$filter,
			function (stop) {
				return A2(
					_elm_lang$core$String$contains,
					lowerSearchText,
					_elm_lang$core$String$toLower(stop.name));
			},
			stops);
	});
var _user$project$TrainRoute_View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$TrainRoute_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TrainRoute_Classes$ControlsContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_SearchBar$view, model.searchModel, _user$project$TrainRoute_Update$SearchBarMsg)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					_user$project$TrainRoute_View$viewStop(model.route.id),
					A2(
						_elm_lang$core$List$sortBy,
						function (_) {
							return _.name;
						},
						A2(
							_user$project$TrainRoute_View$filterStops,
							_user$project$Components_SearchBar$getSearchValue(model.searchModel),
							model.stops))))
			]));
};

var _user$project$TrainStop_Model$Model = F4(
	function (a, b, c, d) {
		return {isFavorited: a, stop: b, predictions: c, routeId: d};
	});
var _user$project$TrainStop_Model$model = _user$project$TrainStop_Model$Model;

var _user$project$TrainStop_Update$load = F2(
	function (routeId, stopId) {
		var stopToPredictions = function (stop) {
			return A2(
				_elm_lang$core$Task$map,
				function (predictions) {
					return {ctor: '_Tuple2', _0: stop, _1: predictions};
				},
				A2(_user$project$Api_Train$getTrainPredictions, routeId, stopId));
		};
		return A2(
			_elm_lang$core$Task$map,
			function (_p0) {
				var _p1 = _p0;
				return A4(_user$project$TrainStop_Model$model, false, _p1._0, _p1._1, routeId);
			},
			A2(
				_user$project$Utils$andThen,
				stopToPredictions,
				A2(_user$project$Api_Train$getTrainStop, routeId, stopId)));
	});
var _user$project$TrainStop_Update$ReloadPredictionsFinish = function (a) {
	return {ctor: 'ReloadPredictionsFinish', _0: a};
};
var _user$project$TrainStop_Update$update = F2(
	function (msg, model) {
		var _p2 = msg;
		switch (_p2.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'ReloadPredictionsStart':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_user$project$Utils$performSucceed,
						_user$project$TrainStop_Update$ReloadPredictionsFinish,
						A2(_user$project$Api_Train$getTrainPredictions, model.routeId, model.stop.id))
				};
			default:
				var _p3 = _p2._0;
				if (_p3.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{predictions: _p3._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
		}
	});
var _user$project$TrainStop_Update$ReloadPredictionsStart = {ctor: 'ReloadPredictionsStart'};
var _user$project$TrainStop_Update$NoOp = {ctor: 'NoOp'};

var _user$project$TrainStop_Classes$cssNamespace = 'TrainStop';
var _user$project$TrainStop_Classes$DirectionLabel = {ctor: 'DirectionLabel'};
var _user$project$TrainStop_Classes$FavoriteText = {ctor: 'FavoriteText'};
var _user$project$TrainStop_Classes$FavoriteIcon = {ctor: 'FavoriteIcon'};
var _user$project$TrainStop_Classes$FavoriteContainer = {ctor: 'FavoriteContainer'};
var _user$project$TrainStop_Classes$ControlsContainer = {ctor: 'ControlsContainer'};
var _user$project$TrainStop_Classes$FarPrediction = {ctor: 'FarPrediction'};
var _user$project$TrainStop_Classes$MediumPrediction = {ctor: 'MediumPrediction'};
var _user$project$TrainStop_Classes$NearPrediction = {ctor: 'NearPrediction'};
var _user$project$TrainStop_Classes$PredictionLabel = {ctor: 'PredictionLabel'};
var _user$project$TrainStop_Classes$PredictionValue = {ctor: 'PredictionValue'};
var _user$project$TrainStop_Classes$RouteName = {ctor: 'RouteName'};
var _user$project$TrainStop_Classes$StopName = {ctor: 'StopName'};
var _user$project$TrainStop_Classes$PredictionDetails = {ctor: 'PredictionDetails'};
var _user$project$TrainStop_Classes$PredictionItem = {ctor: 'PredictionItem'};
var _user$project$TrainStop_Classes$ItemIcon = {ctor: 'ItemIcon'};

var _user$project$TrainStop_View$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$TrainStop_Classes$cssNamespace);
var _user$project$TrainStop_View$class = _user$project$TrainStop_View$_p0.$class;
var _user$project$TrainStop_View$classList = _user$project$TrainStop_View$_p0.classList;
var _user$project$TrainStop_View$viewFavoriteControl = function (isFavorited) {
	var _p1 = isFavorited ? {ctor: '_Tuple2', _0: _user$project$Icons$star, _1: 'Added to favorites'} : {ctor: '_Tuple2', _0: _user$project$Icons$starOutline, _1: 'Add to favorites'};
	var icon = _p1._0;
	var favoriteText = _p1._1;
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TrainStop_View$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$TrainStop_Classes$ControlsContainer]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$TrainStop_View$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TrainStop_Classes$FavoriteContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$TrainStop_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$TrainStop_Classes$FavoriteIcon]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[icon])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$TrainStop_View$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$TrainStop_Classes$FavoriteText]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(favoriteText)
							]))
					]))
			]));
};
var _user$project$TrainStop_View$arrivingClass = function (inMinutes) {
	return _user$project$TrainStop_View$classList(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: _user$project$TrainStop_Classes$NearPrediction,
				_1: _elm_lang$core$Native_Utils.cmp(inMinutes, 5) < 1
			},
				{
				ctor: '_Tuple2',
				_0: _user$project$TrainStop_Classes$MediumPrediction,
				_1: (_elm_lang$core$Native_Utils.cmp(inMinutes, 5) > 0) && (_elm_lang$core$Native_Utils.cmp(inMinutes, 12) < 1)
			},
				{
				ctor: '_Tuple2',
				_0: _user$project$TrainStop_Classes$FarPrediction,
				_1: _elm_lang$core$Native_Utils.cmp(inMinutes, 12) > 0
			}
			]));
};
var _user$project$TrainStop_View$viewArrivingMinutes = function (inMinutes) {
	return _elm_lang$core$Native_Utils.eq(inMinutes, 0) ? 'now' : (_elm_lang$core$Native_Utils.eq(inMinutes, 1) ? '1 min' : A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(inMinutes),
		' mins'));
};
var _user$project$TrainStop_View$viewArrivingLabel = function (inMinutes) {
	return _elm_lang$core$Native_Utils.eq(inMinutes, 0) ? 'Arrives' : 'Arrives in';
};
var _user$project$TrainStop_View$predictionInMinutes = function (prediction) {
	var predictedTime = _elm_lang$core$Date$toTime(prediction.predictedTime);
	var timestamp = _elm_lang$core$Date$toTime(prediction.timestamp);
	return _elm_lang$core$Basics$round((predictedTime - timestamp) / 60000);
};
var _user$project$TrainStop_View$viewPrediction = F3(
	function (routeId, stopName, prediction) {
		var inMinutes = _user$project$TrainStop_View$predictionInMinutes(prediction);
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$TrainStop_View$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$TrainStop_Classes$PredictionItem]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainStop_Classes$ItemIcon]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Icons$train])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainStop_Classes$PredictionDetails]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TrainStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$TrainStop_Classes$RouteName]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									A2(_elm_lang$core$Basics_ops['++'], 'Route ', routeId))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TrainStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$TrainStop_Classes$StopName]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(stopName)
								]))
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainStop_Classes$PredictionValue]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TrainStop_View$class(
									_elm_lang$core$Native_List.fromArray(
										[_user$project$TrainStop_Classes$PredictionLabel]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_user$project$TrainStop_View$viewArrivingLabel(inMinutes))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TrainStop_View$arrivingClass(inMinutes)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_user$project$TrainStop_View$viewArrivingMinutes(inMinutes))
								]))
						]))
				]));
	});
var _user$project$TrainStop_View$viewPredictionGroup = F3(
	function (routeId, stopName, _p2) {
		var _p3 = _p2;
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TrainStop_View$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TrainStop_Classes$DirectionLabel]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(_p3._0)
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[]),
					A2(
						_elm_lang$core$List$map,
						A2(_user$project$TrainStop_View$viewPrediction, routeId, stopName),
						A2(_elm_lang$core$List$sortBy, _user$project$TrainStop_View$predictionInMinutes, _p3._1)))
				]));
	});
var _user$project$TrainStop_View$view = function (model) {
	var items = A2(
		_elm_lang$core$List$map,
		A2(_user$project$TrainStop_View$viewPredictionGroup, model.routeId, model.stop.name),
		_elm_lang$core$Dict$toList(
			A2(
				_elm_community$dict_extra$Dict_Extra$groupBy,
				function (_) {
					return _.destination;
				},
				model.predictions)));
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TrainStop_View$viewFavoriteControl(model.isFavorited),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				items)
			]));
};

var _user$project$TrainStop_Subscriptions$subscriptions = function (model) {
	return A2(
		_elm_lang$core$Time$every,
		60 * _elm_lang$core$Time$second,
		_elm_lang$core$Basics$always(_user$project$TrainStop_Update$ReloadPredictionsStart));
};

var _user$project$Routing$title = function (model) {
	var _p0 = model;
	switch (_p0.ctor) {
		case 'BusRoutesModel':
			return 'Bus Routes';
		case 'BusRouteModel':
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Bus Route ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_p1.route.id,
					A2(_elm_lang$core$Basics_ops['++'], ' – ', _p1.route.name)));
		case 'BusStopModel':
			return A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.name;
					},
					_elm_lang$core$List$head(_p0._0.busStops)));
		case 'TrainRoutesModel':
			return 'Train Routes';
		case 'TrainRouteModel':
			return _p0._0.route.name;
		case 'TrainStopModel':
			return _p0._0.stop.name;
		case 'FavoritesModel':
			return 'Favorites';
		default:
			return 'Not Found';
	}
};
var _user$project$Routing$isCacheable = function (page) {
	var _p2 = page;
	switch (_p2.ctor) {
		case 'BusRoutesPage':
			return true;
		case 'BusRoutePage':
			return true;
		case 'BusStopPage':
			return false;
		case 'TrainRoutesPage':
			return true;
		case 'TrainRoutePage':
			return true;
		case 'TrainStopPage':
			return false;
		case 'FavoritesPage':
			return false;
		default:
			return false;
	}
};
var _user$project$Routing$NoneModel = {ctor: 'NoneModel'};
var _user$project$Routing$FavoritesModel = function (a) {
	return {ctor: 'FavoritesModel', _0: a};
};
var _user$project$Routing$TrainStopModel = function (a) {
	return {ctor: 'TrainStopModel', _0: a};
};
var _user$project$Routing$TrainRouteModel = function (a) {
	return {ctor: 'TrainRouteModel', _0: a};
};
var _user$project$Routing$TrainRoutesModel = function (a) {
	return {ctor: 'TrainRoutesModel', _0: a};
};
var _user$project$Routing$BusStopModel = function (a) {
	return {ctor: 'BusStopModel', _0: a};
};
var _user$project$Routing$BusRoutesModel = function (a) {
	return {ctor: 'BusRoutesModel', _0: a};
};
var _user$project$Routing$BusRouteModel = function (a) {
	return {ctor: 'BusRouteModel', _0: a};
};
var _user$project$Routing$load = function (page) {
	var _p3 = page;
	switch (_p3.ctor) {
		case 'BusRoutesPage':
			return A2(_elm_lang$core$Task$map, _user$project$Routing$BusRoutesModel, _user$project$BusRoutes_Update$load);
		case 'BusRoutePage':
			return A2(
				_elm_lang$core$Task$map,
				_user$project$Routing$BusRouteModel,
				_user$project$BusRoute_Update$load(_p3._0));
		case 'BusStopPage':
			return A2(
				_elm_lang$core$Task$map,
				_user$project$Routing$BusStopModel,
				A2(_user$project$BusStop_Update$load, _p3._0, _p3._1));
		case 'TrainRoutesPage':
			return A2(_elm_lang$core$Task$map, _user$project$Routing$TrainRoutesModel, _user$project$TrainRoutes_Update$load);
		case 'TrainRoutePage':
			return A2(
				_elm_lang$core$Task$map,
				_user$project$Routing$TrainRouteModel,
				_user$project$TrainRoute_Update$load(_p3._0));
		case 'TrainStopPage':
			return A2(
				_elm_lang$core$Task$map,
				_user$project$Routing$TrainStopModel,
				A2(_user$project$TrainStop_Update$load, _p3._0, _p3._1));
		case 'FavoritesPage':
			return A2(_elm_lang$core$Task$map, _user$project$Routing$FavoritesModel, _user$project$Favorites_Load$load);
		default:
			return _elm_lang$core$Task$succeed(_user$project$Routing$NoneModel);
	}
};
var _user$project$Routing$NoneMsg = {ctor: 'NoneMsg'};
var _user$project$Routing$TrainStopMsg = function (a) {
	return {ctor: 'TrainStopMsg', _0: a};
};
var _user$project$Routing$TrainRouteMsg = function (a) {
	return {ctor: 'TrainRouteMsg', _0: a};
};
var _user$project$Routing$TrainRoutesMsg = function (a) {
	return {ctor: 'TrainRoutesMsg', _0: a};
};
var _user$project$Routing$BusStopMsg = function (a) {
	return {ctor: 'BusStopMsg', _0: a};
};
var _user$project$Routing$subscriptions = function (pageModel) {
	var _p4 = pageModel;
	switch (_p4.ctor) {
		case 'BusStopModel':
			return A2(
				_elm_lang$core$Platform_Sub$map,
				_user$project$Routing$BusStopMsg,
				_user$project$BusStop_Subscriptions$subscriptions(_p4._0));
		case 'TrainStopModel':
			return A2(
				_elm_lang$core$Platform_Sub$map,
				_user$project$Routing$TrainStopMsg,
				_user$project$TrainStop_Subscriptions$subscriptions(_p4._0));
		default:
			return _elm_lang$core$Platform_Sub$none;
	}
};
var _user$project$Routing$BusRoutesMsg = function (a) {
	return {ctor: 'BusRoutesMsg', _0: a};
};
var _user$project$Routing$BusRouteMsg = function (a) {
	return {ctor: 'BusRouteMsg', _0: a};
};
var _user$project$Routing$update = F2(
	function (msg, model) {
		var _p5 = {ctor: '_Tuple2', _0: msg, _1: model};
		_v4_6:
		do {
			if (_p5.ctor === '_Tuple2') {
				switch (_p5._0.ctor) {
					case 'BusRouteMsg':
						if (_p5._1.ctor === 'BusRouteModel') {
							var _p6 = A2(_user$project$BusRoute_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p6._0;
							var subCmd = _p6._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$BusRouteModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$BusRouteMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					case 'BusRoutesMsg':
						if (_p5._1.ctor === 'BusRoutesModel') {
							var _p7 = A2(_user$project$BusRoutes_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p7._0;
							var subCmd = _p7._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$BusRoutesModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$BusRoutesMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					case 'BusStopMsg':
						if (_p5._1.ctor === 'BusStopModel') {
							var _p8 = A2(_user$project$BusStop_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p8._0;
							var subCmd = _p8._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$BusStopModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$BusStopMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					case 'TrainRoutesMsg':
						if (_p5._1.ctor === 'TrainRoutesModel') {
							var _p9 = A2(_user$project$TrainRoutes_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p9._0;
							var subCmd = _p9._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$TrainRoutesModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$TrainRoutesMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					case 'TrainRouteMsg':
						if (_p5._1.ctor === 'TrainRouteModel') {
							var _p10 = A2(_user$project$TrainRoute_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p10._0;
							var subCmd = _p10._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$TrainRouteModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$TrainRouteMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					case 'TrainStopMsg':
						if (_p5._1.ctor === 'TrainStopModel') {
							var _p11 = A2(_user$project$TrainStop_Update$update, _p5._0._0, _p5._1._0);
							var newModel = _p11._0;
							var subCmd = _p11._1;
							return {
								ctor: '_Tuple2',
								_0: _user$project$Routing$TrainStopModel(newModel),
								_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Routing$TrainStopMsg, subCmd)
							};
						} else {
							break _v4_6;
						}
					default:
						break _v4_6;
				}
			} else {
				break _v4_6;
			}
		} while(false);
		return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
	});
var _user$project$Routing$view = function (pageModel) {
	var _p12 = pageModel;
	switch (_p12.ctor) {
		case 'BusRouteModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$BusRouteMsg,
				_user$project$BusRoute_View$view(_p12._0));
		case 'BusRoutesModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$BusRoutesMsg,
				_user$project$BusRoutes_View$view(_p12._0));
		case 'BusStopModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$BusStopMsg,
				_user$project$BusStop_View$view(_p12._0));
		case 'TrainRoutesModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$TrainRoutesMsg,
				_user$project$TrainRoutes_View$view(_p12._0));
		case 'TrainRouteModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$TrainRouteMsg,
				_user$project$TrainRoute_View$view(_p12._0));
		case 'TrainStopModel':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$Routing$TrainStopMsg,
				_user$project$TrainStop_View$view(_p12._0));
		case 'FavoritesModel':
			return _user$project$Favorites_View$view(_p12._0);
		default:
			return _elm_lang$html$Html$text('');
	}
};

var _user$project$Main$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$Classes$appNamespace);
var _user$project$Main$class = _user$project$Main$_p0.$class;
var _user$project$Main$classList = _user$project$Main$_p0.classList;
var _user$project$Main$viewNavIcon = F3(
	function (currentPage, pageForIcon, icon) {
		return A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Main$classList(
					_elm_lang$core$Native_List.fromArray(
						[
							{ctor: '_Tuple2', _0: _user$project$Classes$HeaderNavIcon, _1: true},
							{
							ctor: '_Tuple2',
							_0: _user$project$Classes$HeaderNavIconActive,
							_1: _elm_lang$core$Native_Utils.eq(currentPage, pageForIcon)
						}
						])),
					_elm_lang$html$Html_Attributes$href(
					_user$project$Pages$url(pageForIcon))
				]),
			_elm_lang$core$Native_List.fromArray(
				[icon]));
	});
var _user$project$Main$Model = F3(
	function (a, b, c) {
		return {pageModel: a, currentPage: b, cache: c};
	});
var _user$project$Main$RetryLoad = {ctor: 'RetryLoad'};
var _user$project$Main$viewFailure = A2(
	_elm_lang$html$Html$div,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Main$class(
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Classes$FailureView]))
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Main$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Classes$ErrorMessage]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('Something went wrong!')
				])),
			A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Main$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Classes$ReloadButtonContainer]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Main$class(
							_elm_lang$core$Native_List.fromArray(
								[_user$project$Classes$ReloadButton])),
							_elm_lang$html$Html_Events$onClick(_user$project$Main$RetryLoad)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Retry')
						]))
				]))
		]));
var _user$project$Main$LoadPageFinish = F2(
	function (a, b) {
		return {ctor: 'LoadPageFinish', _0: a, _1: b};
	});
var _user$project$Main$init = function (page) {
	return {
		ctor: '_Tuple2',
		_0: {pageModel: _user$project$Utils$Loading, currentPage: page, cache: _elm_lang$core$Dict$empty},
		_1: A2(
			_user$project$Utils$performSucceed,
			_user$project$Main$LoadPageFinish(
				_user$project$Routing$isCacheable(page)),
			_user$project$Routing$load(page))
	};
};
var _user$project$Main$urlUpdate = F2(
	function (page, model) {
		var _p1 = A2(
			_elm_lang$core$Dict$get,
			_user$project$Pages$url(page),
			model.cache);
		if (_p1.ctor === 'Just') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{
						pageModel: _user$project$Utils$Success(_p1._0),
						currentPage: page
					}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{pageModel: _user$project$Utils$Loading, currentPage: page}),
				_1: A2(
					_user$project$Utils$performSucceed,
					_user$project$Main$LoadPageFinish(
						_user$project$Routing$isCacheable(page)),
					_user$project$Routing$load(page))
			};
		}
	});
var _user$project$Main$PageMsg = F2(
	function (a, b) {
		return {ctor: 'PageMsg', _0: a, _1: b};
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p2 = msg;
		switch (_p2.ctor) {
			case 'LoadPageFinish':
				var _p3 = _p2._1;
				if (_p3.ctor === 'Ok') {
					var _p4 = _p3._0;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								pageModel: _user$project$Utils$Success(_p4),
								cache: _p2._0 ? A3(
									_elm_lang$core$Dict$insert,
									_user$project$Pages$url(model.currentPage),
									_p4,
									model.cache) : model.cache
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								pageModel: _user$project$Utils$Failure(_p3._0)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				}
			case 'RetryLoad':
				return _user$project$Main$init(model.currentPage);
			default:
				var _p5 = {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.eq(_p2._0, model.currentPage),
					_1: model.pageModel
				};
				if (((_p5.ctor === '_Tuple2') && (_p5._0 === true)) && (_p5._1.ctor === 'Success')) {
					var _p6 = A2(_user$project$Routing$update, _p2._1, _p5._1._0);
					var pageModel = _p6._0;
					var pageCmd = _p6._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								pageModel: _user$project$Utils$Success(pageModel)
							}),
						_1: A2(
							_elm_lang$core$Platform_Cmd$map,
							_user$project$Main$PageMsg(model.currentPage),
							pageCmd)
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
		}
	});
var _user$project$Main$viewPage = function (model) {
	var _p7 = model.pageModel;
	switch (_p7.ctor) {
		case 'Success':
			var _p8 = _p7._0;
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Main$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Classes$PageTitle]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Main$class(
										_elm_lang$core$Native_List.fromArray(
											[_user$project$Classes$PageTitleInner]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text(
										_user$project$Routing$title(_p8))
									]))
							])),
						A2(
						_elm_lang$html$Html_App$map,
						_user$project$Main$PageMsg(model.currentPage),
						_user$project$Routing$view(_p8))
					]));
		case 'Failure':
			return _user$project$Main$viewFailure;
		default:
			return _user$project$Components_Loading$view;
	}
};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Main$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Classes$AppContainer]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$header,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Classes$HeaderNav]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A3(_user$project$Main$viewNavIcon, model.currentPage, _user$project$Pages$FavoritesPage, _user$project$Icons$star),
						A3(_user$project$Main$viewNavIcon, model.currentPage, _user$project$Pages$BusRoutesPage, _user$project$Icons$bus),
						A3(_user$project$Main$viewNavIcon, model.currentPage, _user$project$Pages$TrainRoutesPage, _user$project$Icons$train)
					])),
				A2(
				_elm_lang$html$Html$main$,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Classes$PageContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$viewPage(model)
					]))
			]));
};
var _user$project$Main$subscriptions = function (model) {
	var _p9 = model.pageModel;
	if (_p9.ctor === 'Success') {
		return A2(
			_elm_lang$core$Platform_Sub$map,
			_user$project$Main$PageMsg(model.currentPage),
			_user$project$Routing$subscriptions(_p9._0));
	} else {
		return _elm_lang$core$Platform_Sub$none;
	}
};
var _user$project$Main$main = {
	main: A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$Pages$parser,
		{init: _user$project$Main$init, update: _user$project$Main$update, urlUpdate: _user$project$Main$urlUpdate, view: _user$project$Main$view, subscriptions: _user$project$Main$subscriptions})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

