
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

    last_block_hash = hash_value(JSON.stringify(new_block))
    block_chain.push( new_block )

})

// Ability to verify a chain

function verify_chain ( chain_of_blocks : any[] ) : boolean {

    let valid = true
    let last_transaction = ""
    let last_hash = undefined as undefined | string

    chain_of_blocks.forEach( block => {

        if ( last_hash )
            if ( block.previous != last_hash ){
                valid = false
                console.log("Error, there is something wrong with", last_transaction)
            }

        last_transaction = block.data
        last_hash = hash_value(JSON.stringify(block))

    })

    return valid

}

// Now our chain has been created, lets mess with it

block_chain[2].data = "Pay myself $100"

console.log(
    verify_chain(block_chain)
)