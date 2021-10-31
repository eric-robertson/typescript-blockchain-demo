
// Using crypto node package
import { createHash } from 'crypto'

// Helper function to quickly apply hash to input
function hash_value ( value : string ){
    return createHash('SHA256').update(value).digest('hex')
}

// Easily Computed
console.log(
    hash_value("hash functions are cool")
)
console.log(
    hash_value("hash functions are cool!")
)




