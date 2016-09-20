/**
 *
 * Created by seans on 9/19/2016.
 */

const testlist1 =['a', 'b', 'c'];
const testlist2 =[1, 2, 3];

function zipList(list1, list2){
  'use strict';
  const result = [];
  for (let i =0; i< list1.length; i++){
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList(testlist1, testlist2));

function zipListTheSimpleWay(list1, list2){
  'use strict';
   const longlist = _.zip(list1, list2);
  return _.flatten(longlist);
}

console.log(zipListTheSimpleWay(testlist1,testlist2));