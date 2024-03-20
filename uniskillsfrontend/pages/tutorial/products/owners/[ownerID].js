
import { useRouter } from 'next/router'

// USE THIS PAGE TO VIEW INDIVIDUAL DETAILS PAGE OF PEOPLE, WHO OWNS PRODUCTS IN THIS APP
// ROUTE => http://localhost:3000/products/owners/{ANY STRING OR INTEGER}
function ProductOwnerPage(){
    const router = useRouter()
    const collectedOwnerID = router.query.ownerID

    return <h1>Product Owner no: {collectedOwnerID}</h1>
}

export default ProductOwnerPage