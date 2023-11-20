function osszead(a,b){
    return a+b;
}
function kivonas(a,b){
    return a-b;


}
function szorzas(a,b)
{
    return a*b;
}
function osztas(a,b)
{
    if(b !== 0)
    {
        return a / b;
    } else {
        console.error("Hibás osztás: Nem lehet 0-val osztani")
        return NaN;
    }
    


}
function szamol(alapmuvelet,a,b,kiiratas) {
    const eredmeny = alapmuvelet(a,b);
    kiiratas(eredmeny);
}

szamol(osszead, 5, 3, function (result) {
    console.log('Az összeadás eredménye: ' + result);
  });
  
  szamol(kivonas, 8, 2, function (result) {
    console.log('A kivonás eredménye: ' + result);
  });
  
  szamol(szorzas, 4, 6, function (result) {
    console.log('A szorzás eredménye: ' + result);
  });
  
  szamol(osztas, 9, 3, function (result) {
    console.log('Az osztás eredménye: ' + result);
  });
