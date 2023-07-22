function largest(arr, n, i)
{
	if (i == n - 1) {
		return arr[i];
	}
	let Max = largest(arr, n, i + 1);
	return Math.max(Max, arr[i]);
}
let arr = [ 10, 324, 45, 90, 900 ];
let n = arr.length;
console.log("Largest in given array is", largest(arr, n, 0));
