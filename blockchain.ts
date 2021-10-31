import { createHash } from 'crypto'

function hash_value ( value : string ){
    return createHash('SHA256').update(value).digest('hex')
}

// Create a blockchain as a simple array of blocks
type Block = { previous : string, data : string }
let blockchain : Block[] = []

// Manually push the genesis block
blockchain.push({
    previous : '',
    data : 'genesis'
})

// When creating a block, record the previous hash as part of your block to form a chain
function create_block ( data : string ) {
    
    let previous_block = blockchain[blockchain.length -1]
    let previous_hash = hash_value(JSON.stringify(previous_block))

    let block = {
        previous : previous_hash,
        data
    }

    blockchain.push(block)

}

create_block( "joe pays john $5" )
create_block( "bill pays john $5" )

function verify_chain ( chain : Block[]) {

    for ( let i = 1; i < chain.length ; i ++ ){

        let previous_block = chain[i-1]

        let previous_hash = hash_value(JSON.stringify(previous_block))     
        let expected_hash = chain[i].previous

        let prev_hash_str = previous_hash.substr(0,6) + '...'
        let exct_hash_str = expected_hash.substr(0,6) + '...'

        if ( expected_hash != previous_hash ){
            console.log(`INVALID! \nAt block ${i}, hash ${prev_hash_str} was expected to be ${exct_hash_str}`)
            return
        }
        else {
            console.log(`${exct_hash_str} matches ${prev_hash_str}`)
        }

    }

    console.log('Chain is valid')

}

blockchain[1].data = "joe pays me $1000"

verify_chain( blockchain )

console.log( blockchain )

/*
console.log(hash_value("test2"))


function search_for_hash ( prefix : string ){
    
    let value = 0
    let start_time = +new Date()

    while ( true ){

        let hash = hash_value( value + "" )
        
        if (hash.startsWith(prefix)){
            let end_time = + new Date()
            console.log(`${hash} starts with ${prefix}`)
            console.log(`Found in ${(end_time-start_time)/1000} seconds after ${value} searches`)
            return
        }
        
        value += 1
    }

}

search_for_hash( '01' )



interface Block {
    previous : string,
    data : string,
    proof ?: string,
}


let origin : Block = {
    previous : "",
    data : "Welcome to the blockchain!"
}

function mine_block ( block : Block , prefix : string){

    let value = 0
    let start_time = +new Date()

    while ( true ){

        block.proof = value + ''
        let hash = hash_value( JSON.stringify(block) )
        
        if (hash.startsWith(prefix)){
            let end_time = + new Date()
            console.log(`Mined in ${(end_time-start_time)/1000} seconds!`)
            return
        }
        
        value += 1
    }

}

mine_block( origin, '0000' )

let blockChain : Block[] = []

function publish_block ( new_block : Block ) {

    let last_block = blockChain[blockChain.length-1]
    
    let last_hash = hash_value( JSON.stringify(last_block))
    let next_hash = hash_value( JSON.stringify(new_block))

    let valid = new_block.previous == last_hash && next_hash.startsWith('00000')

    if ( ! valid )
        console.log('REJECTED!')
    else
        blockChain.push( new_block )

}

*/