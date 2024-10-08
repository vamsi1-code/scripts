let arr = [{ name: "John", notes: [3, 5, 4,7]}];
  let sum=0;
  let avgsum;
  let len;
  let avgsums
  for(i=0;i<arr.length;i++){
      let x = arr[i]["notes"];
      console.log(x);
      for(j=0;j<arr[i]["notes"].length;j++){
      len=arr[i]["notes"].length
      sum=sum+arr[i]["notes"][j]
      }
      let avgsum = sum/len;
      delete arr[i]["notes"]
      arr[i]["avgsums"] =avgsum;
      console.log(arr)
  }
  
  