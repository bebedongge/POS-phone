var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-60a131a2-default-6f3d177a-0'])
Z([3,'data-v-13a11ef0-default-64aa1557-0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d652d7be'])
Z([a,[3,'_view d652d7be HMmessages '],[[4],[[5],[[5],[[5],[[5],[[2,'?:'],[[7],[3,'isShow']],[1,'show'],[1,'hide']]],[[2,'?:'],[[7],[3,'isStatus']],[1,'status'],[1,'']]],[[2,'?:'],[[7],[3,'isTransparent']],[1,'transparent'],[1,'']]],[[2,'?:'],[[7],[3,'isTransparentH5']],[1,'transparentH5'],[1,'']]]]])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'background']]],[1,';']]])
Z([[2,'!='],[[7],[3,'icon']],[1,'none']])
Z([[7],[3,'closeButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3613cfe6'])
Z([3,'_view data-v-0f237ad2'])
Z([[2,'!='],[[7],[3,'total']],[1,null]])
Z([3,'handleProxy'])
Z([3,'支付成功!欢迎下次光临~'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3613cfe6-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'3613cfe6-4'])
Z([3,'109bbe61'])
Z([3,'状态'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ef5f0012'])
Z([3,'_view data-v-2cc2fc00 mianlist'])
Z([[2,'!='],[[7],[3,'retada']],[1,null]])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2360d67b'])
Z([[2,'!='],[[7],[3,'activeGoods']],[1,null]])
Z([3,'_view data-v-e8220496'])
Z([3,'max-height: 860.833333rpx; overflow: auto;'])
Z([[2,'!='],[[6],[[6],[[7],[3,'activeGoods']],[3,'activity_msg_yes_list']],[3,'length']],[1,0]])
Z([[2,'!='],[[6],[[6],[[7],[3,'activeGoods']],[3,'activity_msg_no_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'63b88a92'])
Z([3,'_view data-v-913e9366'])
Z([3,'width: 100%; min-height: 312.5rpx; max-height: 412.5rpx; background: #f64c5e; margin-top: -1.041666rpx;'])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[7],[3,'freedata']],[1,null]],[[2,'!='],[[7],[3,'freedata']],[1,'']]],[[2,'!='],[[6],[[7],[3,'freedata']],[3,'length']],[1,0]]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'29c10a0f'])
Z([3,'_view 29c10a0f lvv-popup'])
Z([[2,'!'],[[7],[3,'popshow']]])
Z([3,'default'])
Z([3,'handleProxy'])
Z([a,[3,'_view 29c10a0f lvv-popupcontent '],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'top']],[[2,'!'],[[7],[3,'hideanimation']]]],[1,'.pt'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'left']],[[2,'!'],[[7],[3,'hideanimation']]]],[1,'.pl'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'right']],[[2,'!'],[[7],[3,'hideanimation']]]],[1,'.pr'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'bottom']],[[2,'!'],[[7],[3,'hideanimation']]]],[1,'.pb'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'top']],[[7],[3,'hideanimation']]],[1,'.ht'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'left']],[[7],[3,'hideanimation']]],[1,'.hl'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'right']],[[7],[3,'hideanimation']]],[1,'.hr'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'position']],[1,'bottom']],[[7],[3,'hideanimation']]],[1,'.hb'],[1,'']]]]]]]]]])
Z([[7],[3,'$k']])
Z([1,'29c10a0f-2'])
Z(z[4])
Z([3,'_view 29c10a0f realcontent'])
Z(z[6])
Z([1,'29c10a0f-1'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'64aa1557'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'64aa1557-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-13a11ef0-default-64aa1557-0']]])
Z([3,'29c10a0f'])
Z([3,'left'])
Z([3,'lvvpopref'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b9967f7'])
Z([3,'_view data-v-4491d8cc'])
Z([3,'width: 583.333333rpx; height: 125rpx; background:#ffffff; margin: 31.25rpx auto 0rpx; position: relative;'])
Z([[2,'!='],[[7],[3,'retada']],[1,null]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'34d389cf'])
Z([[2,'&&'],[[2,'!='],[[7],[3,'ipdataimg']],[1,null]],[[2,'!='],[[7],[3,'ipdataimg']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'109bbe61'])
Z([3,'handleProxy'])
Z([a,[3,'_view 109bbe61 xy-dialog '],[[4],[[5],[[2,'?:'],[[7],[3,'isShow']],[1,'xy-dialog__show'],[1,'']]]]])
Z([[7],[3,'$k']])
Z([1,'109bbe61-2'])
Z([3,'default'])
Z([3,'_view 109bbe61 xy-dialog__container'])
Z([[2,'>'],[[6],[[7],[3,'title']],[3,'length']],[1,0]])
Z([3,'_view 109bbe61 xy-dialog__content'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'text-align:'],[[7],[3,'textalign']]],[1,';']]])
Z([[7],[3,'content']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
Z([[7],[3,'isShowCancel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'688084c7'])
Z([[2,'!='],[[7],[3,'subCategoryLists']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'632e69e9'])
Z([3,'_view data-v-e3777d56 content'])
Z([3,'index'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'632e69e9-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'64aa1557'])
Z([[2,'=='],[[7],[3,'gonngda']],[1,null]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'632e69e9-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ef5f0012'])
Z([3,'handleProxy'])
Z(z[8])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'632e69e9-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'632e69e9-2'])
Z([3,'d652d7be'])
Z([3,'HMmessages'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'632e69e9-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b9967f7'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'632e69e9-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2360d67b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'632e69e9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'61a469d7'])
Z([3,'_view 61a469d7'])
Z([3,'login'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'61a469d7-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'61a469d7-5'])
Z([3,'688084c7'])
Z([3,'xyzBottomCategory'])
Z(z[3])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'61a469d7-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([1,'61a469d7-6'])
Z([3,'d652d7be'])
Z([3,'HMmessages'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'61a469d7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6f3d177a'])
Z([3,'_view data-v-60a131a2'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6f3d177a-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-60a131a2-default-6f3d177a-0']]])
Z([3,'29c10a0f'])
Z([3,'left'])
Z([3,'lvvpopref'])
Z([[2,'!='],[[7],[3,'total']],[1,null]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6f3d177a-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3613cfe6'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6f3d177a-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'34d389cf'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6f3d177a-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'63b88a92'])
Z([3,'handleProxy'])
Z([3,'支付成功!欢迎下次光临~'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6f3d177a-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'6f3d177a-10'])
Z([3,'109bbe61'])
Z([3,'状态'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6f3d177a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/lvv-popup/lvv-popup.vue.wxml','/components/cash-change/cash-change.vue.wxml','/components/upgrade-bounced/upgrade-bounced.vue.wxml','/components/free-coupons/free-coupons.vue.wxml','/components/xy-dialog/xy-dialog.vue.wxml','/components/new-head/new-head.vue.wxml','/components/commodity-pool/commodity-pool.vue.wxml','/components/HM-messages/HM-messages.vue.wxml','/components/rob-stamps/rob-stamps.vue.wxml','/components/conditions-satisfaction/conditions-satisfaction.vue.wxml','/components/xyz-category/xyz-bottom-category.vue.wxml','/common/slots.wxml','./components/HM-messages/HM-messages.vue.wxml','./components/cash-change/cash-change.vue.wxml','./components/commodity-pool/commodity-pool.vue.wxml','./components/conditions-satisfaction/conditions-satisfaction.vue.wxml','./components/free-coupons/free-coupons.vue.wxml','./components/lvv-popup/lvv-popup.vue.wxml','./components/new-head/new-head.vue.wxml','./components/rob-stamps/rob-stamps.vue.wxml','./components/upgrade-bounced/upgrade-bounced.vue.wxml','./components/xy-dialog/xy-dialog.vue.wxml','./components/xyz-category/xyz-bottom-category.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/shoppingcart/shoppingcart.vue.wxml','./pages/shoppingcart/shoppingcart.wxml','./shoppingcart.vue.wxml'];d_[x[0]]={}
d_[x[0]]["data-v-60a131a2-default-6f3d177a-0"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':data-v-60a131a2-default-6f3d177a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["data-v-13a11ef0-default-64aa1557-0"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':data-v-13a11ef0-default-64aa1557-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
_ai(oB,x[5],e_,x[0],5,2)
_ai(oB,x[6],e_,x[0],6,2)
_ai(oB,x[7],e_,x[0],7,2)
_ai(oB,x[8],e_,x[0],8,2)
_ai(oB,x[9],e_,x[0],9,2)
_ai(oB,x[10],e_,x[0],10,2)
_ai(oB,x[11],e_,x[0],11,2)
_ai(oB,x[12],e_,x[0],12,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10],x[11],x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["d652d7be"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[13]+':d652d7be'
r.wxVkey=b
gg.f=$gdc(f_["./components/HM-messages/HM-messages.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
cs.push("./components/HM-messages/HM-messages.vue.wxml:view:1:27")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
cs.push("./components/HM-messages/HM-messages.vue.wxml:view:1:259")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
cs.push("./components/HM-messages/HM-messages.vue.wxml:view:1:627")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[13]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["3613cfe6"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[14]+':3613cfe6'
r.wxVkey=b
gg.f=$gdc(f_["./components/cash-change/cash-change.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
cs.push("./components/cash-change/cash-change.vue.wxml:view:1:84")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/cash-change/cash-change.vue.wxml:view:1:516")
cs.pop()
}
var oD=_v()
_(oB,oD)
cs.push("./components/cash-change/cash-change.vue.wxml:template:1:1897")
var fE=_oz(z,8,e,s,gg)
var cF=_gd(x[14],fE,e_,d_)
if(cF){
var hG=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[14],1,2111)
cs.pop()
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[14]].i
_ai(fE,x[5],e_,x[14],1,1)
fE.pop()
return r
}
e_[x[14]]={f:m2,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[15]]={}
d_[x[15]]["ef5f0012"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[15]+':ef5f0012'
r.wxVkey=b
gg.f=$gdc(f_["./components/commodity-pool/commodity-pool.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./components/commodity-pool/commodity-pool.vue.wxml:view:1:343")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/commodity-pool/commodity-pool.vue.wxml:view:1:1847")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./components/commodity-pool/commodity-pool.vue.wxml:view:1:3182")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[15]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["2360d67b"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[16]+':2360d67b'
r.wxVkey=b
gg.f=$gdc(f_["./components/conditions-satisfaction/conditions-satisfaction.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/conditions-satisfaction/conditions-satisfaction.vue.wxml:view:1:617")
cs.push("./components/conditions-satisfaction/conditions-satisfaction.vue.wxml:view:1:617")
var xC=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
cs.push("./components/conditions-satisfaction/conditions-satisfaction.vue.wxml:view:1:734")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
cs.push("./components/conditions-satisfaction/conditions-satisfaction.vue.wxml:view:1:2565")
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(oB,xC)
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[16]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
d_[x[17]]["63b88a92"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[17]+':63b88a92'
r.wxVkey=b
gg.f=$gdc(f_["./components/free-coupons/free-coupons.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
cs.push("./components/free-coupons/free-coupons.vue.wxml:view:1:272")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
cs.push("./components/free-coupons/free-coupons.vue.wxml:view:1:420")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
cs.push("./components/free-coupons/free-coupons.vue.wxml:view:1:668")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[17]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
d_[x[18]]["29c10a0f"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[18]+':29c10a0f'
r.wxVkey=b
gg.f=$gdc(f_["./components/lvv-popup/lvv-popup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
cs.push("./components/lvv-popup/lvv-popup.vue.wxml:view:1:62")
var oB=_mz(z,'view',['class',1,'hidden',1],[],e,s,gg)
cs.push("./components/lvv-popup/lvv-popup.vue.wxml:view:1:286")
var xC=_mz(z,'view',['bindtap',4,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/lvv-popup/lvv-popup.vue.wxml:view:1:806")
var oD=_mz(z,'view',['catchtap',8,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./components/lvv-popup/lvv-popup.vue.wxml:template:1:923")
var cF=_oz(z,13,e,s,gg)
var hG=_gd(x[18],cF,e_,d_)
if(hG){
var oH=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[18],1,981)
cs.pop()
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[18]]["default"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[18]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/lvv-popup/lvv-popup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oJ=e_[x[18]].i
_ai(oJ,x[12],e_,x[18],1,1)
oJ.pop()
return r
}
e_[x[18]]={f:m6,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[19]]={}
d_[x[19]]["64aa1557"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[19]+':64aa1557'
r.wxVkey=b
gg.f=$gdc(f_["./components/new-head/new-head.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./components/new-head/new-head.vue.wxml:template:1:867")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[19],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[19],1,1021)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var aL=e_[x[19]].i
_ai(aL,x[1],e_,x[19],1,1)
aL.pop()
return r
}
e_[x[19]]={f:m7,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[20]]={}
d_[x[20]]["0b9967f7"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[20]+':0b9967f7'
r.wxVkey=b
gg.f=$gdc(f_["./components/rob-stamps/rob-stamps.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
cs.push("./components/rob-stamps/rob-stamps.vue.wxml:view:1:803")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
cs.push("./components/rob-stamps/rob-stamps.vue.wxml:image:1:953")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
cs.push("./components/rob-stamps/rob-stamps.vue.wxml:view:1:1080")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[20]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
d_[x[21]]["34d389cf"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[21]+':34d389cf'
r.wxVkey=b
gg.f=$gdc(f_["./components/upgrade-bounced/upgrade-bounced.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/upgrade-bounced/upgrade-bounced.vue.wxml:image:1:207")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[21]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
d_[x[22]]["109bbe61"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[22]+':109bbe61'
r.wxVkey=b
gg.f=$gdc(f_["./components/xy-dialog/xy-dialog.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:view:1:62")
var oB=_mz(z,'view',['catchtouchmove',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:view:1:309")
var xC=_n('view')
_rz(z,xC,'class',6,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:view:1:359")
cs.pop()
}
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:view:1:453")
var cF=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,10,e,s,gg)){hG.wxVkey=1
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:block:1:548")
cs.pop()
}
else{hG.wxVkey=2
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:block:1:646")
var oH=_v()
_(hG,oH)
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:template:1:661")
var cI=_oz(z,12,e,s,gg)
var oJ=_gd(x[22],cI,e_,d_)
if(oJ){
var lK=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[22],1,719)
cs.pop()
cs.pop()
}
hG.wxXCkey=1
cs.pop()
_(xC,cF)
var fE=_v()
_(xC,fE)
if(_oz(z,13,e,s,gg)){fE.wxVkey=1
cs.push("./components/xy-dialog/xy-dialog.vue.wxml:view:1:825")
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["default"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[22]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/xy-dialog/xy-dialog.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oP=e_[x[22]].i
_ai(oP,x[12],e_,x[22],1,1)
oP.pop()
return r
}
e_[x[22]]={f:m10,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[23]]={}
d_[x[23]]["688084c7"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[23]+':688084c7'
r.wxVkey=b
gg.f=$gdc(f_["./components/xyz-category/xyz-bottom-category.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/xyz-category/xyz-bottom-category.vue.wxml:scroll-view:1:413")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[23]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
d_[x[24]]["632e69e9"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[24]+':632e69e9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:354")
var oB=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/index/index.vue.wxml:template:1:409")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[24],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[24],1,480)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:503")
cs.pop()
}
else{xC.wxVkey=2
cs.push("./pages/index/index.vue.wxml:view:1:932")
var oH=_v()
_(xC,oH)
cs.push("./pages/index/index.vue.wxml:template:1:976")
var cI=_oz(z,7,e,s,gg)
var oJ=_gd(x[24],cI,e_,d_)
if(oJ){
var lK=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[24],1,1047)
cs.pop()
cs.pop()
}
var aL=_v()
_(oB,aL)
cs.push("./pages/index/index.vue.wxml:template:1:2532")
var tM=_oz(z,13,e,s,gg)
var eN=_gd(x[24],tM,e_,d_)
if(eN){
var bO=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[24],1,2731)
cs.pop()
var oP=_v()
_(oB,oP)
cs.push("./pages/index/index.vue.wxml:template:1:2754")
var xQ=_oz(z,16,e,s,gg)
var oR=_gd(x[24],xQ,e_,d_)
if(oR){
var fS=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[24],1,2825)
cs.pop()
var cT=_v()
_(oB,cT)
cs.push("./pages/index/index.vue.wxml:template:1:2916")
var hU=_oz(z,18,e,s,gg)
var oV=_gd(x[24],hU,e_,d_)
if(oV){
var cW=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[24],1,2987)
cs.pop()
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var fS=e_[x[24]].i
_ai(fS,x[6],e_,x[24],1,1)
_ai(fS,x[7],e_,x[24],1,56)
_ai(fS,x[8],e_,x[24],1,123)
_ai(fS,x[9],e_,x[24],1,184)
_ai(fS,x[10],e_,x[24],1,243)
fS.pop()
fS.pop()
fS.pop()
fS.pop()
fS.pop()
return r
}
e_[x[24]]={f:m12,j:[],i:[],ti:[x[6],x[7],x[8],x[9],x[10]],ic:[]}
d_[x[25]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hU=e_[x[25]].i
_ai(hU,x[26],e_,x[25],1,1)
var oV=_v()
_(r,oV)
cs.push("./pages/index/index.wxml:template:2:6")
var cW=_oz(z,1,e,s,gg)
var oX=_gd(x[25],cW,e_,d_)
if(oX){
var lY=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[25],2,18)
cs.pop()
hU.pop()
return r
}
e_[x[25]]={f:m13,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["61a469d7"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[27]+':61a469d7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
cs.push("./pages/login/login.vue.wxml:view:1:158")
var oB=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/login/login.vue.wxml:template:1:2017")
var oD=_oz(z,7,e,s,gg)
var fE=_gd(x[27],oD,e_,d_)
if(fE){
var cF=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[27],1,2196)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/login/login.vue.wxml:template:1:2219")
var oH=_oz(z,14,e,s,gg)
var cI=_gd(x[27],oH,e_,d_)
if(cI){
var oJ=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[27],1,2418)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var t1=e_[x[27]].i
_ai(t1,x[11],e_,x[27],1,1)
_ai(t1,x[8],e_,x[27],1,71)
t1.pop()
t1.pop()
return r
}
e_[x[27]]={f:m14,j:[],i:[],ti:[x[11],x[8]],ic:[]}
d_[x[28]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var b3=e_[x[28]].i
_ai(b3,x[29],e_,x[28],1,1)
var o4=_v()
_(r,o4)
cs.push("./pages/login/login.wxml:template:2:6")
var x5=_oz(z,1,e,s,gg)
var o6=_gd(x[28],x5,e_,d_)
if(o6){
var f7=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[28],2,18)
cs.pop()
b3.pop()
return r
}
e_[x[28]]={f:m15,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["6f3d177a"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[30]+':6f3d177a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shoppingcart/shoppingcart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:view:1:334")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:template:1:782")
var fE=_oz(z,3,e,s,gg)
var cF=_gd(x[30],fE,e_,d_)
if(cF){
var hG=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[30],1,936)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,6,e,s,gg)){xC.wxVkey=1
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:text:1:1351")
cs.pop()
}
var oH=_v()
_(oB,oH)
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:template:1:3310")
var cI=_oz(z,8,e,s,gg)
var oJ=_gd(x[30],cI,e_,d_)
if(oJ){
var lK=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[30],1,3381)
cs.pop()
var aL=_v()
_(oB,aL)
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:template:1:3475")
var tM=_oz(z,10,e,s,gg)
var eN=_gd(x[30],tM,e_,d_)
if(eN){
var bO=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[30],1,3546)
cs.pop()
var oP=_v()
_(oB,oP)
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:template:1:3642")
var xQ=_oz(z,12,e,s,gg)
var oR=_gd(x[30],xQ,e_,d_)
if(oR){
var fS=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[30],1,3713)
cs.pop()
var cT=_v()
_(oB,cT)
cs.push("./pages/shoppingcart/shoppingcart.vue.wxml:template:1:3779")
var hU=_oz(z,18,e,s,gg)
var oV=_gd(x[30],hU,e_,d_)
if(oV){
var cW=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[30],1,3994)
cs.pop()
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var h9=e_[x[30]].i
_ai(h9,x[1],e_,x[30],1,1)
_ai(h9,x[2],e_,x[30],1,58)
_ai(h9,x[3],e_,x[30],1,119)
_ai(h9,x[4],e_,x[30],1,188)
_ai(h9,x[5],e_,x[30],1,251)
h9.pop()
h9.pop()
h9.pop()
h9.pop()
h9.pop()
return r
}
e_[x[30]]={f:m16,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5]],ic:[]}
d_[x[31]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var cAB=e_[x[31]].i
_ai(cAB,x[32],e_,x[31],1,1)
var oBB=_v()
_(r,oBB)
cs.push("./pages/shoppingcart/shoppingcart.wxml:template:2:6")
var lCB=_oz(z,1,e,s,gg)
var aDB=_gd(x[31],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[31],2,18)
cs.pop()
cAB.pop()
return r
}
e_[x[31]]={f:m17,j:[],i:[],ti:[x[32]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/shoppingcart/shoppingcart"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#0e2223","navigationStyle":"custom"},"usingComponents":{},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"pos手机版","compilerVersion":"1.8.2"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"首页","titleNView":false};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{},"navigationBarTitleText":"登录","titleNView":false};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/shoppingcart/shoppingcart.json']={"usingComponents":{},"navigationBarTitleText":"结算","titleNView":false};
__wxAppCode__['pages/shoppingcart/shoppingcart.wxml']=$gwx('./pages/shoppingcart/shoppingcart.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5ca4":function(t,e,n){"use strict";n.r(e);var o=n("c129"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},"69df":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("f3d3")),o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}var a={namespaced:!0,state:{goodlist:null,intodata:null,member:null,robStamps:null,robshow:!1,settlementInitialization:null,paytype:null,cashshow:!1,zfbstime:null,upgrade:null,couponing:null,upgradeshow:!1,couponingshow:!1,meetRequirement:!1,meetlist:null},getters:{retada:function(t){return t}},mutations:{meetlist:function(t,e){t.meetlist=e},meetRequirement:function(t,e){t.meetRequirement=e},upgrade:function(t,e){t.upgrade=e},couponing:function(t,e){t.couponing=e},upgradeshow:function(t,e){t.upgradeshow=e},couponingshow:function(t,e){t.couponingshow=e},cashshow:function(t,e){t.cashshow=e},paytype:function(t,e){t.paytype=e},settlementInitialization:function(t,e){t.settlementInitialization=e},robStamps:function(t,e){t.robStamps=e},goodlist:function(t,e){t.goodlist=e},intodata:function(t,e){t.intodata=e},member:function(t,e){t.member=e}},actions:{}};e.default=a},"79e9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("f3d3")),o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}var a={namespaced:!0,state:{name:"张三11111"},getters:{retada:function(t){return t}},mutations:{},actions:{}};e.default=a},a0d1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={config:{baseUrl:"",headers:{},dataType:"json",responseType:"text"},interceptor:{request:null,response:null},request:function(e){var n=this;return new Promise(function(o,a){var u=null;e.url=n.config.baseUrl+e.url,e.complete=function(t){var e=t.statusCode;if(t.config=u,n.interceptor.response){var i=n.interceptor.response(t);i&&(t=i)}200===e?o(t):a(t)},u=Object.assign({},n.config,e),u.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(u),t.request(u)})},get:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="GET",this.request(n)},post:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="POST",this.request(n)},put:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="PUT",this.request(n)},delete:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="DELETE",this.request(n)}};e.default=n}).call(this,n("6e42")["default"])},ae3c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("f3d3")),a=s(n("2f62")),u=s(n("79e9")),i=s(n("e8e7")),r=s(n("69df"));function s(t){return t&&t.__esModule?t:{default:t}}o.default.use(a.default);var l=new a.default.Store({modules:{mo1:u.default,login:i.default,mian:r.default},state:{inde:"测试",requestUrl:"http://47.96.112.195:8085"},getters:{indext:function(t){return t}},mutations:{},actions:{}});e.default=l},c129:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},cc2b:function(t,e,n){"use strict";(function(t){n("34b9");var e=i(n("f3d3")),o=i(n("f280")),a=i(n("ae3c")),u=i(n("a0d1"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=a.default,e.default.config.productionTip=!1,e.default.prototype.$http=u.default,u.default.config.baseUrl="http://47.96.112.195:8085/",u.default.interceptor.request=function(e){t.showLoading({title:"",mask:!0}),e.header={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Authorization:"Bearer "+a.default.state.login.logindata.accessToken}},u.default.interceptor.response=function(e){if(t.hideLoading(),200==e.statusCode)return 0==e.data.status?e:(console.log("拦截器信息："+JSON.stringify(e.data.message)),t.showToast({title:e.data.message,icon:"none",duration:2e3}),{data:null});400==e.statusCode?t.showToast({title:"请求错误(400)",icon:"none",duration:2e3}):401==e.statusCode?(t.showToast({title:"未授权，请重新登录(401)",icon:"none",duration:2e3}),t.navigateTo({url:"../login/login"})):403==e.statusCode?t.showToast({title:"拒绝访问(403)",icon:"none",duration:2e3}):404==e.statusCode?t.showToast({title:"请求出错(404)",icon:"none",duration:2e3}):408==e.statusCode?t.showToast({title:"请求超时(408)",icon:"none",duration:2e3}):500==e.statusCode?t.showToast({title:"服务器错误(500)",icon:"none",duration:2e3}):501==e.statusCode?t.showToast({title:"服务未实现(501)",icon:"none",duration:2e3}):502==e.statusCode?t.showToast({title:"网络错误(502)",icon:"none",duration:2e3}):504==e.statusCode?t.showToast({title:"网络超时(504)",icon:"none",duration:2e3}):505==e.statusCode?t.showToast({title:"HTTP版本不受支持(505)",icon:"none",duration:2e3}):t.showToast({title:"连接出错",icon:"none",duration:2e3})},o.default.mpType="app";var l=new e.default(r({},o.default));l.$mount()}).call(this,n("6e42")["default"])},d59e:function(t,e,n){"use strict";var o=n("e738"),a=n.n(o);a.a},e738:function(t,e,n){},e8e7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("f3d3")),o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}var a={namespaced:!0,state:{mechanismData:"",saveMechanism:"",logindata:"",uerInfo:{},hasLogin:!1},getters:{retada:function(t){return t}},mutations:{logindata:function(t,e){t.logindata=e},mechanismData:function(t,e){t.mechanismData=e},saveMechanism:function(t,e){t.saveMechanism=e},login:function(e,n){e.hasLogin=!0,e.uerInfo=n,t.setStorage({key:"uerInfo",data:n})},logout:function(e){e.hasLogin=!1,e.uerInfo={},t.removeStorage({key:"uerInfo"})}},actions:{}};e.default=a}).call(this,n("6e42")["default"])},f280:function(t,e,n){"use strict";n.r(e);var o=n("5ca4");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("d59e");var u,i,r=n("2877"),s=Object(r["a"])(o["default"],u,i,!1,null,null,null);e["default"]=s.exports}},[["cc2b","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"15a9":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{id:"newhead"}},[n("view",[n("image",{staticClass:"httle",attrs:{src:"../../static/index/brush_3.png",mode:""}}),n("image",{staticClass:"log",attrs:{src:"../../static/login/logo.png",mode:"",eventid:"64aa1557-0"},on:{click:t.toshow}}),n("text",{staticClass:"title"},[t._v("POS手机版")]),null==t.pattype?n("button",{staticClass:"sasao",attrs:{type:"primary",eventid:"64aa1557-2"},on:{click:t.sao}},[t._v("扫一扫")]):n("button",{staticClass:"sasao",staticStyle:{right:"190.416666rpx"},attrs:{type:"primary",eventid:"64aa1557-1"},on:{click:t.sao}},[t._v("扫一扫")])],1),n("lvv-popup",{ref:"lvvpopref",attrs:{position:"left",mpcomid:"64aa1557-0"}},[n("view",{staticStyle:{background:"#f5f3ef",width:"458.333333rpx",height:"100%",position:"absolute",left:"0"}},[n("view",{staticClass:"acctionf"},[n("view",{staticStyle:{width:"100%",height:"155.416666rpx",background:"#0e2223","text-align":"center","line-height":"155.416666rpx"}},[n("image",{staticStyle:{width:"216.666666rpx",height:"83.333333rpx","margin-top":"52.083333rpx"},attrs:{src:"../../static/login/logo.png",mode:""}})]),n("view",{staticClass:"lvvtitle"},[t._v("门店： "+t._s(t.memberlist.departmentName))]),n("view",{staticStyle:{width:"458.333333rpx",height:"1.041666rpx",background:"#eae6e2"}}),n("view",{staticClass:"lvvtitle"},[t._v("账号: "+t._s(t.memberlist.userCode))]),n("view",{staticStyle:{width:"458.333333rpx",height:"1.041666rpx",background:"#eae6e2"}}),n("button",{staticClass:"btn",attrs:{type:"primary",eventid:"64aa1557-3"},on:{click:t.qieh}},[t._v("切换用户")]),n("view",{staticClass:"lvvtitle",staticStyle:{position:"fixed",bottom:"5.25rpx","text-align":"center",width:"458.333333rpx","font-size":"25rpx"}},[t._v("新仙C果版权所有")])],1)])])],1)},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},1928:function(t,e,n){"use strict";n.r(e);var o=n("e513"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},2877:function(t,e,n){"use strict";function o(t,e,n,o,r,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return o})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return S}),n.d(e,"mapState",function(){return T}),n.d(e,"mapMutations",function(){return j}),n.d(e,"mapGetters",function(){return P}),n.d(e,"mapActions",function(){return E}),n.d(e,"createNamespacedHelpers",function(){return I});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var o=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:o});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[o].concat(t.init):o,n.call(this,t)}}function o(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,l);var f=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return void 0;p(t.concat(o),e.getChild(o),n.modules[o])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){p([],this.root,t)},f.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=new u(e,n);if(0===t.length)this.root=r;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){o.register(t.concat(r),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&S(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=o,g(this,r,[],this._modules.root),_(this,r),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function m(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,i={};a(r,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&C(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),d.nextTick(function(){return o.$destroy()}))}function g(t,e,n,o,r){var i=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a]=o),!i&&!r){var s=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){d.set(s,c,o.state)})}var u=o.context=b(t,a,n);o.forEachMutation(function(e,n){var o=a+n;w(t,o,e,u)}),o.forEachAction(function(e,n){var o=e.root?n:a+n,r=e.handler||e;x(t,o,r,u)}),o.forEachGetter(function(e,n){var o=a+n;O(t,o,e,u)}),o.forEachChild(function(o,i){g(t,e,n.concat(i),o,r)})}function b(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=A(n,o,r),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:o?t.commit:function(n,o,r){var i=A(n,o,r),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return $(t,e)}},state:{get:function(){return k(t.state,n)}}}),r}function $(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function w(t,e,n,o){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,o.state,e)})}function x(t,e,n,o){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var i=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,r);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function O(t,e,n,o){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)})}function C(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function A(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function S(t){d&&t===d||(d=t,o(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var o=this,r=A(t,e,n),i=r.type,a=r.payload,s=(r.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,o.state)}))},h.prototype.dispatch=function(t,e){var n=this,o=A(t,e),r=o.type,i=o.payload,a={type:r,payload:i},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return m(t,this._subscribers)},h.prototype.subscribeAction=function(t){return m(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),y(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var T=N(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=D(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),j=N(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;o=i.context.commit}return"function"===typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n}),P=N(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[r]},n[o].vuex=!0}),n}),E=N(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"===typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n}),I=function(t){return{mapState:T.bind(null,t),mapGetters:P.bind(null,t),mapMutations:j.bind(null,t),mapActions:E.bind(null,t)}};function M(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var o=t._modulesNamespaceMap[n];return o}var B={Store:h,install:S,version:"3.0.1",mapState:T,mapMutations:j,mapGetters:P,mapActions:E,createNamespacedHelpers:I};e["default"]=B},3158:function(t,e,n){"use strict";var o=n("90ac"),r=n.n(o);r.a},"34b9":function(t,e,n){},"49da":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{directives:[{name:"show",rawName:"v-show",value:t.popshow,expression:"popshow"}],staticClass:"lvv-popup"},[n("view",{staticClass:"lvv-popupmark",attrs:{eventid:"29c10a0f-0"},on:{click:t.close}}),n("view",{staticClass:"lvv-popupcontent",class:"top"!=t.position||t.hideanimation?"left"!=t.position||t.hideanimation?"right"!=t.position||t.hideanimation?"bottom"!=t.position||t.hideanimation?"top"==t.position&&t.hideanimation?".ht":"left"==t.position&&t.hideanimation?".hl":"right"==t.position&&t.hideanimation?".hr":"bottom"==t.position&&t.hideanimation?".hb":"":".pb":".pr":".pl":".pt",attrs:{eventid:"29c10a0f-2"},on:{click:t.close}},[n("view",{staticClass:"realcontent",attrs:{eventid:"29c10a0f-1"},on:{click:function(t){t.stopPropagation()}}},[t._t("default",null,{mpcomid:"29c10a0f-0"})],2)])])},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"6a92":function(t,e,n){"use strict";n.r(e);var o=n("e495"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=tt,e.createPage=rt,e.createComponent=at,e.default=void 0;var o=r(n("f3d3"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function l(t){return"[object Object]"===a.call(t)}function f(t,e){return s.call(t,e)}function p(){}var d=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,h=/^create|Manager$/,v=/^on/;function m(t){return h.test(t)}function y(t){return d.test(t)}function _(t){return v.test(t)}function g(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function b(t){return!y(t)&&!_(t)}function $(t,e){return b(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(o)):g(new Promise(function(n,r){e.apply(void 0,[Object.assign({},t,{success:n,fail:r})].concat(o)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var w=1e-4,x=750,O=!1,C=0,k=0;function A(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,o=t.windowWidth;C=o,k=n,O="ios"===e}function S(t,e){if(0===C&&A(),t=Number(t),0===t)return 0;var n=t/x*(e||C);return n<0&&(n=-n),n=Math.floor(n+w),0===n?1!==k&&O?.5:1:t<0?-n:n}var T={},j=["success","fail","cancel","complete"];function P(t,e,n){return function(o){return e(I(t,o,n))}}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(l(e)){var i=!0===r?e:{};for(var a in c(n)&&(n=n(e,i)||{}),e)if(f(n,a)){var s=n[a];c(s)&&(s=s(e[a],e,i)),s?u(s)?i[s]=e[a]:l(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else j.includes(a)?i[a]=P(t,e[a],o):r||(i[a]=e[a]);return i}return c(e)&&(e=P(t,e,o)),e}function I(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(T.returnValue)&&(e=T.returnValue(t,e)),E(t,e,n,{},o)}function M(t,e){if(f(T,t)){var n=T[t];return n?function(e,o){var r=n;c(n)&&(r=n(e)),e=E(t,e,r.args,r.returnValue);var i=wx[r.name||t](e,o);return y(t)?I(t,i,r.returnValue,m(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var N=Object.create(null),D=["subscribePush","unsubscribePush","onPush","offPush","share"];function B(t){return function(e){var n=e.fail,o=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(r),c(o)&&o(r)}}function R(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}D.forEach(function(t){N[t]=B(t)});var V=Object.freeze({requireNativePlugin:R}),L=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function H(t){var e=t.$mp[t.mpType];L.forEach(function(n){f(e,n)&&(t[n]=e[n])})}function U(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach(function(e){t[e]=function(t){var o=this;n?setTimeout(function(){return o.$vm.__call_hook(e,t)}):this.$vm.__call_hook(e,t)}})}function W(t,e){var n=t.data||{},o=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return Object.keys(o).forEach(function(t){f(n,t)||(n[t]=o[t])}),n}var F=[String,Number,Boolean,Object,Array,null];function z(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function G(t){var e={vueSlots:{type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}};return Array.isArray(t)?t.forEach(function(t){e[t]={type:null,observer:z(t)}}):l(t)&&Object.keys(t).forEach(function(n){var o=t[n];if(l(o)){var r=o["default"];c(r)&&(r=r()),e[n]={type:F.includes(o.type)?o.type:null,value:r,observer:z(n)}}else e[n]={type:F.includes(o)?o:null,observer:z(n)}}),e}function J(t){return t.stopPropagation=p,t.preventDefault=p,t.target=t.target||{},t.detail=t.detail||{},t.mp=t,t.target=Object.assign({},t.target,t.detail),t}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;if(n&&!e.length)return t.detail;var o=[];return e.forEach(function(e){"$event"===e?o.push(n?t.detail[0]:t):o.push(e)}),o}var K="~",X="^";function Q(t){var e=this;t=J(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var o=t.type;n.forEach(function(n){var r=n[0],i=n[1],a=r.charAt(0)===X;r=a?r.slice(1):r;var s=r.charAt(0)===K;r=s?r.slice(1):r,i&&o===r&&i.forEach(function(n){var o=e.$vm[n[0]];if(!c(o))throw new Error(" _vm.".concat(n[0]," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,q(t,n[1],a))})})}function Y(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t=Object.create(null),n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm});var o=e.selectAllComponents(".vue-ref-in-for");return o.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm)}),t}})}var Z=["onShow","onHide","onError","onPageNotFound"];function tt(t){t=t.default||t,o.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(Y(this),H(this)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){var n=this;this.$vm=new o.default(Object.assign(t,{mpType:"app",mpInstance:this})),this.$vm.$mount(),setTimeout(function(){return n.$vm.__call_hook("onLaunch",e)})}};return U(e,Z,!0),App(e),t}function et(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function nt(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}var ot=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function rt(t){t=t.default||t;var e={data:W(t,o.default.prototype),onLoad:function(e){this.$vm=new o.default(Object.assign(t,{mpType:"page",mpInstance:this})),this.$vm.__call_hook("created"),this.$vm.__call_hook("onLoad",e),this.$vm.$mount()},onReady:function(){this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},onUnload:function(){this.$vm.__call_hook("onUnload"),this.$vm.$destroy()},__e:Q,__l:nt};return U(e,ot),Page(e)}function it(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.$vm){var o=Object.assign({mpType:"component",mpInstance:t,propsData:t.properties},n);t.$vm=new e(o);var r=t.properties.vueSlots;if(Array.isArray(r)&&r.length){var i=Object.create(null);r.forEach(function(t){i[t]=!0}),t.$vm.$scopedSlots=t.$vm.$slots=i}t.$vm.$mount()}}function at(t){t=t.default||t;var e=G(t.props),n=o.default.extend(t),r={options:{multipleSlots:!0,addGlobalClass:!0},data:W(t,o.default.prototype),properties:e,lifetimes:{attached:function(){it(this,n)},ready:function(){it(this,n),et(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:Q,__l:nt}};return Component(r)}var st={};"undefined"!==typeof Proxy?st=new Proxy({},{get:function(t,e){return"upx2px"===e?S:V[e]?$(e,V[e]):f(wx,e)||f(T,e)?$(e,M(e,wx[e])):void 0}}):(st.upx2px=S,Object.keys(V).forEach(function(t){st[t]=$(t,V[t])}),Object.keys(wx).forEach(function(t){(f(wx,t)||f(T,t))&&(st[t]=$(t,M(t,wx[t])))}));var ct=st,ut=ct;e.default=ut},"71fc":function(t,e,n){"use strict";var o=n("f020"),r=n.n(o);r.a},"80bd":function(t,e,n){"use strict";var o=n("b77b"),r=n.n(o);r.a},8291:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"HM-messages",data:function(){return{isTransparent:!1,isTransparentH5:!1,isStatus:!1,isShow:!1,content:"",icon:"none",background:"",closeButton:!1,closeButtonColor:"",fontColor:"",iconColor:"",textAlign:"",data:null}},mounted:function(){this.$emit("complete")},methods:{clickMessage:function(){this.$emit("clickMessage",this.data)},Timer:function(){},show:function(t,e){var n=this;t&&"string"==typeof t?this.checkTitleNView(function(){n.Timer&&clearTimeout(n.Timer);var o={remind:"#5a89ff",error:"#ef6160",danger:"#ff0000",success:"#0ec469",disable:"#8c56a0",help:"#5fb5f5"},r={icon:"remind",content:t,duration:2e3,background:"rgba(238,238,238,0.8)",closeButton:!1,closeButtonColor:"#555555",iconColor:o["remind"],fontColor:"#555555",textAlign:"flex-start",data:null};e&&!e.hasOwnProperty("iconColor")&&e.hasOwnProperty("icon")&&(e.iconColor=o[e.icon]),e=e?n.extend(r,e):r,n.isShow?(n.close(),setTimeout(function(){n.setSetting(e)},150)):n.setSetting(e)}):console.log("HM-messages: 组件方法调用错误,请检查方法参数")},checkTitleNView:function(e){var n=this,o=plus.webview.getTopWebview().getStyle().titleNView;o.type?"transparent"==o.type?(this.isStatus=!0,t.createSelectorQuery().selectViewport().scrollOffset(function(t){t.scrollTop>0?n.isTransparent=!0:(n.isStatus=!0,n.isTransparent=!1),e()}).exec()):e():(this.isStatus=!0,e())},setSetting:function(t){var e=this;this.content=t.content,this.icon=t.icon,this.background=t.background,this.closeButton=t.closeButton,this.closeButtonColor=t.closeButtonColor,this.fontColor=t.fontColor,this.iconColor=t.iconColor,this.textAlign=t.textAlign,this.data=t.data,this.isShow=!0,t.duration>0&&(this.Timer=setTimeout(function(){e.close()},t.duration))},close:function(){this.isShow=!1,this.Timer&&clearTimeout(this.Timer)},extend:function(t,e){for(var n in e)t[n]=e[n];return t}}};e.default=n}).call(this,n("6e42")["default"])},"8a33":function(t,e,n){"use strict";n.r(e);var o=n("15a9"),r=n("1928");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("3158");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"13a11ef0",null);e["default"]=s.exports},"90ac":function(t,e,n){},a263:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"HMmessages",class:[t.isShow?"show":"hide",t.isStatus?"status":"",t.isTransparent?"transparent":"",t.isTransparentH5?"transparentH5":""],style:{backgroundColor:t.background}},["none"!=t.icon?n("view",{staticClass:"ico"},[n("view",{staticClass:"icon",class:t.icon,style:{color:t.iconColor}})]):t._e(),n("view",{staticClass:"content",style:{color:t.fontColor,justifyContent:t.textAlign},attrs:{eventid:"d652d7be-0"},on:{tap:t.clickMessage}},[t._v(t._s(t.content))]),t.closeButton?n("view",{staticClass:"closeBtn",style:{color:t.closeButtonColor},attrs:{eventid:"d652d7be-1"},on:{tap:t.close}},[n("view",{staticClass:"icon close"})]):t._e()])},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},b0ce:function(t,e,n){"use strict";n.r(e);var o=n("f3d3"),r=n.n(o);function i(t,e,n){var o,r=t.$options[e];if("onError"===e&&r&&(r=[r]),"function"===typeof r&&(r=[r]),r)for(var a=0,s=r.length;a<s;a++)o=r[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),o}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new r.a(t);this.$vm=n;var o=n.$root;o.__wxExparserNodeId__=this.__wxExparserNodeId__,o.__wxWebviewId__=this.__wxWebviewId__,o.$mp||(o.$mp={});var i=o.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b26a:function(t,e,n){"use strict";n.r(e);var o=n("49da"),r=n("6a92");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("80bd");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},b77b:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}t.exports=n},d8cf:function(t,e,n){"use strict";n.r(e);var o=n("a263"),r=n("df2b");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("71fc");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},df2b:function(t,e,n){"use strict";n.r(e);var o=n("8291"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},e495:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{position:{type:String,default:null}},data:function(){return{popshow:!1,hideanimation:!1}},methods:{show:function(){this.popshow=!0},close:function(){var t=this;t.hideanimation=!0,null==t.position?t.popshow=!1:setTimeout(function(){t.popshow=!1,t.hideanimation=!1},100)}}};e.default=o},e513:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("b26a"));function r(t){return t&&t.__esModule?t:{default:t}}var i={components:{lvvPopup:o.default},data:function(){return{titles:"dddddddddddd",pattype:null}},onLoad:function(e){var n=this;t.login({provider:"weixin",success:function(t){console.log("获取用户信息："+JSON.stringify(t)),n.pattype="WEIXIN"}})},computed:{paytyped:function(){return console.log("获取平台数据："+this.pattype),this.pattype},memberlist:function(){return this.$store.state.login.logindata},runningtype:function(){var e="";switch(t.getSystemInfoSync().platform){case"android":console.log("运行Android上"),e="android";break;case"ios":console.log("运行iOS上"),e="iOS";break;default:console.log("运行在开发者工具上"),e="CX";break}return e}},methods:{toshow:function(){this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},qieh:function(){try{t.removeStorageSync("storage_key"),t.navigateTo({url:"../login/login"})}catch(e){}},sao:function(){var e=this;t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result);var n=t.result;"HY"==n.substring(0,2)&&16==n.length?e.memberLogin(t.result):"HD"==n.substring(0,2)?e.stealStamps(t.result):e.ObtainCommodity(t.result)},fail:function(t){console.log("扫描二维码失败："+t)}})},ObtainCommodity:function(t){var e=this,n=this;console.log("扫描之前各参数：Authorization："+n.$store.state.login.logindata.accessToken+",barCode:"+t);var o="";null!=this.$store.state.mian.intodata&&0!=this.$store.state.mian.intodata.data.list.length&&(o=this.$store.state.mian.intodata.data.list[0].pos_ticket_code);var r="";null!=this.$store.state.mian.member&&(r=this.$store.state.mian.member.data.memberCode),this.$http.post("pc/posRestingOrder/addGoodsToRestingOrderByBarCode",{barCode:t,posTicketCode:o,state:10,posTicketType:10,restingOrderType:10,memberCode:r}).then(function(t){0==t.data.status&&(e.$store.commit("mian/goodlist",t.data),e.initi())})},initi:function(){var t=this;this.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,posTicketCode:""}).then(function(e){t.$store.commit("mian/intodata",e.data)})},settlementInitialization:function(t){var e=this;this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:this.$store.state.mian.paytype[0].id,state:10,posTicketCode:t,posTicketType:10,restingOrderType:10}).then(function(t){e.$store.commit("mian/settlementInitialization",t.data.data)})},memberLogin:function(e){var n=this,o="";null!=this.$store.state.mian.intodata&&(o=0==this.$store.state.mian.intodata.data.list.length?"":this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/pos/ticketSearch",{search:e,posTicketCode:o,level2TypeId:"",pageSize:10,pageIndex:1}).then(function(e){0==e.data.status&&(t.showToast({title:"会员登录成功",icon:"success",duration:2e3}),n.$store.commit("mian/member",e.data),n.initi())})},stealStamps:function(t){var e=this,n="";null!=this.$store.state.mian.intodata&&(n=0==this.$store.state.mian.intodata.data.list.length?"":this.$store.state.mian.intodata.data.list[0].pos_ticket_code);var o="",r="",i="";null!=this.$store.state.mian.member&&(o=this.$store.state.mian.member.data.memberCode,r=this.$store.state.mian.member.data.memberSearch,i=this.$store.state.mian.member.data.memberId),this.$http.post("pc/pos/ticketSearch",{search:t,posTicketCode:n,posTicketType:10,memberCode:o,level2TypeId:"",pageSize:10,pageIndex:1,state:10,memberSearch:r,memberId:i}).then(function(t){console.log("抢券接口数据："+t.status+"|||||"+JSON.stringify(t)),0==t.data.status&&(e.$store.commit("mian/robStamps",t.data.data),e.$store.state.mian.robshow=!0,console.log("抢券数据："+JSON.stringify(e.$store.state.mian.robStamps)))})}},mounted:function(){}};e.default=i}).call(this,n("6e42")["default"])},f020:function(t,e,n){},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,o,r){if(o!==r&&void 0!==o)if(null==o||null==r||typeof o!==typeof r)e[n]=o;else if(Array.isArray(o)&&Array.isArray(r))if(o.length===r.length)for(var i=0,a=o.length;i<a;++i)t(e,n+"["+i+"]",o[i],r[i]);else e[n]=o;else if("object"===typeof o&&"object"===typeof r){var s=Object.keys(o),c=Object.keys(r);if(s.length!==c.length)e[n]=o;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=o;else for(i=0,a=s.length;i<a;++i){var l=s[i];t(e,n+"."+l,o[l],r[l])}}}else o!==r&&(e[n]=o)}function o(e,n){for(var o=Object.keys(e),r={},i=0,a=o.length;i<a;++i){for(var s=o[i],c=s.split("."),u=n[c[0]],l=1,f=c.length;l<f&&void 0!==u;++l)u=u[c[l]];t(r,s,e[s],u)}return r}function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function f(t){return"[object Object]"===l.call(t)}function p(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),o=t.split(","),r=0;r<o.length;r++)n[o[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var y=m("key,ref,slot,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function b(t,e){return g.call(t,e)}function $(t){var e=Object.create(null);return function(n){var o=e[n];return o||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),O=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/([^-])([A-Z])/g,k=$(function(t){return t.replace(C,"$1-$2").replace(C,"$1-$2").toLowerCase()});function A(t,e){function n(n){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,o=new Array(n);while(n--)o[n]=t[n+e];return o}function T(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&T(e,t[n]);return e}function P(t,e,n){}var E=function(t,e,n){return!1},I=function(t){return t};function M(t,e){var o=u(t),r=u(e);if(!o||!r)return!o&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B="data-server-rendered",R=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:P,parsePlatformTagName:I,mustUseProp:E,_lifecycleHooks:V},H=Object.freeze({});function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0})}var F=/[^\w.$]/;function z(t){if(!F.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G=P;function J(t,e,n){if(L.errorHandler)L.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var q,K="__proto__"in{},X="undefined"!==typeof window,Q=["mpvue-runtime"].join(),Y=(Q&&/msie|trident/.test(Q),Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),Z=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)),tt=(Q&&/chrome\/\d+/.test(Q),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===q&&(q=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),q},ot=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&rt(Symbol)&&"undefined"!==typeof Reflect&&rt(Reflect.ownKeys),st=function(){var t,e=[],o=!1;function r(){o=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&rt(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(r).catch(a),Z&&setTimeout(P)}}else t=function(){setTimeout(r,0)};return function(r,i){var a;if(e.push(function(){if(r)try{r.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),o||(o=!0,t()),!r&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){_(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var lt=[];function ft(t){ut.target&&lt.push(ut.target),ut.target=t}function pt(){ut.target=lt.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(ht,t,function(){var n=[],o=arguments.length;while(o--)n[o]=arguments[o];var r,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),mt={shouldConvert:!0},yt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=K?_t:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function _t(t,e,n){t.__proto__=e}function gt(t,e,n){for(var o=0,r=n.length;o<r;o++){var i=n[o];W(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof yt?n=t.__ob__:mt.shouldConvert&&!nt()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,o,r){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!r&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var o=s?s.call(t):n;e===o||e!==e&&o!==o||(c?c.call(t,e):n=e,u=!r&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var o=t.__ob__;return t._isVue||o&&o.vmCount?n:o?($t(o.value,e,n),o.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,o=t.length;n<o;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}yt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},yt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var Ct=L.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,o,r,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],o=t[n],r=e[n],b(t,n)?f(o)&&f(r)&&kt(o,r):wt(t,n,r);return t}function At(t,e,n){return n?t||e?function(){var o="function"===typeof e?e.call(n):e,r="function"===typeof t?t.call(n):void 0;return o?kt(o,r):r}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Tt(t,e){var n=Object.create(t||null);return e?T(n,e):n}Ct.data=function(t,e,n){return n?At(t,e,n):e&&"function"!==typeof e?t:At.call(this,t,e)},V.forEach(function(t){Ct[t]=St}),R.forEach(function(t){Ct[t+"s"]=Tt}),Ct.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var o in T(n,t),e){var r=n[o],i=e[o];r&&!Array.isArray(r)&&(r=[r]),n[o]=r?r.concat(i):Array.isArray(i)?i:[i]}return n},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return T(n,t),T(n,e),n},Ct.provide=At;var jt=function(t,e){return void 0===e?t:e};function Pt(t){var e=t.props;if(e){var n,o,r,i={};if(Array.isArray(e)){n=e.length;while(n--)o=e[n],"string"===typeof o&&(r=x(o),i[r]={type:null})}else if(f(e))for(var a in e)o=e[a],r=x(a),i[r]=f(o)?o:{type:o};t.props=i}}function Et(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},o=0;o<e.length;o++)n[e[o]]=e[o]}function It(t){var e=t.directives;if(e)for(var n in e){var o=e[n];"function"===typeof o&&(e[n]={bind:o,update:o})}}function Mt(t,e,n){"function"===typeof e&&(e=e.options),Pt(e),Et(e),It(e);var o=e.extends;if(o&&(t=Mt(t,o,n)),e.mixins)for(var r=0,i=e.mixins.length;r<i;r++)t=Mt(t,e.mixins[r],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(o){var r=Ct[o]||jt;s[o]=r(t[o],e[o],n,o)}return s}function Nt(t,e,n,o){if("string"===typeof n){var r=t[e];if(b(r,n))return r[n];var i=x(n);if(b(r,i))return r[i];var a=O(i);if(b(r,a))return r[a];var s=r[n]||r[i]||r[a];return s}}function Dt(t,e,n,o){var r=e[t],i=!b(n,t),a=n[t];if(Vt(Boolean,r.type)&&(i&&!b(r,"default")?a=!1:Vt(String,r.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Bt(o,r,t);var s=mt.shouldConvert;mt.shouldConvert=!0,bt(a),mt.shouldConvert=s}return a}function Bt(t,e,n){if(b(e,"default")){var o=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof o&&"Function"!==Rt(e.type)?o.call(t):o}}function Rt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Rt(e)===Rt(t);for(var n=0,o=e.length;n<o;n++)if(Rt(e[n])===Rt(t))return!0;return!1}var Lt=function(t,e,n,o,r,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=r,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ht={child:{}};Ht.child.get=function(){return this.componentInstance},Object.defineProperties(Lt.prototype,Ht);var Ut=function(t){void 0===t&&(t="");var e=new Lt;return e.text=t,e.isComment=!0,e};function Wt(t){return new Lt(void 0,void 0,void 0,String(t))}function Ft(t){var e=new Lt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),o=0;o<e;o++)n[o]=Ft(t[o]);return n}var Gt,Jt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var o="!"===t.charAt(0);return t=o?t.slice(1):t,{name:t,once:n,capture:o,passive:e}});function qt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var o=n.slice(),r=0;r<o.length;r++)o[r].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,o,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),r(s)||(r(c)?(r(s.fns)&&(s=t[a]=qt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)r(t[a])&&(u=Jt(a),o(u.name,e[a],u.capture))}function Xt(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var l=k(u);Qt(a,c,u,l,!0)||Qt(a,s,u,l,!1)}return a}}function Qt(t,e,n,o,r){if(i(e)){if(b(e,n))return t[n]=e[n],r||delete e[n],!0;if(b(e,o))return t[n]=e[o],r||delete e[o],!0}return!1}function Yt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Zt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,o,s,u=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(s=u[u.length-1],Array.isArray(o)?u.push.apply(u,ee(o,(e||"")+"_"+n)):c(o)?te(s)?s.text+=String(o):""!==o&&u.push(Wt(o)):te(o)&&te(s)?u[u.length-1]=Wt(s.text+o.text):(a(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function oe(t,e,n,o,r){var i=Ut();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:o,tag:r},i}function re(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var o=t.contexts=[n],s=!0,c=function(){for(var t=0,e=o.length;t<e;t++)o[t].$forceUpdate()},l=D(function(n){t.resolved=ne(n,e),s||c()}),f=D(function(e){i(t.errorComp)&&(t.error=!0,c())}),p=t(l,f);return u(p)&&("function"===typeof p.then?r(t.resolved)&&p.then(l,f):i(p.component)&&"function"===typeof p.component.then&&(p.component.then(l,f),i(p.error)&&(t.errorComp=ne(p.error,e)),i(p.loading)&&(t.loadingComp=ne(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){r(t.resolved)&&r(t.error)&&(t.loading=!0,c())},p.delay||200)),i(p.timeout)&&setTimeout(function(){r(t.resolved)&&f(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Gt.$once(t,e):Gt.$on(t,e)}function ce(t,e){Gt.$off(t,e)}function ue(t,e,n){Gt=t,Kt(e,n||{},se,ce,t)}function le(t){var e=/^hook:/;t.prototype.$on=function(t,n){var o=this,r=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)o.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function o(){n.$off(t,o),e.apply(n,arguments)}return o.fn=e,n.$on(t,o),n},t.prototype.$off=function(t,e){var n=this,o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return o}var a,s=o._events[t];if(!s)return o;if(1===arguments.length)return o._events[t]=null,o;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return o},t.prototype.$emit=function(t){var e=this,o=e._events[t];if(o){o=o.length>1?S(o):o;for(var r=S(arguments,1),i=0,a=o.length;i<a;i++)try{o[i].apply(e,r)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function fe(t,e){var n={};if(!t)return n;for(var o=[],r=0,i=t.length;r<i;r++){var a=t[r];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)o.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return o.every(pe)||(n.default=o),n}function pe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function me(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var o=n.$el,r=n._vnode,i=he;he=n,n._vnode=t,r?n.$el=n.__patch__(r,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ye(t,e,n){var o;return t.$el=e,t.$options.render||(t.$options.render=Ut),we(t,"beforeMount"),o=function(){t._update(t._render(),n)},t._watcher=new De(t,o,P),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function _e(t,e,n,o,r){var i=!!(r||t.$options._renderChildren||o.data.scopedSlots||t.$scopedSlots!==H);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=r,t.$attrs=o.data&&o.data.attrs,t.$listeners=n,e&&t.$options.props){mt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Dt(u,t.$options.props,e,t)}mt.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,l)}i&&(t.$slots=fe(r,o.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var o=t.$options[e];if(o)for(var r=0,i=o.length;r<i;r++)try{o[r].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],Ce={},ke=!1,Ae=!1,Se=0;function Te(){Se=xe.length=Oe.length=0,Ce={},ke=Ae=!1}function je(){var t,e;for(Ae=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Ce[e]=null,t.run();var n=Oe.slice(),o=xe.slice();Te(),Ie(n),Pe(o),ot&&L.devtools&&ot.emit("flush")}function Pe(t){var e=t.length;while(e--){var n=t[e],o=n.vm;o._watcher===n&&o._isMounted&&we(o,"updated")}}function Ee(t){t._inactive=!1,Oe.push(t)}function Ie(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Me(t){var e=t.id;if(null==Ce[e]){if(Ce[e]=!0,Ae){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(je))}}var Ne=0,De=function(t,e,n,o){this.vm=t,t._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};De.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Re(t),pt(),this.cleanupDeps()}return t},De.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},De.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var o=this.depIds;this.depIds=this.newDepIds,this.newDepIds=o,this.newDepIds.clear(),o=this.deps,this.deps=this.newDeps,this.newDeps=o,this.newDeps.length=0},De.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Me(this)},De.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},De.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},De.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},De.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Be=new it;function Re(t){Be.clear(),Ve(t,Be)}function Ve(t,e){var n,o,r=Array.isArray(t);if((r||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){n=t.length;while(n--)Ve(t[n],e)}else{o=Object.keys(t),n=o.length;while(n--)Ve(t[o[n]],e)}}}var Le={enumerable:!0,configurable:!0,get:P,set:P};function He(t,e,n){Le.get=function(){return this[e][n]},Le.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Le)}function Ue(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?Fe(t):bt(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Qe(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},o=t._props={},r=t.$options._propKeys=[],i=!t.$parent;mt.shouldConvert=i;var a=function(i){r.push(i);var a=Dt(i,e,n,t);$t(o,i,a),i in t||He(t,"_props",i)};for(var s in e)a(s);mt.shouldConvert=!0}function Fe(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},f(e)||(e={});var n=Object.keys(e),o=t.$options.props,r=(t.$options.methods,n.length);while(r--){var i=n[r];o&&b(o,i)||U(i)||He(t,"_data",i)}bt(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var Ge={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var o in e){var r=e[o],i="function"===typeof r?r:r.get;n[o]=new De(t,i,P,Ge),o in t||qe(t,o,r)}}function qe(t,e,n){"function"===typeof n?(Le.get=Ke(e),Le.set=P):(Le.get=n.get?!1!==n.cache?Ke(e):n.get:P,Le.set=n.set?n.set:P),Object.defineProperty(t,e,Le)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?P:A(e[n],t)}function Qe(t,e){for(var n in e){var o=e[n];if(Array.isArray(o))for(var r=0;r<o.length;r++)Ye(t,n,o[r]);else Ye(t,n,o)}}function Ye(t,e,n,o){return f(n)&&(o=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,o)}function Ze(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var o=this;if(f(e))return Ye(o,t,e,n);n=n||{},n.user=!0;var r=new De(o,t,e,n);return n.immediate&&e.call(o,r.value),function(){r.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(mt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),mt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),o=at?Reflect.ownKeys(t):Object.keys(t),r=0;r<o.length;r++){var i=o[r],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function on(t,e,n,o,r){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Dt(c,s,e||{});else i(n.attrs)&&rn(a,n.attrs),i(n.props)&&rn(a,n.props);var u=Object.create(o),l=function(t,e,n,o){return vn(u,t,e,n,o,!0)},f=t.options.render.call(null,l,{data:n,props:a,children:r,parent:o,listeners:n.on||{},injections:nn(t.options.inject,o),slots:function(){return fe(r,o)}});return f instanceof Lt&&(f.functionalContext=o,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function rn(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed){var r=t.componentInstance=un(t,he,n,o);r.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,o=e.componentInstance=t.componentInstance;_e(o,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ee(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,o,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=re(l,c,n),void 0===t))return oe(l,e,n,o,s);e=e||{},In(t),i(e.model)&&pn(t.options,e);var f=Xt(e,t,s);if(a(t.options.functional))return on(t,f,e,n,o);var p=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}ln(e);var h=t.options.name||s,v=new Lt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:o},l);return v}}}function un(t,e,n,o){var r=t.componentOptions,a={_isComponent:!0,parent:e,propsData:r.propsData,_componentTag:r.tag,_parentVnode:t,_parentListeners:r.listeners,_renderChildren:r.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new r.Ctor(a)}function ln(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],o=t.hook[n],r=an[n];t.hook[n]=o?fn(r,o):r}}function fn(t,e){return function(n,o,r,i){t(n,o,r,i),e(n,o,r,i)}}function pn(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var r=e.on||(e.on={});i(r[o])?r[o]=[e.model.callback].concat(r[o]):r[o]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,o,r,i){return(Array.isArray(n)||c(n))&&(r=o,o=n,n=void 0),a(i)&&(r=hn),mn(t,e,n,o,r)}function mn(t,e,n,o,r){if(i(n)&&i(n.__ob__))return Ut();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ut();var a,s,c;(Array.isArray(o)&&"function"===typeof o[0]&&(n=n||{},n.scopedSlots={default:o[0]},o.length=0),r===hn?o=Zt(o):r===dn&&(o=Yt(o)),"string"===typeof e)?(s=L.getTagNamespace(e),a=L.isReservedTag(e)?new Lt(L.parsePlatformTagName(e),n,o,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,o,e):new Lt(e,n,o,void 0,void 0,t)):a=cn(e,n,t,o);return i(a)?(s&&yn(a,s),a):Ut()}function yn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,o=t.children.length;n<o;n++){var a=t.children[n];i(a.tag)&&r(a.ns)&&yn(a,e)}}function _n(t,e){var n,o,r,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),o=0,r=t.length;o<r;o++)n[o]=e(t[o],o);else if("number"===typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),o=0,r=a.length;o<r;o++)s=a[o],n[o]=e(t[s],s,o);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,o){var r=this.$scopedSlots[t];if(r)return n=n||{},o&&(n=T(T({},o),n)),r(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Nt(this.$options,"filters",t,!0)||I}function $n(t,e,n){var o=L.keyCodes[e]||n;return Array.isArray(o)?-1===o.indexOf(t):o!==t}function wn(t,e,n,o,r){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=o||L.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],r)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Ft(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),Cn(n,"__static__"+t,!1),n)}function On(t,e,n){return Cn(t,"__once__"+e+(n?"_"+n:""),!0),t}function Cn(t,e,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]&&"string"!==typeof t[o]&&kn(t[o],e+"_"+o,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function An(t,e){if(e)if(f(e)){var n=t.on=t.on?T({},t.on):{};for(var o in e){var r=n[o],i=e[o];n[o]=r?[].concat(i,r):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=fe(t.$options._renderChildren,n),t.$scopedSlots=H,t._c=function(e,n,o,r){return vn(t,e,n,o,r,!1)},t.$createElement=function(e,n,o,r){return vn(t,e,n,o,r,!0)};var o=e&&e.data;$t(t,"$attrs",o&&o.attrs,null,!0),$t(t,"$listeners",o&&o.on,null,!0)}function Tn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,o=e.$options,r=o.render,i=o.staticRenderFns,a=o._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||H,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Lt||(t=Ut()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=h,t.prototype._l=_n,t.prototype._t=gn,t.prototype._q=M,t.prototype._i=N,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Ut,t.prototype._u=de,t.prototype._g=An}var jn=0;function Pn(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?En(e,t):e.$options=Mt(In(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),we(e,"beforeCreate"),en(e),Ue(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function En(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function In(t){var e=t.options;if(t.super){var n=In(t.super),o=t.superOptions;if(n!==o){t.superOptions=n;var r=Mn(t);r&&T(t.extendOptions,r),e=t.options=Mt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Mn(t){var e,n=t.options,o=t.extendOptions,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=Nn(n[i],o[i],r[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var o=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var r=0;r<t.length;r++)(e.indexOf(t[r])>=0||n.indexOf(t[r])<0)&&o.push(t[r]);return o}return t}function Dn(t){this._init(t)}function Bn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Rn(t){t.mixin=function(t){return this.options=Mt(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,o=n.cid,r=t._Ctor||(t._Ctor={});if(r[o])return r[o];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Mt(n.options,t),a["super"]=n,a.options.props&&Ln(a),a.options.computed&&Hn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,R.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=T({},a.options),r[o]=a,a}}function Ln(t){var e=t.options.props;for(var n in e)He(t.prototype,"_props",n)}function Hn(t){var e=t.options.computed;for(var n in e)qe(t.prototype,n,e[n])}function Un(t){R.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}Pn(Dn),Ze(Dn),le(Dn),me(Dn),Tn(Dn);var Wn=[String,RegExp,Array];function Fn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Gn(t,e,n){for(var o in t){var r=t[o];if(r){var i=Fn(r.componentOptions);i&&!n(i)&&(r!==e&&Jn(r),t[o]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var qn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){Gn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){Gn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Fn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:qn};function Xn(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:G,extend:T,mergeOptions:Mt,defineReactive:$t},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),R.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,T(t.options.components,Kn),Bn(t),Rn(t),Vn(t),Un(t)}Xn(Dn),Object.defineProperty(Dn.prototype,"$isServer",{get:nt}),Object.defineProperty(Dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Dn.version="2.4.1",Dn.mpvueVersion="1.0.12";var Qn=m("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Yn=m("style,class");m("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),m("embed,img,image,input,link,meta",!0);function Zn(){}function to(){}function eo(){}function no(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var oo={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ro={};function io(t,e){return ro}function ao(t,e){return ro}function so(t){return ro}function co(t){return ro}function uo(t,e,n){}function lo(t,e){}function fo(t,e){}function po(t){return ro}function ho(t){return ro}function vo(t){return"div"}function mo(t,e){return ro}function yo(t,e,n){return ro}var _o=Object.freeze({createElement:io,createElementNS:ao,createTextNode:so,createComment:co,insertBefore:uo,removeChild:lo,appendChild:fo,parentNode:po,nextSibling:ho,tagName:vo,setTextContent:mo,setAttribute:yo}),go={create:function(t,e){bo(e)},update:function(t,e){t.data.ref!==e.data.ref&&(bo(t,!0),bo(e))},destroy:function(t){bo(t,!0)}};function bo(t,e){var n=t.data.ref;if(n){var o=t.context,r=t.componentInstance||t.elm,i=o.$refs;e?Array.isArray(i[n])?_(i[n],r):i[n]===r&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(r)<0&&i[n].push(r):i[n]=[r]:i[n]=r}}var $o=new Lt("",{},[]),wo=["create","activate","update","remove","destroy"];function xo(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Oo(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&r(e.asyncFactory.error))}function Oo(t,e){if("input"!==t.tag)return!0;var n,o=i(n=t.data)&&i(n=n.attrs)&&n.type,r=i(n=e.data)&&i(n=n.attrs)&&n.type;return o===r}function Co(t,e,n){var o,r,a={};for(o=e;o<=n;++o)r=t[o].key,i(r)&&(a[r]=o);return a}function ko(t){var e,n,o={},s=t.modules,u=t.nodeOps;for(e=0;e<wo.length;++e)for(o[wo[e]]=[],n=0;n<s.length;++n)i(s[n][wo[e]])&&o[wo[e]].push(s[n][wo[e]]);function l(t){return new Lt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,o,r){if(t.isRootInsert=!r,!h(t,e,n,o)){var s=t.data,c=t.children,l=t.tag;i(l)?(t.elm=t.ns?u.createElementNS(t.ns,l):u.createElement(l,t),w(t),g(t,c,e),i(s)&&$(t,e),_(n,t.elm,o)):a(t.isComment)?(t.elm=u.createComment(t.text),_(n,t.elm,o)):(t.elm=u.createTextNode(t.text),_(n,t.elm,o))}}function h(t,e,n,o){var r=t.data;if(i(r)){var s=i(t.componentInstance)&&r.keepAlive;if(i(r=r.hook)&&i(r=r.init)&&r(t,!1,n,o),i(t.componentInstance))return v(t,e),a(s)&&y(t,e,n,o),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(bo(t),e.push(t))}function y(t,e,n,r){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<o.activate.length;++a)o.activate[a]($o,s);e.push(s);break}_(n,t.elm,r)}function _(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var o=0;o<e.length;++o)d(e[o],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var r=0;r<o.create.length;++r)o.create[r]($o,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create($o,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,o,r,i){for(;o<=r;++o)d(n[o],i,t,e)}function O(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function C(t,e,n,o){for(;n<=o;++n){var r=e[n];i(r)&&(i(r.tag)?(k(r),O(r)):p(r.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,r=o.remove.length+1;for(i(e)?e.listeners+=r:e=f(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function A(t,e,n,o,a){var s,c,l,f,p=0,h=0,v=e.length-1,m=e[0],y=e[v],_=n.length-1,g=n[0],b=n[_],$=!a;while(p<=v&&h<=_)r(m)?m=e[++p]:r(y)?y=e[--v]:xo(m,g)?(S(m,g,o),m=e[++p],g=n[++h]):xo(y,b)?(S(y,b,o),y=e[--v],b=n[--_]):xo(m,b)?(S(m,b,o),$&&u.insertBefore(t,m.elm,u.nextSibling(y.elm)),m=e[++p],b=n[--_]):xo(y,g)?(S(y,g,o),$&&u.insertBefore(t,y.elm,m.elm),y=e[--v],g=n[++h]):(r(s)&&(s=Co(e,p,v)),c=i(g.key)?s[g.key]:null,r(c)?(d(g,o,t,m.elm),g=n[++h]):(l=e[c],xo(l,g)?(S(l,g,o),e[c]=void 0,$&&u.insertBefore(t,l.elm,m.elm),g=n[++h]):(d(g,o,t,m.elm),g=n[++h])));p>v?(f=r(n[_+1])?null:n[_+1].elm,x(t,f,n,h,_,o)):h>_&&C(t,e,p,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var l,f=e.data;i(f)&&i(l=f.hook)&&i(l=l.prepatch)&&l(t,e);var p=t.children,d=e.children;if(i(f)&&b(e)){for(l=0;l<o.update.length;++l)o.update[l](t,e);i(l=f.hook)&&i(l=l.update)&&l(t,e)}r(e.text)?i(p)&&i(d)?p!==d&&A(c,p,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(p)?C(c,p,0,p.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(f)&&i(l=f.hook)&&i(l=l.postpatch)&&l(t,e)}}}function T(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var o=0;o<e.length;++o)e[o].data.hook.insert(e[o])}var j=m("attrs,style,class,staticClass,staticStyle,key");function P(t,n,o){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var r=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,o),!0;if(i(r)){if(i(c))if(t.hasChildNodes()){for(var u=!0,l=t.firstChild,f=0;f<c.length;f++){if(!l||!P(l,c[f],o)){u=!1;break}l=l.nextSibling}if(!u||l)return!1}else g(n,c,o);if(i(s))for(var p in s)if(!j(p)){$(n,o);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,f){if(!r(e)){var p=!1,h=[];if(r(t))p=!0,d(e,h,c,f);else{var v=i(t.nodeType);if(!v&&xo(t,e))S(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),a(n)&&P(t,e,h))return T(e,h,!0),t;t=l(t)}var m=t.elm,y=u.parentNode(m);if(d(e,h,m._leaveCb?null:y,u.nextSibling(m)),i(e.parent)){var _=e.parent;while(_)_.elm=e.elm,_=_.parent;if(b(e))for(var g=0;g<o.create.length;++g)o.create[g]($o,e.parent)}i(y)?C(y,[t],0,0):i(t.tag)&&O(t)}}return T(e,h,p),e.elm}i(t)&&O(t)}}var Ao=[go],So=ko({nodeOps:_o,modules:Ao});function To(){So.apply(this,arguments),this.$updateDataToMP()}function jo(t,e,o){var r,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{r=i[a].call(t,o)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jo(t,e,o)}),r}function Po(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Eo(t,e,n){if(t){var o,r,i;if(Array.isArray(t)){o=t.length;while(o--)r=t[o],"string"===typeof r&&(i=x(r),e[i]={type:null})}else if(f(t))for(var a in t)r=t[a],i=x(a),e[i]=f(r)?r:{type:r};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Io(t){var e=t.$options.properties,n=t.$options.props,o={};return Eo(e,o,t),Eo(n,o,t),o}function Mo(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(He(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function No(t,n){var o=this.$root;o.$mp||(o.$mp={});var r=o.$mp;if(r.status)return"app"===t?jo(this,"onLaunch",r.appOptions):(this.__wxWebviewId__=o.__wxWebviewId__,this.__wxExparserNodeId__=o.__wxExparserNodeId__,jo(this,"onLoad",r.query)),n();if(r.mpType=t,r.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return o.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),r.app=this,r.status="launch",this.globalData.appOptions=r.appOptions=t,jo(o,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),r.status="show",this.globalData.appOptions=r.appOptions=t,jo(o,"onShow",t)},onHide:function(){r.status="hide",jo(o,"onHide")},onError:function(t){jo(o,"onError",t)},onUniNViewMessage:function(t){jo(o,"onUniNViewMessage",t)}});else if("component"===t)Mo(o),e.Component({properties:Io(o),data:{$root:{}},methods:{handleProxy:function(t){return o.$handleProxyWithVue(t)}},created:function(){r.status="created",r.page=this},attached:function(){r.status="attached",jo(o,"attached")},ready:function(){r.status="ready",jo(o,"ready"),n(),o.$nextTick(function(){o._initDataToMP()})},moved:function(){jo(o,"moved")},detached:function(){r.status="detached",jo(o,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return o.$handleProxyWithVue(t)},onLoad:function(t){o.__wxWebviewId__=this.__wxWebviewId__,o.__wxExparserNodeId__=this.__wxExparserNodeId__,r.page=this,r.query=t,r.status="load",Po(i,o),o.$options&&"function"===typeof o.$options.data&&Object.assign(o.$data,o.$options.data()),jo(o,"onLoad",t)},onShow:function(){o.__wxWebviewId__=this.__wxWebviewId__,o.__wxExparserNodeId__=this.__wxExparserNodeId__,r.page=this,r.status="show",jo(o,"onShow"),o.$nextTick(function(){o._initDataToMP()})},onReady:function(){r.status="ready",jo(o,"onReady"),n()},onHide:function(){r.status="hide",jo(o,"onHide")},onUnload:function(){r.status="unload",jo(o,"onUnload"),r.page=null},onPullDownRefresh:function(){jo(o,"onPullDownRefresh")},onReachBottom:function(){jo(o,"onReachBottom")},onShareAppMessage:o.$options.onShareAppMessage?function(t){return jo(o,"onShareAppMessage",t)}:null,onPageScroll:function(t){jo(o,"onPageScroll",t)},onTabItemTap:function(t){jo(o,"onTabItemTap",t)}})}}function Do(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Bo(t,e){void 0===e&&(e=[]);var n=t||{},o=n.$parent;return o?(e.unshift(no(o)),o.$parent?Bo(o,e):e):e}function Ro(t){var e=Bo(t).join(","),n=e+(e?",":"")+no(t),o=Object.assign(Do(t),{$k:n,$kk:n+",",$p:e}),r="$root."+n,i={};return i[r]=o,i}function Vo(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Vo(t,e)}),Object.assign(e,Ro(t))}function Lo(t,e,n){var o,r,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(o,r),a||(o=r=null)}return n||(n={}),function(u,l){var f=Date.now();s||!1!==n.leading||(s=f);var p=e-(f-s);return o=this,r=r?[u,Object.assign(r[1],l)]:[u,l],p<=0||p>e?(clearTimeout(a),a=null,s=f,i=t.apply(o,r),a||(o=r=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}var Ho=Lo(function(t,e){t(e)},50);function Uo(t){var e=t.$root,n=e.$mp||{},o=n.mpType;void 0===o&&(o="");var r=n.page;if("app"!==o&&r&&"function"===typeof r.setData)return r}function Wo(){var t=Uo(this);if(t){var e=JSON.parse(JSON.stringify(Ro(this)));Ho(t.setData.bind(t),o(e,t.data))}}function Fo(){var t=Uo(this);if(t){var e=Vo(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function zo(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,o=0;o<n;o++){var r=t.$children[o],i=no(r);if(i===e)return t=r,t}return t},t):t}function Go(t,e,n){void 0===n&&(n=[]);var o=[];if(!t||!t.tag)return o;var r=t||{},i=r.data;void 0===i&&(i={});var a=r.children;void 0===a&&(a=[]);var s=r.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var r=s.$slots[t],i=Array.isArray(r)?r:[r];i.forEach(function(t){o=o.concat(Go(t,e,n))})}):a.forEach(function(t){o=o.concat(Go(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}function Jo(t){var e=t.type,n=t.timeStamp,o=t.touches,r=t.detail;void 0===r&&(r={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=r.x,c=r.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,r),detail:r,currentTarget:a,stopPropagation:P,preventDefault:P};return o&&o.length&&(Object.assign(u,o[0]),u.touches=o),u}function qo(t){var e=this.$root,n=t.type,o=t.target;void 0===o&&(o={});var r=t.currentTarget,i=r||o,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=zo(e,s.split(","));if(u){var l=oo[n]||[n],f=Go(u._vnode,c,l);if(f.length){var p=Jo(t);if(1===f.length){var d=f[0](p);return d}f.forEach(function(t){return t(p)})}}}return Dn.config.mustUseProp=Zn,Dn.config.isReservedTag=Qn,Dn.config.isReservedAttr=Yn,Dn.config.getTagNamespace=to,Dn.config.isUnknownElement=eo,Dn.prototype.__patch__=To,Dn.prototype.$mount=function(t,e){var n=this,o=this.$options;if(o&&(o.render||o.mpType)){var r=o.mpType;return void 0===r&&(r="page"),this._initMP(r,function(){return ye(n,void 0,void 0)})}return ye(this,void 0,void 0)},Dn.prototype._initMP=No,Dn.prototype.$updateDataToMP=Wo,Dn.prototype._initDataToMP=Fo,Dn.prototype.$handleProxyWithVue=qo,Dn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0ae4":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(s("f3d3"));var a=i(s("da84")),o=i(s("d8cf"));s("2f62");function i(t){return t&&t.__esModule?t:{default:t}}var n={components:{xyzBottomCategory:a.default,HMmessages:o.default},data:function(){return{jobNumber:"",chaod:"",password:""}},onBackPress:function(){return t.showModal({title:"提示",content:"是否退出POS手机版？",success:function(t){t.confirm?plus.runtime.quit():t.cancel&&console.log("用户点击取消")}}),!0},computed:{choice:function(){return this.chaod=this.$store.getters["login/retada"].saveMechanism,this.chaod}},methods:{popup:function(){""==this.jobNumber?this.HMmessages.show("请输入工号",{icon:"error",closeButton:!0}):this.accessInstitutions()},accessInstitutions:function(){var e=this,s=this;t.request({url:s.$store.state.requestUrl+"/depart/getDepart/"+this.jobNumber,success:function(t){console.log("机构数据："+JSON.stringify(t.data)),0==t.data.status&&0!=t.data.data.length?(s.$store.commit("login/mechanismData",t.data),s.$refs.xyzBottomCategory.show()):e.HMmessages.show("工号输入有误，请正确输入",{icon:"error",closeButton:!0})}})},clickMessage:function(){this.HMmessages.close()},login:function(){var e=this,s=this;t.request({url:s.$store.state.requestUrl+"/user/login",data:{username:this.jobNumber,password:this.password,departmentId:this.chaod.department_id},method:"POST",success:function(a){if(console.log("登录成功之后数据："+JSON.stringify(a.data)),0==a.data.status){s.$store.commit("login/logindata",a.data.data);var o={username:s.jobNumber,password:s.password,departmentId:s.chaod.department_id};console.log("导入数据："+JSON.stringify(o)),t.setStorageSync("storage_key",o),setTimeout(function(){t.navigateTo({url:"../index/index"})},500)}else e.HMmessages.show("登录失败,"+a.data.message,{icon:"error",closeButton:!0})}})}}};e.default=n}).call(this,s("6e42")["default"])},"1f4d":function(t,e,s){"use strict";s.r(e);var a=s("0ae4"),o=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"28ae":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{class:{mask:t.showPopup},style:{bottom:t.footer_height+"px"},attrs:{eventid:"688084c7-0"},on:{click:t.maskClick}}),s("view",{staticClass:"bottom-category-content",class:{"bottom-category-view-show":t.showPopup},style:{bottom:t.footer_height+"px"}},[""!=t.subCategoryLists?s("scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.subCategoryLists,function(e,a){return s("view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active":"",attrs:{eventid:"688084c7-1-"+a},on:{click:function(s){t.categoryClickMain(e,a)}}},[t._v(t._s(e.department_name))])})):t._e()],1)])},o=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return o})},3932:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{attrs:{id:"login"}},[s("image",{staticStyle:{position:"fixed",left:"0rpx",top:"0rpx",bottom:"0rpx"},attrs:{src:"../../static/login/background.png",mode:""}}),t._m(0),s("view",{staticClass:"input"},[s("view",{staticClass:"redi"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.jobNumber,expression:"jobNumber"}],staticClass:"inputtext",attrs:{type:"text",cursor:"120",value:"",placeholder:"请输入工号",eventid:"61a469d7-0"},domProps:{value:t.jobNumber},on:{input:function(e){e.target.composing||(t.jobNumber=e.target.value)}}}),s("image",{staticClass:"ima",attrs:{src:"../../static/login/number.png",mode:""}})]),s("view",{staticClass:"redi"},[""!=t.choice?s("input",{directives:[{name:"model",rawName:"v-model",value:t.choice.department_name,expression:"choice.department_name"}],staticClass:"inputtext",attrs:{type:"text",disabled:"true",placeholder:"请选择机构",eventid:"61a469d7-2"},domProps:{value:t.choice.department_name},on:{click:t.popup,input:function(e){e.target.composing||(t.choice.department_name=e.target.value)}}}):s("input",{staticClass:"inputtext",attrs:{type:"text",disabled:"true",placeholder:"请选择机构",eventid:"61a469d7-1"},on:{click:t.popup}}),s("image",{staticClass:"ima",attrs:{src:"../../static/login/institutions.png",mode:""}})]),s("view",{staticClass:"redi"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputtext",attrs:{type:"text","adjust-position":"true",password:"true",placeholder:"请输入密码",eventid:"61a469d7-3"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("image",{staticClass:"ima",attrs:{src:"../../static/login/password.png",mode:""}})])]),s("button",{staticClass:"btn",attrs:{type:"primary",eventid:"61a469d7-4"},on:{click:t.login}},[t._v("登录")]),s("xyz-bottom-category",{ref:"xyzBottomCategory",attrs:{eventid:"61a469d7-5",mpcomid:"61a469d7-0"},on:{childByValue:t.childByValue}}),s("HMmessages",{ref:"HMmessages",attrs:{eventid:"61a469d7-6",mpcomid:"61a469d7-1"},on:{complete:function(e){t.HMmessages=t.$refs.HMmessages},clickMessage:t.clickMessage}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("image",{staticClass:"httle",attrs:{src:"../../static/index/brush_3.png",mode:""}}),s("image",{staticClass:"log",attrs:{src:"../../static/login/logo.png",mode:""}}),s("text",{staticClass:"title"},[t._v("POS手机版")])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return o})},4534:function(t,e,s){"use strict";s.r(e);var a=s("3932"),o=s("1f4d");for(var i in o)"default"!==i&&function(t){s.d(e,t,function(){return o[t]})}(i);s("9d31");var n=s("2877"),r=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},7085:function(t,e,s){},7779:function(t,e,s){"use strict";s("34b9");var a=i(s("b0ce")),o=i(s("4534"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"7dfb":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(s("f3d3"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{showPopup:!1,categoryActive:0,height:"auto",subCategoryList:[],scrollTop:0}},props:{bottom:{type:Number,default:0}},computed:{footer_height:function(){return t.upx2px(this.bottom)},subCategoryLists:function(){var t=this.$store.getters["login/retada"].mechanismData.data;return t}},methods:{show:function(){this.showPopup=!0},maskClick:function(){this.cancel()},cancel:function(){this.showPopup=!1},scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.subList,this.scrollTop=-this.scrollHeight*e,console.log(this.$store.getters["login/retada"].saveMechanism);var s={department_id:t.department_id,department_name:t.department_name};this.$store.commit("login/saveMechanism",s),this.cancel()},chooseIcon:function(t){console.log(this.categoryActive+"----"+t),this.$emit("exampleEvent",[this.categoryActive,t])}}};e.default=o}).call(this,s("6e42")["default"])},"99c8":function(t,e,s){"use strict";var a=s("7085"),o=s.n(a);o.a},"9d31":function(t,e,s){"use strict";var a=s("f4c9"),o=s.n(a);o.a},d700:function(t,e,s){"use strict";s.r(e);var a=s("7dfb"),o=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},da84:function(t,e,s){"use strict";s.r(e);var a=s("28ae"),o=s("d700");for(var i in o)"default"!==i&&function(t){s.d(e,t,function(){return o[t]})}(i);s("99c8");var n=s("2877"),r=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},f4c9:function(t,e,s){}},[["7779","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0187":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{directives:[{name:"show",rawName:"v-show",value:t.retadashow,expression:"retadashow"}],staticClass:"robstamap"},[t._m(0),i("view",{staticStyle:{width:"100%",height:"312.5rpx",background:"#f64c5e","margin-top":"-1.041666rpx"}},[i("view",{staticStyle:{"font-size":"37.5rpx",color:"#fffaf5","font-family":"PingFangSC-Medium"}},[t._v("恭喜您获得1张优惠券")]),i("view",{staticStyle:{width:"625rpx",height:"187.5rpx",background:"#fffaf5","border-radius":"4.166666rpx",margin:"41.666666rpx auto 0rpx"}},[i("view",{staticStyle:{width:"100%",height:"0.041666rpx"}}),i("view",{staticStyle:{width:"583.333333rpx",height:"125rpx",background:"#ffffff",margin:"31.25rpx auto 0rpx",position:"relative"}},[null!=t.retada?i("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.retada.url}}):t._e(),null!=t.retada?i("view",{staticStyle:{position:"absolute",width:"263.541666rpx",height:"36.458333rpx",left:"168.541666rpx",bottom:"20.833333rpx"}},[i("text",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"29.166666rpx",color:"#f96c1d"}},[t._v(t._s(t.retada.denomination))]),i("text",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"18.75rpx",color:"#666666","margin-left":"10.416666rpx"}},[t._v(t._s(t.retada.startTime)+"--"+t._s(t.retada.endTime))])]):t._e()])])]),i("view",{staticStyle:{width:"59.375rpx",height:"59.375rpx",margin:"31.25rpx auto 0rpx"}},[i("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/index/close.png",eventid:"0b9967f7-0"},on:{click:t.close}})])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticStyle:{width:"100%",height:"311.458333rpx"}},[i("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/index/tan.png"}})])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"067c":function(t,e,i){"use strict";var a=i("b3f7"),s=i.n(a);s.a},"069b":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(i("d8cf")),s=c(i("8a33")),n=c(i("55a7")),o=c(i("13c8")),r=c(i("db57"));function c(t){return t&&t.__esModule?t:{default:t}}var l={components:{HMmessages:a.default,newHead:s.default,commodityPool:n.default,robStamps:o.default,conditionsSatisfaction:r.default},data:function(){return{}},computed:{meetRequirement:function(){return this.$store.state.mian.meetRequirement},memberlist:function(){var t=this.$store.state.login.logindata;return t},gonngda:function(){return console.log("首页初始化是否有数据："+JSON.stringify(this.$store.state.mian.intodata)),this.$store.state.mian.intodata}},onBackPress:function(){return t.showModal({title:"提示",content:"是否退出POS手机版？",success:function(t){t.confirm?plus.runtime.quit():t.cancel&&console.log("用户点击取消")}}),!0},onLoad:function(){},methods:{xud:function(){t.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log(JSON.stringify(t.tempFilePaths))}})},sao:function(){console.log("读取本地内容："+JSON.stringify(t.getStorageSync("uerbane")));var e=this;t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result),e.ObtainCommodity(t.result)},fail:function(t){console.log("扫描二维码失败："+t)}})},initi:function(){var t=this;this.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(e){console.log("初始化挂单数据："+JSON.stringify(e.data)),t.$store.commit("mian/intodata",e.data)})},tiao:function(){console.log("测试跳转"),t.navigateTo({url:"../login/login"})},ObtainCommodity:function(t){var e=this,i=this;console.log("扫描之前各参数：Authorization："+i.$store.state.login.logindata.accessToken+",barCode:"+t),this.$http.post("pc/posRestingOrder/addGoodsToRestingOrderByBarCode",{barCode:t,posTicketCode:"",state:10,posTicketType:10,restingOrderType:10,memberCode:""}).then(function(t){e.$store.commit("mian/goodlist",t.data),0==t.data.status&&i.initi()})},login:function(e){var i=this,a=this;t.request({url:a.$store.state.requestUrl+"/user/login",data:{username:e.username,password:e.password,departmentId:e.departmentId},method:"POST",success:function(t){console.log("首页登录成功之后数据："+JSON.stringify(t.data)),0==t.data.status?a.$store.commit("login/logindata",t.data.data):i.HMmessages.show("登录失败,"+t.data.message,{icon:"error",closeButton:!0})}})},settlementJump:function(){null!=this.$store.state.mian.intodata?t.navigateTo({url:"../shoppingcart/shoppingcart",animationDuration:500}):this.HMmessages.show("请扫描商品条码",{icon:"error",closeButton:!0})},activeHint:function(){var t=this;null!=this.$store.state.mian.intodata?this.$http.post("pc/goodsActivity/getGoodsActivity",{posTicketCode:this.$store.state.mian.intodata.data.list[0].pos_ticket_code,state:10,posTicketType:10,restingOrderType:10}).then(function(e){0==e.data.status&&(null==e.data.data?t.settlementJump():0==e.data.data.activity_msg_yes_list.length&&0==e.data.data.activity_msg_no_list.length?t.settlementJump():(t.$store.commit("mian/meetRequirement",!0),t.$store.commit("mian/meetlist",e.data.data)))}):this.HMmessages.show("请扫描商品条码",{icon:"error",closeButton:!0})},Payment:function(){var t=this;this.$http.get("pc/payType/getPayTypeList").then(function(e){console.log("获取支付方式："+JSON.stringify(e.data)),t.$store.commit("mian/paytype",e.data.data)})}},mounted:function(){try{var e=t.getStorageSync("storage_key");e?this.login(e):t.navigateTo({url:"../login/login"})}catch(i){}this.Payment()}};e.default=l}).call(this,i("6e42")["default"])},"13c8":function(t,e,i){"use strict";i.r(e);var a=i("0187"),s=i("ad29");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("b401");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"4491d8cc",null);e["default"]=r.exports},"3d59":function(t,e,i){"use strict";i.r(e);var a=i("aa3a"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},4448:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},computed:{retada:function(){return this.$store.state.mian.intodata},total:function(){return this.$store.state.mian.settlementInitialization},memberInfo:function(){return this.$store.state.mian.member},upgrade:function(){var t=0;if(null!=this.$store.state.mian.member){var e=Number(this.$store.state.mian.member.data.levelStayConsume)+Number(this.$store.state.mian.member.data.upTypeValue);t=Number(this.$store.state.mian.member.data.levelStayConsume)/e*100}return t+"%"}},methods:{deleteGood:function(e){var i=this;this.$http.post("pc/posRestingOrder/updateGoodsNum",{goodsNum:1,restingOrderId:e.id,operateType:"SC"}).then(function(e){t.showToast({title:"删除成功",icon:"success",duration:1e3}),i.initi()})},initi:function(){var t=this;this.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(e){t.$store.commit("mian/intodata",e.data),console.log("长度："+e.data.data.list.length),0==e.data.data.list.length&&(t.$store.state.mian.intodata=null,t.$store.state.mian.member=null)})},settlementInitialization:function(){var t=this,e="";null!=this.$store.state.mian.goodlist&&(e=this.$store.state.mian.goodlist.data.posTicketCode),this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:this.$store.state.mian.paytype[0].id,state:10,posTicketCode:e,posTicketType:10,restingOrderType:10}).then(function(e){t.$store.commit("mian/settlementInitialization",e.data.data)})}},mounted:function(){}};e.default=i}).call(this,i("6e42")["default"])},"55a7":function(t,e,i){"use strict";i.r(e);var a=i("b851"),s=i("f605");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("067c");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"2cc2fc00",null);e["default"]=r.exports},"6eb3":function(t,e,i){"use strict";var a=i("8b71"),s=i.n(a);s.a},"823e":function(t,e,i){},"8b71":function(t,e,i){},9292:function(t,e,i){"use strict";var a=i("f1e9"),s=i.n(a);s.a},aa3a:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},computed:{activeGoods:function(){return console.log("商品集合1："+this.$store.state.mian.meetlist),this.$store.state.mian.meetlist}},methods:{close:function(){this.$store.commit("mian/meetRequirement",!1)},settlementJump:function(){null!=this.$store.state.mian.intodata?(this.$store.commit("mian/meetRequirement",!1),t.navigateTo({url:"../shoppingcart/shoppingcart",animationDuration:500})):this.HMmessages.show("请扫描商品条码",{icon:"error",closeButton:!0})}}};e.default=i}).call(this,i("6e42")["default"])},aa82:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{show:!1}},computed:{retada:function(){return this.$store.state.mian.robStamps},retadashow:function(){return this.$store.state.mian.robshow}},methods:{close:function(){this.$store.state.mian.robshow=!1}},mounted:function(){}};e.default=a},aca9:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"condution"},[i("view",{staticClass:"condution_view1"}),i("view",{staticClass:"view2_f"},[i("view",{staticClass:"condution_view2"},[i("view",{staticClass:"view2_mian"},[i("view",{staticClass:"view2_mian_title"},[i("text",{staticStyle:{"margin-left":"20.833333rpx"}},[t._v("活动提示")]),i("text",{staticStyle:{float:"right","font-size":"25rpx","margin-right":"20.833333rpx"},attrs:{eventid:"2360d67b-0"},on:{click:t.close}},[t._v("关闭")])]),null!=t.activeGoods?i("view",{staticStyle:{"max-height":"860.833333rpx",overflow:"auto"}},[0!=t.activeGoods.activity_msg_yes_list.length?i("view",t._l(t.activeGoods.activity_msg_yes_list,function(e,a){return i("view",{key:a},[i("view",{staticClass:"view2_mian_meet"},[i("view",{staticStyle:{height:"60.416666rpx",background:"#eae8e2","margin-bottom":"21.875rpx"}},[t._m(0,!0),i("view",{staticStyle:{"text-align":"left"}},[i("text",{staticStyle:{"font-size":"25rpx",color:"#f96c1d","margin-left":"31.25rpx","text-align":"left","text-indent":"21.666666rpx"}},[t._v("活动："+t._s(e.activity_name))])])]),i("view",t._l(e.goods_msg_list,function(e,a){return i("view",{key:a,staticClass:"view2_list"},[i("view",{staticStyle:{width:"75rpx",height:"75rpx",float:"left","border-radius":"100%"}},[i("image",{staticStyle:{width:"75rpx",height:"75rpx","border-radius":"100%"},attrs:{src:e.homepage_picture}})]),i("view",{staticStyle:{width:"316.666666rpx","margin-left":"14.583333rpx",float:"left"}},[t._v(t._s(e.goods_name))]),i("view",{staticStyle:{width:"73.333333rpx","margin-left":"14.583333rpx",float:"left"}},[t._v(t._s(e.goods_num)+t._s(e.goods_unit_name))]),i("view",{staticStyle:{width:"100.166666rpx",color:"#f96c1d",float:"right"}},[t._v(t._s(e.activity_price))])])}))])])})):t._e(),0!=t.activeGoods.activity_msg_no_list.length?i("view",t._l(t.activeGoods.activity_msg_no_list,function(e,a){return i("view",{key:a},[i("view",{staticClass:"view2_mian_meet"},[i("view",{staticStyle:{height:"60.416666rpx",background:"#eae8e2","margin-bottom":"21.875rpx"}},[t._m(1,!0),i("view",{staticStyle:{"text-align":"left"}},[i("text",{staticStyle:{"font-size":"25rpx",color:"#968074","margin-left":"31.25rpx","text-align":"left","text-indent":"21.666666rpx"}},[t._v("活动："+t._s(e.activity_name))])])]),i("view",t._l(e.goods_msg_list,function(e,a){return i("view",{key:a,staticClass:"view2_list"},[i("view",{staticStyle:{width:"75rpx",height:"75rpx",background:"#080808",float:"left","border-radius":"100%"}},[i("image",{staticStyle:{width:"75rpx",height:"75rpx","border-radius":"100%"},attrs:{src:e.homepage_picture}})]),i("view",{staticStyle:{width:"316.666666rpx","margin-left":"14.583333rpx",float:"left"}},[t._v(t._s(e.goods_name))]),i("view",{staticStyle:{width:"73.333333rpx","margin-left":"14.583333rpx",float:"left"}},[t._v(t._s(e.goods_num)+t._s(e.goods_unit_name))]),i("view",{staticStyle:{width:"100.166666rpx",color:"#f96c1d",float:"right"}},[t._v(t._s(e.activity_price))])])}))])])})):t._e()]):t._e(),i("view",{staticStyle:{width:"604.166666rpx",height:"81.25rpx",margin:"0 auto"}},[i("button",{staticClass:"btn",attrs:{eventid:"2360d67b-1"},on:{click:t.settlementJump}},[t._v("继续支付")])],1),i("view",{staticStyle:{width:"100%",height:"31.25rpx"}})])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"view2_mian_left"},[i("image",{attrs:{src:"../../static/index/meet.png",mode:""}}),i("text",{staticStyle:{"font-size":"25rpx",color:"#f96c1d",margin:"-35.208333rpx 0rpx 0px 10.416666rpx"}},[t._v("已享受")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"view2_mian_left"},[i("image",{attrs:{src:"../../static/index/does_not_meet.png",mode:""}}),i("text",{staticStyle:{"font-size":"25rpx",color:"#968074",margin:"-35.208333rpx 0rpx 0px 10.416666rpx"}},[t._v("未满足")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},ad29:function(t,e,i){"use strict";i.r(e);var a=i("aa82"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},b12c:function(t,e,i){"use strict";i.r(e);var a=i("e125"),s=i("b845");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("6eb3");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"e3777d56",null);e["default"]=r.exports},b3f7:function(t,e,i){},b401:function(t,e,i){"use strict";var a=i("823e"),s=i.n(a);s.a},b845:function(t,e,i){"use strict";i.r(e);var a=i("069b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},b851:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"comm"},[i("image",{staticClass:"bacs",attrs:{src:"../../static/index/background_2.png",mode:""}}),i("image",{staticClass:"baico",attrs:{src:"../../static/index/bei.png",mode:""}}),i("view",{staticClass:"baico goodlist"},[i("view",{staticClass:"mianlist"},[null!=t.memberInfo?i("view",[i("image",{staticClass:"coumiy",attrs:{src:t.memberInfo.data.memberPictures,mode:""}}),i("view",{staticClass:"huidata"},[i("view",[i("text",{staticStyle:{"font-size":"29.166666rpx","margin-right":"10.416666rpx",color:"#71593d"}},[t._v(t._s(t.memberInfo.data.memberName))]),i("text",{staticStyle:{padding:"5.208333rpx 15.333333rpx",background:"#71593d","border-radius":"14.166666rpx","font-size":"20.833333rpx",color:"#F8F8F8"}},[t._v(t._s(t.memberInfo.data.levelNickname))])]),i("view",{staticStyle:{width:"361.458333rpx",height:"41.666666rpx",margin:"5.208333rpx auto"}},[i("text",{staticClass:"dename",staticStyle:{float:"left"}},[t._v(t._s(t.memberInfo.data.levelNickname))]),i("view",{staticClass:"backad",staticStyle:{float:"left"}},[i("view",{staticClass:"sheji",style:{width:t.upgrade}})]),i("text",{staticClass:"dename",staticStyle:{float:"left"}},[t._v(t._s(t.memberInfo.data.levelNextNickname))])]),i("view",{staticClass:"tineif"},[t._v("本次消费可享受"+t._s(t.memberInfo.data.memberDiscount)+"折，距升级还需有效消费"+t._s(t.memberInfo.data.levelIndex)+"次或"+t._s(t.memberInfo.data.upTypeValue)+"元")])])]):i("view",{staticStyle:{width:"100%",height:"93.75rpx"}}),i("view",{staticClass:"gooddata"},[null!=t.retada?i("view",t._l(t.retada.data.list,function(e,a){return i("view",{key:a,staticStyle:{width:"95%",height:"83.333333rpx",margin:"0 auto 26.041666rpx","text-align":"left"}},[i("image",{staticStyle:{width:"83.333333rpx",height:"83.333333rpx","border-radius":"100%",float:"left"},attrs:{src:e.homepage_picture,mode:""}}),i("text",{staticStyle:{width:"257.291666rpx",height:"100%","font-size":"25rpx",color:"#333333",float:"left","margin-left":"10.416666rpx"}},[t._v(t._s(e.goods_name))]),i("text",{staticStyle:{width:"104.166666rpx",height:"100%","font-size":"25rpx",color:"#333333","line-height":"83.333333rpx",float:"left","margin-left":"10.416666rpx"}},[t._v(t._s(e.goods_price)+"/"+t._s(e.goods_unit_name))]),i("text",{staticStyle:{width:"62.5rpx",height:"100%","font-size":"25rpx",color:"#333333","line-height":"83.333333rpx",float:"left","margin-left":"10.416666rpx"}},[t._v(t._s(e.goods_price*e.goods_num))]),i("image",{staticStyle:{width:"38.125rpx",height:"38.125rpx",float:"right","margin-top":"30.833333rpx"},attrs:{src:"../../static/index/delete.1.png",mode:"",eventid:"ef5f0012-0-"+a},on:{click:function(i){t.deleteGood(e)}}})])})):t._e()]),null!=t.retada?i("view",{staticStyle:{"line-height":"52.083333rpx"}},[i("text",{staticStyle:{float:"right","font-size":"29.166666rpx",color:"#be0000","margin-left":"60.416666rpx","margin-right":"40.833333rpx"}},[t._v("合计："),i("text",{staticStyle:{"font-size":"50rpx"}},[t._v("¥"+t._s(t.retada.data.all_moeny))])]),i("text",{staticStyle:{float:"right","font-size":"29.166666rpx",color:"#333333","margin-top":"10.833333rpx"}},[t._v("已优惠：¥"+t._s(t.retada.data.discount_money))])]):t._e()])])])])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},db57:function(t,e,i){"use strict";i.r(e);var a=i("aca9"),s=i("3d59");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("9292");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"e8220496",null);e["default"]=r.exports},e125:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content",attrs:{id:"index"}},[i("new-head",{attrs:{mpcomid:"632e69e9-0"}}),null==t.gonngda?i("view",[i("image",{staticClass:"bacs",attrs:{src:"../../static/login/background.png",mode:""}}),i("image",{staticClass:"tishi",attrs:{src:"../../static/index/price_tag.png",mode:""}}),i("text",{staticClass:"saom"},[t._v("请扫描商品条码")]),i("image",{staticClass:"goodimg",attrs:{src:"../../static/index/scanning_h.png",mode:""}})]):i("view",[i("commodity-pool",{attrs:{mpcomid:"632e69e9-1"}})],1),null==t.gonngda?i("view",{staticClass:"botmm",attrs:{eventid:"632e69e9-1"},on:{click:t.settlementJump}},[i("image",{staticClass:"img",attrs:{src:"../../static/index/brush_4.png",mode:""}}),i("image",{staticClass:"styled fa1",attrs:{src:"../../static/index/pay_treasure_gray_2.png",mode:""}}),i("image",{staticClass:"styled fa2",attrs:{src:"../../static/index/wechat_gray_2.png",mode:""}}),i("image",{staticClass:"styled fa3",attrs:{src:"../../static/index/card_h.png",mode:""}}),i("image",{staticClass:"styled fa4",attrs:{src:"../../static/index/cash_h.png",mode:""}}),i("text",{staticClass:"stytext tex1"},[t._v("支付宝")]),i("text",{staticClass:"stytext tex2"},[t._v("微信")]),i("text",{staticClass:"stytext tex3"},[t._v("会员")]),i("text",{staticClass:"stytext tex4"},[t._v("现金")]),i("image",{staticClass:"fe1",attrs:{src:"../../static/index/fen.png",mode:""}}),i("image",{staticClass:"fe2",attrs:{src:"../../static/index/fen.png",mode:""}}),i("image",{staticClass:"fe3",attrs:{src:"../../static/index/fen.png",mode:""}})]):i("view",{staticClass:"botmm"},[i("image",{staticClass:"img",attrs:{src:"../../static/index/brush_4.png",mode:""}}),i("button",{staticClass:"btn",attrs:{eventid:"632e69e9-0"},on:{click:t.activeHint}},[t._v("去结算")])],1),i("HMmessages",{ref:"HMmessages",attrs:{eventid:"632e69e9-2",mpcomid:"632e69e9-2"},on:{complete:function(e){t.HMmessages=t.$refs.HMmessages},clickMessage:t.clickMessage}}),i("robStamps",{attrs:{mpcomid:"632e69e9-3"}}),i("view",{directives:[{name:"show",rawName:"v-show",value:t.meetRequirement,expression:"meetRequirement"}]},[i("conditionsSatisfaction",{attrs:{mpcomid:"632e69e9-4"}})],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},ec79:function(t,e,i){"use strict";i("34b9");var a=n(i("b0ce")),s=n(i("b12c"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},f1e9:function(t,e,i){},f605:function(t,e,i){"use strict";i.r(e);var a=i("4448"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a}},[["ec79","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/shoppingcart/shoppingcart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shoppingcart/shoppingcart.js';

define('pages/shoppingcart/shoppingcart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shoppingcart/shoppingcart"],{"0013":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{attrs:{id:"newhead1"}},[a("view",[a("image",{staticClass:"httle",attrs:{src:"../../static/index/brush_3.png",mode:""}}),a("image",{staticClass:"log",attrs:{src:"../../static/login/logo.png",mode:"",eventid:"6f3d177a-0"},on:{click:t.toshow}}),a("text",{staticClass:"title"},[t._v("POS手机版")])]),a("lvv-popup",{ref:"lvvpopref",attrs:{position:"left",mpcomid:"6f3d177a-0"}},[a("view",{staticStyle:{background:"#f5f3ef",width:"458.333333rpx",height:"100%",position:"absolute",left:"0"}},[a("view",{staticClass:"acctionf"},[a("view",{staticStyle:{width:"100%",height:"155.416666rpx",background:"#0e2223","text-align":"center","line-height":"155.416666rpx"}},[a("image",{staticStyle:{width:"216.666666rpx",height:"83.333333rpx","margin-top":"52.083333rpx"},attrs:{src:"../../static/login/logo.png",mode:""}})]),a("view",{staticClass:"lvvtitle"},[t._v("门店： "+t._s(t.memberlist.departmentName))]),a("view",{staticStyle:{width:"458.333333rpx",height:"1.041666rpx",background:"#eae6e2"}}),a("view",{staticClass:"lvvtitle"},[t._v("账号: "+t._s(t.memberlist.userCode))]),a("view",{staticStyle:{width:"458.333333rpx",height:"1.041666rpx",background:"#eae6e2"}}),a("button",{staticClass:"btn",attrs:{type:"primary",eventid:"6f3d177a-1"},on:{click:t.qieh}},[t._v("切换用户")]),a("view",{staticClass:"lvvtitle",staticStyle:{position:"fixed",bottom:"5.25rpx","text-align":"center",width:"458.333333rpx","font-size":"25rpx"}},[t._v("新仙C果版权所有")])],1)])])],1),a("view",{staticClass:"shomian"},[a("image",{staticClass:"bacimg",attrs:{src:"../../static/login/background.png",mode:""}}),a("image",{staticClass:"tishi",attrs:{src:"../../static/index/price_tag.png",mode:""}}),a("view",{staticClass:"tishi",staticStyle:{"line-height":"132.291666rpx","font-size":"29.166666rpx",color:"#be0000","text-align":"center"}},[t._v("合计："),null!=t.total?a("text",{staticStyle:{"font-size":"58.333333rpx"}},[t._v(t._s(t.total.init_money))]):t._e()]),a("image",{staticClass:"goodimg",attrs:{src:"../../static/index/pay.png",mode:""}})]),a("view",{staticClass:"botmm"},[a("image",{staticClass:"img",attrs:{src:"../../static/index/brush_4.png",mode:""}}),a("image",{staticClass:"styled fa1",attrs:{src:"../../static/index/pay_treasure_blue_2.png",mode:"",eventid:"6f3d177a-2"},on:{click:function(e){t.scanningControl("ZFB")}}}),a("image",{staticClass:"styled fa2",attrs:{src:"../../static/index/wechat_green_2.png",mode:"",eventid:"6f3d177a-3"},on:{click:function(e){t.scanningControl("WEIXIN")}}}),a("image",{staticClass:"styled fa3",attrs:{src:"../../static/index/card_yellow_2.png",mode:"",eventid:"6f3d177a-4"},on:{click:t.membershipPayment}}),a("image",{staticClass:"styled fa4",attrs:{src:"../../static/index/cash.png",mode:"",eventid:"6f3d177a-5"},on:{click:t.cashpay}}),a("text",{staticClass:"stytext tex1",attrs:{eventid:"6f3d177a-6"},on:{click:function(e){t.scanningControl("ZFB")}}},[t._v("支付宝")]),a("text",{staticClass:"stytext tex2",attrs:{eventid:"6f3d177a-7"},on:{click:function(e){t.scanningControl("WEIXIN")}}},[t._v("微信")]),a("text",{staticClass:"stytext tex3",attrs:{eventid:"6f3d177a-8"},on:{click:t.membershipPayment}},[t._v("会员")]),a("text",{staticClass:"stytext tex4",attrs:{eventid:"6f3d177a-9"},on:{click:t.cashpay}},[t._v("现金")]),a("image",{staticClass:"fe1",attrs:{src:"../../static/index/fen.png",mode:""}}),a("image",{staticClass:"fe2",attrs:{src:"../../static/index/fen.png",mode:""}}),a("image",{staticClass:"fe3",attrs:{src:"../../static/index/fen.png",mode:""}})]),a("view",{directives:[{name:"show",rawName:"v-show",value:t.cashow,expression:"cashow"}]},[a("cashChange",{attrs:{mpcomid:"6f3d177a-1"}})],1),a("view",{directives:[{name:"show",rawName:"v-show",value:t.upgradeshow,expression:"upgradeshow"}]},[a("upgradeBounced",{attrs:{mpcomid:"6f3d177a-2"}})],1),a("view",{directives:[{name:"show",rawName:"v-show",value:t.couponingshow,expression:"couponingshow"}]},[a("freeCoupons",{attrs:{mpcomid:"6f3d177a-3"}})],1),a("view",[a("xyDialog",{attrs:{title:"状态",content:"支付成功!欢迎下次光临~",show:t.showDialog_1,isShowCancel:!1,eventid:"6f3d177a-10",mpcomid:"6f3d177a-4"},on:{confirmButton:function(e){t.clickConfirm(1)}}})],1)])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"065a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"cashMian"},[a("view",{staticClass:"title"},[a("text",{staticStyle:{"margin-left":"52.083333rpx"}},[t._v("结算")]),a("text",{staticStyle:{float:"right","margin-right":"20.833333rpx"},attrs:{eventid:"3613cfe6-0"},on:{click:t.close}},[t._v("取消")])]),a("view",{staticClass:"cashboby"},[null!=t.total?a("view",{staticClass:"matop",staticStyle:{"font-size":"29.166666rpx",color:"#333333"}},[t._v("待收金额："+t._s(t.total.init_money))]):t._e(),a("view",{staticClass:"matop"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amountChange,expression:"amountChange"}],staticStyle:{width:"100%",height:"81.25rpx",border:"1px solid #999999","border-radius":"4.166666rpx"},attrs:{type:"number",eventid:"3613cfe6-1"},domProps:{value:t.amountChange},on:{input:function(e){e.target.composing||(t.amountChange=e.target.value)}}})]),a("view",{staticClass:"matop",staticStyle:{"font-size":"29.166666rpx",color:"#333333"}},[t.theAmount>0?a("text",[t._v("找零")]):a("text",[t._v("未支付")]),t._v("："),t.theAmount>0?a("text",{staticStyle:{color:"#f96c1d"}},[t._v("¥"+t._s(t.theAmount))]):a("text",{staticStyle:{color:"#f96c1d"}},[t._v("¥"+t._s(-t.theAmount))])]),a("view",{staticClass:"matop"},[a("button",{staticStyle:{color:"#ffffff","font-size":"29.166666rpx",border:"none",width:"100%",height:"81.25rpx","background-image":"linear-gradient(-180deg, #fdab3e 0%, #fd803e 97%)","border-radius":"4.166666rpx"},attrs:{eventid:"3613cfe6-2"},on:{click:t.cashpay}},[t._v("完成")])],1)])]),a("view",{staticClass:"cashChe",attrs:{eventid:"3613cfe6-3"},on:{click:t.close}}),a("xyDialog",{attrs:{title:"状态",content:"支付成功!欢迎下次光临~",show:t.showDialog_1,isShowCancel:!1,eventid:"3613cfe6-4",mpcomid:"3613cfe6-0"},on:{confirmButton:function(e){t.clickConfirm(1)}}})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"0eb6":function(t,e,a){"use strict";var i=a("448f"),n=a.n(i);n.a},1080:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{show:!1}},computed:{freedata:function(){return this.$store.state.mian.couponing}},methods:{close:function(){this.$store.commit("mian/couponingshow",!1),t.redirectTo({url:"../index/index"})}},mounted:function(){}};e.default=a}).call(this,a("6e42")["default"])},1659:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:""},content:String,textalign:{type:String,default:"center"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#909399"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#409EFF"},isShowCancel:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},data:function(){return{isShow:!1}},watch:{show:function(t){this.isShow=t}},methods:{bindTouchmove:function(){},clickCancel:function(){var t=this;setTimeout(function(){t.$emit("cancelButton")},200),this.closeDialog()},clickConfirm:function(){var t=this;setTimeout(function(){t.$emit("confirmButton")},200),this.closeDialog()},closeDialog:function(){this.isShow=!1}}};e.default=i},"1c96":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("8a33")),n=l(a("b26a")),o=l(a("b24f")),s=l(a("2851")),r=l(a("538f")),c=l(a("74d0"));function l(t){return t&&t.__esModule?t:{default:t}}var d={components:{newHead:i.default,lvvPopup:n.default,cashChange:o.default,upgradeBounced:s.default,freeCoupons:r.default,xyDialog:c.default},data:function(){return{paytype:null,zfbstime:null,weixintime:null,membership:!0,showDialog_1:!1,control:!0}},computed:{cashow:function(){return this.$store.state.mian.cashshow},memberlist:function(){var t=this.$store.state.login.logindata;return console.log("会员信息1："+JSON.stringify(this.$store.state.login.logindata)),t},retada:function(){return console.log("商品数据集合:"+JSON.stringify(this.$store.state.mian.intodata)),this.$store.state.mian.intodata},total:function(){return this.$store.state.mian.settlementInitialization},upgradeshow:function(){return this.$store.state.mian.upgradeshow},couponingshow:function(){return this.$store.state.mian.couponingshow}},methods:{cashpay:function(){var t=this.paytype[3].id;this.qiesettlementInitialization(t),this.$store.commit("mian/cashshow",!0)},toshow:function(){this.$refs.lvvpopref.show()},qieh:function(){try{t.removeStorageSync("storage_key"),t.navigateTo({url:"../login/login"})}catch(e){}},membershipPayment:function(){var e=this.paytype[0].id;if(this.qiesettlementInitialization(e),console.log("会员卡之前判断："+this.$store.state.mian.member),1==this.membership)if(null!=this.$store.state.mian.member){var a={payTypeCode:this.paytype[0].payTypeCode,payTypeId:this.paytype[0].id};this.paysuan("",a),this.membership=!1}else this.membershipPaymentpa();else{t.showToast({title:"请不要频繁点击",icon:"none",duration:2e3});var i=this;setTimeout(function(){i.membership=!0},1500)}},scanningControl:function(e){1==this.control?this.payment(e):t.showToast({title:"请不要频繁点击",icon:"none",duration:2e3});var a=this;setTimeout(function(){a.control=!0},1500)},payment:function(e){var a={},i="";"MEMBER_CARD"==e?(a={payTypeCode:this.paytype[0].payTypeCode,payTypeId:this.paytype[0].id},i=this.paytype[0].id,this.qiesettlementInitialization(i)):"ZFB"==e?(a={payTypeCode:this.paytype[1].payTypeCode,payTypeId:this.paytype[1].id},i=this.paytype[1].id,this.qiesettlementInitialization(i)):"WEIXIN"==e&&(a={payTypeCode:this.paytype[2].payTypeCode,payTypeId:this.paytype[2].id},i=this.paytype[2].id,this.qiesettlementInitialization(i));var n=this;n.control=!1,t.scanCode({success:function(t){n.paysuan(t.result,a)},fail:function(t){console.log("扫描二维码失败："+t)}})},paysuan:function(e,a){var i=this;t.showLoading({title:"支付中..."});var n=this.$store.state.mian.settlementInitialization.init_money;this.$http.post("pc/posPayment/posPaymentAction",{payTypeCode:a.payTypeCode,payTypeId:a.payTypeId,posTicketCode:this.$store.state.mian.intodata.data.list[0].pos_ticket_code,state:10,payMoney:n,posTicketType:10,restingOrderType:10,sysParamId:"",authCode:e,memberPwd:"",manualDiscount:0,manualDiscountPassword:"",isInputMember:"",isNoMemberToPay:3}).then(function(e){"ZFB"==a.payTypeCode?i.ZHBpay(e.data.data.tradeNo):"MEMBER_CARD"==a.payTypeCode?(console.log("会员卡支付之后："+JSON.stringify(e.data)),t.hideLoading(),0==e.data.status?(null==e.data.moreInfo&0==e.data.extendData.length&&(i.showDialog_1=!0),i.favorableUpgrade(e.data),i.$store.state.mian.member=null,i.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(t){i.$store.commit("mian/intodata",t.data),i.$store.commit("mian/intodata",null),i.$store.commit("mian/goodlist",null),i.membership=!0})):t.showToast({title:"支付失败",icon:"none",duration:2e3})):"WEIXIN"==a.payTypeCode&&("SUCCESS"==e.data.data.resultCode&&0!=e.data.data.isCallNotify?null!=e.data.data.errCodeDes?t.showToast({title:e.data.data.errCodeDes,icon:"none",duration:3e3}):i.WEIXINpay(e.data.data.tradeNo):"SUCCESS"==e.data.data.resultCode&&0==e.data.data.isCallNotify?(console.log("微信支付快捷通道"+JSON.stringify(e.data.data.data)),t.hideLoading(),i.favorableUpgrade(e.data),i.$store.state.mian.member=null,i.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(t){i.$store.commit("mian/intodata",t.data),i.$store.commit("mian/intodata",null),i.$store.commit("mian/goodlist",null)}),null==e.data.moreInfo&null==e.data.extendData&&(i.showDialog_1=!0)):t.showToast({title:"支付异常",icon:"none",duration:2e3}))})},ZHBpay:function(e){t.showLoading({title:"支付中..."});var a=this,i=this.$store.state.mian.zfbstime;i=setInterval(function(){a.$http.get("pc/pay/zfb/orderQuery2/"+a.$store.state.mian.intodata.data.list[0].pos_ticket_code+"?tradeNo="+e).then(function(e){null==e.data?clearInterval(i):0==e.data.status?(console.log("支付支付状态："+JSON.stringify(e.data)),"TRADE_SUCCESS"==e.data.data.tradeStatus?(t.hideLoading(),null==e.data.moreInfo&null==e.data.extendData&&(a.showDialog_1=!0),a.favorableUpgrade(e.data),a.$store.state.mian.member=null,a.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(t){a.$store.commit("mian/intodata",t.data),a.$store.commit("mian/intodata",null),a.$store.commit("mian/goodlist",null)}),clearInterval(i)):"WAIT_BUYER_PAY"==e.data.data.tradeStatus||("TRADE_CLOSED"==e.data.data.tradeStatus?(clearInterval(i),t.showToast({title:"交易关闭",icon:"none",duration:2e3})):"TRADE_FINISHED"==e.data.data.tradeStatus?(clearInterval(i),t.showToast({title:"支付异常",icon:"none",duration:2e3})):clearInterval(i))):clearInterval(i)})},1e3)},WEIXINpay:function(e){t.showLoading({title:"支付中..."});var a=this;this.weixintime=setInterval(function(){a.$http.get("pc/pay/wx/wxPay/orderQuery2"+a.$store.state.mian.intodata.data.list[0].pos_ticket_code+"?tradeNo="+e).then(function(e){console.log("微信支付轮询通道"+JSON.stringify(e.data)),null==e.data?clearInterval(a.weixintime):"SUCCESS"==e.data.data.tradeState?(t.hideLoading(),null==e.data.moreInfo&null==e.data.extendData&&(a.showDialog_1=!0),a.favorableUpgrade(e.data),a.$store.state.mian.member=null,a.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(e){a.$store.commit("mian/intodata",e.data),a.$store.commit("mian/intodata",null),a.$store.commit("mian/goodlist",null),null!=a.$store.state.mian.upgrade&&""!=a.$store.state.mian.upgrade||null!=a.$store.state.mian.couponing&&""!=a.$store.state.mian.couponing&&0!=a.$store.state.mian.couponing.length||setTimeout(function(){t.redirectTo({url:"../index/index"})},1e3)}),clearInterval(a.weixintime)):"REFUND"==e.data.data.tradeState?(clearInterval(a.weixintime),t.showToast({title:"转入退款",icon:"none",duration:2e3})):"NOTPAY"==e.data.data.tradeState?(clearInterval(a.weixintime),t.showToast({title:"未支付",icon:"none",duration:2e3})):"CLOSED"==e.data.data.tradeState?(clearInterval(a.weixintime),t.showToast({title:"已关闭",icon:"none",duration:2e3})):"REVOKED"==e.data.data.tradeState?(clearInterval(a.weixintime),t.showToast({title:"已撤销",icon:"none",duration:2e3})):"USERPAYING"==e.data.data.tradeState||("PAYERROR"==e.data.data.tradeState?(clearInterval(a.weixintime),t.showToast({title:"支付失败",icon:"none",duration:2e3})):(clearInterval(a.weixintime),t.showToast({title:e.data.data.errCodeDes,icon:"none",duration:2e3})))})},1e3)},Payments:function(){var t=this;this.$http.get("pc/payType/getPayTypeList").then(function(e){console.log("获取支付方式："+JSON.stringify(e.data)),t.paytype=e.data.data,t.$store.commit("mian/paytype",e.data.data),t.settlementInitialization()})},membershipPaymentpa:function(){var e=this;t.scanCode({success:function(a){console.log("条码内容："+a.result);var i=a.result;"HY"==i.substring(0,2)&&16==i.length?e.memberLogin(i):t.showToast({title:"会员不存在",icon:"none",duration:2e3})},fail:function(t){console.log("扫描二维码失败："+t)}})},memberLogin:function(t){var e=this,a="";null!=this.$store.state.mian.intodata&&(a=0==this.$store.state.mian.intodata.data.list.length?"":this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/pos/ticketSearch",{search:t,posTicketCode:a,level2TypeId:"",pageSize:10,pageIndex:1}).then(function(t){var a=e.paytype[0].id;e.qiesettlementInitialization(a),0==t.data.status&&(e.$store.commit("mian/member",t.data),e.initi())})},initi:function(){var t=this;this.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,posTicketCode:""}).then(function(e){t.$store.commit("mian/intodata",e.data);var a={payTypeCode:t.paytype[0].payTypeCode,payTypeId:t.paytype[0].id};t.paysuan("",a)})},settlementInitialization:function(){var t=this,e="";null!=this.$store.state.mian.intodata&&(e=this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:this.paytype[0].id,state:10,posTicketCode:e,posTicketType:10,restingOrderType:10}).then(function(e){t.$store.commit("mian/settlementInitialization",e.data.data)})},qiesettlementInitialization:function(t){var e=this,a="";null!=this.$store.state.mian.intodata&&(a=this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:t,state:10,posTicketCode:a,posTicketType:10,restingOrderType:10}).then(function(t){e.$store.commit("mian/settlementInitialization",t.data.data)})},favorableUpgrade:function(t){this.$store.commit("mian/upgrade",t.memberInfo),this.$store.commit("mian/couponing",t.extendData),null!=this.$store.state.mian.upgrade&&""!=this.$store.state.mian.upgrade?this.$store.commit("mian/upgradeshow",!0):null!=this.$store.state.mian.couponing&&""!=this.$store.state.mian.couponing&&0!=this.$store.state.mian.couponing.length&&this.$store.commit("mian/couponingshow",!0)},clickConfirm:function(e){this.showDialog_1=!1,t.redirectTo({url:"../index/index"})}},mounted:function(){this.Payments()}};e.default=d}).call(this,a("6e42")["default"])},"1cd6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"robstamap"},[t._m(0),a("view",{staticStyle:{width:"100%","min-height":"312.5rpx","max-height":"412.5rpx",background:"#f64c5e","margin-top":"-1.041666rpx"}},[null!=t.freedata&&""!=t.freedata&&0!=t.freedata.length?a("view",{staticStyle:{"font-size":"37.5rpx",color:"#fffaf5","font-family":"PingFangSC-Medium","text-align":"center"}},[t._v("恭喜您获得"+t._s(t.freedata.length)+"张优惠券")]):t._e(),null!=t.freedata&&""!=t.freedata&&0!=t.freedata.length?a("view",{staticStyle:{width:"625rpx","min-height":"157.5rpx","max-height":"300rpx",overflow:"auto",background:"#fffaf5","border-radius":"4.166666rpx",margin:"41.666666rpx auto 0rpx"}},t._l(t.freedata,function(e,i){return a("view",{key:i},[a("view",{staticStyle:{width:"100%",height:"0.041666rpx"}}),a("view",{staticStyle:{width:"583.333333rpx",height:"125rpx",background:"#080808",margin:"15rpx auto 5rpx",position:"relative"}},[a("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.url}}),a("view",{staticStyle:{position:"absolute",width:"263.541666rpx",height:"36.458333rpx",left:"168.541666rpx",bottom:"20.833333rpx"}},[a("text",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"29.166666rpx",color:"#f96c1d"}},[t._v(t._s(e.denomination))]),a("text",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"18.75rpx",color:"#666666","margin-left":"10.416666rpx"}},[t._v(t._s(e.startTime)+"--"+t._s(e.endTime))])])])])})):t._e(),a("view",{staticStyle:{width:"100%",height:"10.416666rpx"}})]),a("view",{staticStyle:{width:"59.375rpx",height:"59.375rpx",margin:"31.25rpx auto 0rpx"}},[a("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/index/close.png",eventid:"63b88a92-0"},on:{click:t.close}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticStyle:{width:"100%",height:"311.458333rpx"}},[a("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/index/tan.png"}})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},2329:function(t,e,a){"use strict";a.r(e);var i=a("0013"),n=a("85a8");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("e5d7");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"60a131a2",null);e["default"]=r.exports},2851:function(t,e,a){"use strict";a.r(e);var i=a("7c20"),n=a("8626");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("4c90");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"4e51a4c2",null);e["default"]=r.exports},3310:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},computed:{ipdataimg:function(){return this.$store.state.mian.upgrade}},methods:{close:function(){this.$store.commit("mian/upgradeshow",!1),null!=this.$store.state.mian.couponing&&""!=this.$store.state.mian.couponing&&0!=this.$store.state.mian.couponing.length?this.$store.commit("mian/couponingshow",!0):t.redirectTo({url:"../index/index"})}}};e.default=a}).call(this,a("6e42")["default"])},3844:function(t,e,a){},"408b":function(t,e,a){"use strict";a.r(e);var i=a("c509"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"448f":function(t,e,a){},"4c90":function(t,e,a){"use strict";var i=a("deeb"),n=a.n(i);n.a},"538f":function(t,e,a){"use strict";a.r(e);var i=a("1cd6"),n=a("d054");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("a4ad");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"913e9366",null);e["default"]=r.exports},5671:function(t,e,a){"use strict";a.r(e);var i=a("1659"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"620f":function(t,e,a){},"6cef":function(t,e,a){"use strict";a("34b9");var i=o(a("b0ce")),n=o(a("2329"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"6d6b":function(t,e,a){},"74d0":function(t,e,a){"use strict";a.r(e);var i=a("824c"),n=a("5671");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("0eb6");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"7c20":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"updiv"}),a("view",{staticClass:"upgradmianp"},[a("view",{staticClass:"upgradmian"},[null!=t.ipdataimg&&""!=t.ipdataimg?a("image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.ipdataimg,mode:""}}):t._e()]),a("view",{staticClass:"close"},[a("image",{staticStyle:{width:"62.5rpx",height:"62.5rpx",margin:"0rpx 219.895833rpx"},attrs:{src:"../../static/index/close.png",mode:"",eventid:"34d389cf-0"},on:{click:t.close}})])])])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"824c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"xy-dialog",class:{"xy-dialog__show":t.isShow},attrs:{eventid:"109bbe61-2"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.bindTouchmove(e)}}},[a("view",{staticClass:"xy-dialog__mask"}),a("view",{staticClass:"xy-dialog__container"},[t.title.length>0?a("view",{staticClass:"xy-dialog__header"},[t._v(t._s(t.title))]):t._e(),a("view",{staticClass:"xy-dialog__content",style:{"text-align":t.textalign}},[t.content?[a("view",{staticClass:"modal-content"},[t._v(t._s(t.content))])]:[t._t("default",null,{mpcomid:"109bbe61-0"})]],2),a("view",{staticClass:"xy-dialog__footer"},[t.isShowCancel?a("view",{staticClass:"xy-dialog__btn xy-dialog__footer-cancel",style:{color:t.cancelColor},attrs:{eventid:"109bbe61-0"},on:{click:t.clickCancel}},[t._v(t._s(t.cancelText))]):t._e(),a("view",{staticClass:"xy-dialog__btn xy-dialog__footer-confirm",class:[t.isShowCancel?"":"xy-dialog__btn-row"],style:{color:t.confirmColor},attrs:{eventid:"109bbe61-1"},on:{click:t.clickConfirm}},[t._v(t._s(t.confirmText))])])])])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"85a8":function(t,e,a){"use strict";a.r(e);var i=a("1c96"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},8626:function(t,e,a){"use strict";a.r(e);var i=a("3310"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"8f0e":function(t,e,a){"use strict";var i=a("6d6b"),n=a.n(i);n.a},a4ad:function(t,e,a){"use strict";var i=a("3844"),n=a.n(i);n.a},b24f:function(t,e,a){"use strict";a.r(e);var i=a("065a"),n=a("408b");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("8f0e");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"0f237ad2",null);e["default"]=r.exports},c509:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=o(a("74d0"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={components:{xyDialog:n.default},data:function(){return{shumoyr:"",theAmount:0,showDialog_1:!1}},computed:{amountChange:{get:function(){return this.shumoyr},set:function(t){this.theAmount=(Number(t)-Number(this.$store.state.mian.settlementInitialization.init_money)).toFixed(1),this.shumoyr=t}},total:function(){return this.$store.state.mian.settlementInitialization}},methods:(i={close:function(){console.log("关闭时获取支付方式："+JSON.stringify(this.$store.state.mian.paytype)),this.qiesettlementInitialization(this.$store.state.mian.paytype[0].id),this.$store.commit("mian/cashshow",!1)},qiesettlementInitialization:function(t){var e=this,a="";null!=this.$store.state.mian.intodata&&(a=this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:t,state:10,posTicketCode:a,posTicketType:10,restingOrderType:10}).then(function(t){e.$store.commit("mian/settlementInitialization",t.data.data)})},cashpay:function(){var e=this,a=this.$store.state.mian.paytype[3].payTypeCode,i=this.$store.state.mian.paytype[3].id;this.$http.post("pc/posPayment/posPaymentAction",{payTypeCode:a,payTypeId:i,posTicketCode:this.$store.state.mian.intodata.data.list[0].pos_ticket_code,state:10,payMoney:this.shumoyr,posTicketType:10,restingOrderType:10,sysParamId:"",authCode:"",memberPwd:"",manualDiscount:0,manualDiscountPassword:"",isInputMember:"",isNoMemberToPay:3}).then(function(a){console.log("现金结算完成之后1："+JSON.stringify(a.data)),0==a.data.status&&(a.data.data>0||0==a.data.data)?(null==a.data.moreInfo&&null==a.data.extendData?e.showDialog_1=!0:null==a.data.moreInfo&&0==a.data.extendData.length?e.showDialog_1=!0:e.$store.commit("mian/cashshow",!1),console.log("现金结算完成之后2："+(null==a.data.moreInfo&&null==a.data.extendData)),e.favorableUpgrade(a.data),e.$store.state.mian.member=null,e.$http.get("pc/posRestingOrder/initAutoPosRestingOrder",{state:10,posTicketType:10,payTypeId:""}).then(function(t){e.$store.commit("mian/intodata",t.data),e.$store.commit("mian/intodata",null),e.$store.commit("mian/goodlist",null)})):0==a.data.status&&a.data.data<0?(t.showToast({title:"支付成功",icon:"success",duration:2e3}),e.shumoyr="",e.qiesettlementInitialization(i)):t.showToast({title:"支付失败",icon:"none",duration:2e3})})}},s(i,"qiesettlementInitialization",function(t){var e=this,a="";null!=this.$store.state.mian.intodata&&(a=this.$store.state.mian.intodata.data.list[0].pos_ticket_code),this.$http.post("pc/posPayment/initPosPaymentAction",{payTypeId:t,state:10,posTicketCode:a,posTicketType:10,restingOrderType:10}).then(function(t){null!=t.data&&e.$store.commit("mian/settlementInitialization",t.data.data)})}),s(i,"favorableUpgrade",function(t){this.$store.commit("mian/upgrade",t.memberInfo),this.$store.commit("mian/couponing",t.extendData),null!=this.$store.state.mian.upgrade&&""!=this.$store.state.mian.upgrade?this.$store.commit("mian/upgradeshow",!0):null!=this.$store.state.mian.couponing&&""!=this.$store.state.mian.couponing&&0!=this.$store.state.mian.couponing.length&&this.$store.commit("mian/couponingshow",!0)}),s(i,"clickConfirm",function(e){this.showDialog_1=!1,this.$store.commit("mian/cashshow",!1),t.redirectTo({url:"../index/index"})}),i)};e.default=r}).call(this,a("6e42")["default"])},d054:function(t,e,a){"use strict";a.r(e);var i=a("1080"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},deeb:function(t,e,a){},e5d7:function(t,e,a){"use strict";var i=a("620f"),n=a.n(i);n.a}},[["6cef","common/runtime","common/vendor"]]]);
});
require('pages/shoppingcart/shoppingcart.js');


