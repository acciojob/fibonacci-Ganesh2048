function fibonacci(num) {
	if(num===1)
		return 0;
	else if(num===2)
		return 1;
	else
	{
	let prev1=0;
	let prev2=1;
	let sum=0;
	for (let i = 2; i < num; i++)
		{
			sum=prev1+prev2;
			prev1=prev2;
			prev2=sum;
		}
		return sum; 
		 
	}
}
// your code here

//let num=prompt()
module.exports = fibonacci;
//alert(fibonacci(num));
