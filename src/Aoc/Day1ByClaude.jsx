import NUMBER_LIST from "./NumbersDay1"

export default function getDay1Out() {
    // Rozdělení vstupního textu na řádky a následně na dvojice čísel
    const pairs = NUMBER_LIST.split('\n').map(line => line.trim().split(/\s+/));
    
    // Vytvoření mapy pro počítání výskytů pravých čísel
    const rightNumbersCount = new Map();
    pairs.forEach(([_, right]) => {
        rightNumbersCount.set(right, (rightNumbersCount.get(right) || 0) + 1);
    });
    
    // Výpočet součtu
    return pairs.reduce((sum, [left]) => 
        sum + (parseInt(left) * (rightNumbersCount.get(left) || 0)), 0);
}