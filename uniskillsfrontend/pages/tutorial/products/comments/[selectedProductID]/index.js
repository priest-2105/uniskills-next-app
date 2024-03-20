import { useRouter } from 'next/router';

// Use this page to view particular comments attached to a particular product listed on this app
// Route => http://localhost:3000/products/comments/{ANY STRING OR INTEGER AS PRODUCT}/{ANY STRING OR INTEGER AS COMMENT}
function ProductCommentsPage() {
  const router = useRouter();
  const collectedSelectedProductID = router.query.selectedProductID;

  return <h1>View all comments attached to PRODUCT no: {collectedSelectedProductID}</h1>;
}

export default ProductCommentsPage;
