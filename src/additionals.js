function getRandInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandArr(arr)
{
	return arr[getRandInt(0, arr.length)];
}

function isNullOrWhitespace(input) 
{
	return !input || !input.trim();
}