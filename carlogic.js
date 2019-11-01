 
 module.exports= function regNumbers(){
   var database; 
    function addNumber(){

    database = pool.query('insert * from cars WHERE reg_number = $1', [reg_number]);
        
    }
    function regadd(){
        return database
    }
 return{
    addNumber,
    regadd
 }
}