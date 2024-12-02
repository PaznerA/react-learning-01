import NUMBER_LIST from "./NumbersDay2"

export default function getDay2Out() {
    const grups = NUMBER_LIST.split('\n')
        .map(line => line.trim().split(/\s+/).map(Number))
        .filter(group => group.length > 0); // Odstraní prázdné řádky
    
    let okList = 0;
    let errList = {}
    
    const checkDiff = function(numberGroup) {
        if (numberGroup.length < 2) return false;
        
        let isAscending = null;
        let last = numberGroup[0];
        
        for (let i = 1; i < numberGroup.length; i++) {
            const current = numberGroup[i];
            const diff = current - last;
            
            // Kontrola rozdílu (1-3 nebo -3 až -1)
            if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                errList[i] ? errList[i]++ : errList[i] = 1
                return false;
            }
            
            // Kontrola konzistence směru
            if (isAscending === null) {
                isAscending = diff > 0;
            } else if ((diff > 0) !== isAscending) {
                errList[i] ? errList[i]++ : errList[i] = 1
                return false;
            }
            
            last = current;
        }
        
        return true;
    }
    
    grups.forEach((numGroup) => {
        if (checkDiff(numGroup)) {
            okList++;
        }
    });
    
    return {okList, errList};
}
//425 - no
//510 - no