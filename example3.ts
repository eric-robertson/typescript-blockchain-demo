
// Using crypto node package
import { createHash } from 'crypto'

// Helper function to quickly apply hash to input
function hash_value ( value : string ){
    return createHash('SHA256').update(value).digest('hex')
}

// Build a simple chain

let data = [
    "Rose pays $10 to Joe",
    "Joe pays $5 to Sarah",
    "Joe pays $5 to Eric",
    "Bill pays $15 to Rodney"
]

let last_block_hash : any = "0"
let block_chain : any[] = []

data.forEach( transaction => {

    let last_hash = last_block_hash
    let new_block = {
        previous : last_hash,
        data : transaction
    }

    console.log(`Added transaction '${transaction}' pointing to block 0x${last_hash.substr(0,8)}`)

    last_block_hash = hash_value(JSON.stringify(new_block))
    block_chain.push( new_block )

})
