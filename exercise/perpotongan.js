// function getIntersection(set1, set2) { 
//     const ans = new Set(); 
//     for (let i of set2) { 
//         if (set1.has(i)) { 
//             ans.add(i); 
//         } 
//     } 
//     return ans; 
// } 
// const set1 = new Set([1, 2, 3, 8, 11]); 
// const set2 = new Set([1, 2, 5, 8]); 
  
// const result = getIntersection(set1, set2); 
// console.log(result);

function perpotongan(o1, o2) {
    const res = {};

    for (let key in o1) {
        if (o2.hasOwnProperty(key) && o1[key] === o2[key]) {
            res[key] = o1[key]
        }
    }
    return res
}

console.log(perpotongan({ a: 1, b: 2 }, { a: 1, c: 3}))