function libraryFine(d1, m1, y1, d2, m2, y2) {
  
  let fine=0
  
  if(y1>y2){
    fine=((y1-y2)*10000);
  }else if(y1<y2){
    fine=y1*0;
  }else if(m1>m2){
    fine=((m1-m2)*500);
  }else if(m1<m2){
    fine=m1*0
  }else if(d1>d2){
    fine=((d1-d2)*15);
  }
  return fine;
}

console.log(libraryFine(15,7,2014,1,7,2015));
