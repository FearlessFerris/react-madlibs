function addCommas( num ) {

    // Convert Number to a string 
    const numString = String( num );

    /* 
        Split the string into two parts
          - Integer ( Whole Number )
          - Decimal ( Number after the decimal if present )
    */

    const [ numBreak, decimalBreak ] = numString.split( '.' );

    /* 
        Initialize a finalString 
        Initialize a count:
         -to count number of characters ( numbers ) to  place commas   
    */

    let finalString = '';
    let count = 0;
    
    // Loop over every character in numBreak 
    for( let i = numBreak.length -1; i >= 0; i -- ){
        finalString = numBreak[i] + finalString;
        count++;
        
        // Every 3 characters that are not [0] ( First Character ) add a comma 
        if( count % 3 === 0 && i !== 0 ){
            finalString = ',' + finalString;
        }
    }

    // If a decimal is present add the numBreak to the decimalBreak 
    if( decimalBreak !== undefined ){
        finalString += '.' + decimalBreak;
    }
    console.log( finalString );
    return finalString;

}

addCommas( 3456.82 );

module.exports = addCommas;