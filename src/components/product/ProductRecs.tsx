import { getRandomProducts } from '@/fetching/getRandomProducts';
import ImageProps from '@/props/ImageProps';
import Button from '../subcomponents/Button';

interface ProductRecsProps {
  shortName: string;
  productId: string;
  imageRec: ImageProps;
  category: string;
}

export default async function ProductRecs() {
  const products = await getRandomProducts();


  const productList = products?.map((product: ProductRecsProps) => {
    return (
      <li key={product.productId + "recs"}>
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet={product.imageRec.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.imageRec.tablet}
          />
          <img src={product.imageRec.mobile} alt="" />
        </picture>
        <h3 className='product-card-header'>{product.shortName}</h3>
        <Button
          href={`/${product.category}/${product.productId}`}
          buttonColor='orange'
          buttonText='SEE PRODUCT'
        />
      </li>
    )
  })

  return (
    <div className='product-recs'>
      <h2 className='product-info'>YOU MAY ALSO LIKE</h2>
      <ul>
        {productList}
      </ul>
    </div>
  );
}