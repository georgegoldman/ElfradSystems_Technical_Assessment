
function TreeConstructor(strArr) {
if (Array.isArray(strArr)){
        var newstrArr = []//restructure the list
let outPutval //value to be returned

strArr.forEach(function(e) {
        let newE = e.replace("\(", "")
        let anotherNewE = newE.replace("\)", "")
        newstrArr.push(anotherNewE)
} )
var newSecondValueList = []

// remove duplicate  if any
let removeDuplicates = newstrArr.filter(function(item, index) {
        return newstrArr.indexOf(item) === index
})

// get list of parent
removeDuplicates.forEach(function(e) {
        let pair = e.split(',')
        newSecondValueList.push(pair[1])

})

//check if the tree is binary
removeDuplicates.forEach(function(e) {
        let pair = e.split(',')
        let count = 0
        newSecondValueList.forEach(function(x) {
                if (x == pair[1])
                {
                        count++;
                }
                if (count > 2) outPutval = false
                else outPutval = true
        })

})
console.log(outPutval)
return outPutval
}else {
        console.log("please enter an array")
}
}

var arr;
TreeConstructor(arr)