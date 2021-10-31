
// Using crypto node package
import { createHash } from 'crypto'

// Helper function to quickly apply hash to input
function hash_value ( value : string ){
    return createHash('SHA256').update(value).digest('hex').toUpperCase()
}

function mine_a_hash ( prefix : string ) : any {

    let test_value = 0
    let start_time = +new Date()

    while (true) {

        let next_test = "" + test_value
        if (hash_value(next_test).startsWith(prefix)){
            return ({
                value : next_test,
                time : +new Date() - start_time,
                hash_value : hash_value(next_test)
            })
        }
        test_value += 1
    }

}

// What do you want your hash to look like?
for ( let i = 0 ; i < 10 ; i ++ )
    console.log(
        mine_a_hash( ''.padStart(i, 'A') )
    )

    