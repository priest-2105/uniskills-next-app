
import { useRouter } from 'next/router'

// USE THIS PAGE TO VIEW INDIVIDUAL DETAILS PAGE OF PRODUCTS, REGISTERED ON THIS APP
// ROUTE => http://localhost:3000/products/{ANY STRING OR INTEGER}
function ProductDetailsPage(){
    const router = useRouter()
    const collectedProductID = router.query.productID

    return <h1>Product Details Page no: {collectedProductID}</h1>
}

export default ProductDetailsPage