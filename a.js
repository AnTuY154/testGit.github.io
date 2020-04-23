function chooseEmployee(){
  var skill=["Java","Java","Java","Java"];
 var salary=[20,40,60,80];
 var requestSkill="Java";
 var k=3;

 if(k==0){
        return 0;
    }else if(requestSkill.length <k){
        return -1;
    }else{
       var haveRequestSkill=[];
   var popularSkill=[];
   var timePopularSkill=[];
   var position=[];
  
   skill.filter(function(item1,index){
         var x =item1===requestSkill;
         if(x===true){
             haveRequestSkill.push(index);
         }else{
             var g=popularSkill.indexOf(item1);
             if(g===-1){
                 var ab=[item1,1];
                 popularSkill.push(item1);
                 timePopularSkill.push(ab);
             }else{
                timePopularSkill[g][1]=timePopularSkill[g][1]+1;
             }
         }
         return x;
   });


     var xsalary=0;
    if(haveRequestSkill.length ===k){
        for(var i=0;i<k;i++){
          xsalary +=salary[haveRequestSkill[i]];
        }
        return xsalary;
    }else{
 timePopularSkill.sort(function(item1,item2){
     var x =item2[1]-item1[1];
     if(x===0){
       if(item2[0]>item1[0]){
         return 1;
       }else{
         return -1;
       } 
     }
       return item2[1]-item1[1];
   });

     haveRequestSkill=haveRequestSkill.sort(function(item1,item2){
             return salary[item1]-salary[item2];
      });
           
    if(haveRequestSkill.length > k){
       
          for(var i=0;i<k;i++){
          xsalary +=salary[haveRequestSkill[i]];
          }
         return xsalary;
           }else{
             for(var i=0;i<haveRequestSkill.length;i++){
              xsalary +=salary[haveRequestSkill[i]];
             }
             var memberLeft=k-haveRequestSkill.length;
             var member=0;
             var count=0;
         while(true){
             var popularSkillSalary=[];
             var index=skill.indexOf(timePopularSkill[count][0]);
             popularSkillSalary.push(index);
              while(true){
                  index=skill.indexOf(timePopularSkill[count][0],index+1);
                  if(index===-1){
                      break;
                  }else{
                    popularSkillSalary.push(index);
                  }
              }
              if(popularSkillSalary.length <memberLeft){
                  for(var i=0;i<popularSkillSalary.length;i++){
                      xsalary +=salary[popularSkillSalary[i]];
                      member=member+1;
                  }
                    count=count+1;
                    memberLeft=memberLeft-member;  

              }else{
                popularSkillSalary=popularSkillSalary.sort(function(item1,item2){
                       return salary[item1]-salary[item2];
              }); 
                  for(var i=0;i<memberLeft;i++){
                      xsalary +=salary[popularSkillSalary[i]];
                  }
                  return xsalary;
              }
          
         }
           }
    }
    }

}


function countStepsTaken(){
  var a = [[-7,1],[5,9],[-1,2],[1,11],[-6,-4],[-4,4],[-1,7]];
   var count=0;
while(true){
   var z=Math.abs(a[0][0]-a[0][1]);
     a=a.map(function(item1){
      
      var x=[item1[0]+z,item1[1]];
     return  x;
    });

    a=a.filter(function(item1){
        return item1[0] !=item1[1];
    });
    count++;
    if(a.length===0){
        break;
    }
         
}
return count;
}

