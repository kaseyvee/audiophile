interface ProductFeaturesProps {
  features: string;
  accessories: {
    name: string;
    pieces: number;
  }[]
}

export default function ProductFeatures({ features, accessories }: ProductFeaturesProps) {

  const accessoryList = accessories.map(accessory => {
    return (
      <li key={accessory.name}>
        <span>{accessory.pieces}x</span>
        <p>{accessory.name}</p>
      </li>
    )
  })

  return (
    <div className="product-features">
      <div className="product-features__features">
        <h2 className="product-info">FEATURES</h2>
        <p>
          {features}
        </p>
      </div>
      <div className="product-features__accessories">
        <h2 className="product-info">IN THE BOX</h2>
        <ul>
          {accessoryList}
        </ul>
      </div>
    </div>
  );
}