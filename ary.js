// ary.js

let ary = [];
ary.push('demo1');
ary.push('2nd item');
ary.push('item 3');
ary.push('four');
console.log(ary);
ary.forEach(function(item,index,arry) {
	console.log(index, item);
});
console.log('Length',ary.length);
