function areEquallyStrong( yourLeft: number, youRight: number, friendsLeft: number, friendsRight: number): boolean{
    const yourWeakest = yourLeft <= youRight ? yourLeft : youRight;
    const yourStrongest = yourLeft >= youRight? yourLeft : youRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 20, 10))
console.log(areEquallyStrong(10, 15, 10, 15))
console.log(areEquallyStrong(10, 15, 20, 10))
console.log(areEquallyStrong(10, 15, 20, 10))