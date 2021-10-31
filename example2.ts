
// Using crypto node package
import { createHash } from 'crypto'

// Helper function to quickly apply hash to input
function hash_value ( value : string ){
    return createHash('SHA256').update(value).digest('hex')
}

// Recursive

let value = "blockchains are cool"
for (let i = 0; i < 5 ; i ++ ){

    let new_value = hash_value( value )
    console.log(`Hashing ${value.substr(0,10)}... results in ${new_value.substr(0,10)}...`)
    value = new_value

}




