import NUMBER_LIST from "./NumbersDay1"

export default function getDay1Out () {
        //load text as a char array
        const list = Array.from(NUMBER_LIST)

        let sum = 0
        let rowCounter = 0
        let activeList = 1
        let separatedArr = {1: [], 2: []}

        //separate two-columns of text into two arrays
        for(const char of list) {
            if(char === "\n") {
                rowCounter++
                activeList = 1
            } else if(char === " "){
                activeList = 2
            }else{
                (separatedArr[activeList][rowCounter] !== undefined) 
                    ? separatedArr[activeList][rowCounter] += "" + char
                    : separatedArr[activeList][rowCounter] = ""
            }
        }
        
        //iterate array and sum for each row the numInleftColumnValue * numInRightColumnOccurencesCount
        separatedArr[1].map((num) => {
            sum += num * separatedArr[2].filter((v) => (v === num)).length
        })
        return sum
}
