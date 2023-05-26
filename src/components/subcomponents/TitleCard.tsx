import Link from "next/link";

interface ProductProps {
  name: string;
  description: string;
  category: string;
  productId: string;
}

interface TitleCardProps {
  product: ProductProps;
  isNew?: boolean;
  isH1?: boolean;
  isFeature?: boolean;
  textColor: "black" | "white";
  buttonColor: "black" | "orange";
}

export default function TitleCard({
  product,
  isNew,
  isH1,
  isFeature,
  textColor,
  buttonColor
}: TitleCardProps) {
  return (
    <div className="title-card" style={{ color: textColor }}>
      {isNew && (
        <span
          className="new-product-label"
          style={{ color: textColor === "black" ? "#D87D4A" : "white"}}
        >
          NEW PRODUCT
        </span>
      )}
      {isH1 ? (
        <h1 className={isFeature ? "feature-header" : "product-header"}>
          {product.name}
        </h1>
      ) : (
        <h2 className="feature-header">{product.name}</h2>
      )}
      <p>{product.description}</p>
      <Link
        href={`/${product.category}/${product.productId}`}
        className={`button button__${buttonColor}`}
      >
        SEE PRODUCT
      </Link>
    </div>
  );
}
