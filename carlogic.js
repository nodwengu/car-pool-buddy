function regNumbers(){
    
    function regInput(){
        var database = await pool.query('insert * from cars WHERE reg_number = $1', [reg_number]);
        
    }

 return{
     regInput
 }
}