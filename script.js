//your JS code here. If required.
const arr = [1,2,3,4];

new Promise((resolve) =>{
	setTimeout(()=>{
		resolve(arr);
	},3000);
}).then((arr)=>{
    return new Promise(resolve=>{
  		setTimeout(()=>{
			const evenNumbers = arr.filter(a => a%2==0);
    		document.getElementById('output').innerHTML= evenNumbers.join(",");
  			resolve(evenNumbers);
  		},1000);
  		
  	});
  }).then((result)=>{
      return new Promise(resolve=>{
    		setTimeout(()=>{
    		  document.getElementById('output').innerHTML= result.map(num=>num*2).join(",");
    		  resolve();
    		},2000);
  	});
});