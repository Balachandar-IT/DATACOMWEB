"use client";

import { useState } from "react";

type QuantityStepperProps = {
  ariaLabel?: string;
  onChange?: (quantity: number) => void;
  value?: number;
};

export function QuantityStepper({ ariaLabel = "Quantity", onChange, value }: QuantityStepperProps) {
  const [internalQuantity, setInternalQuantity] = useState(1);
  const quantity = value ?? internalQuantity;

  const updateQuantity = (nextQuantity: number) => {
    const normalizedQuantity = Math.max(1, nextQuantity);

    if (value === undefined) {
      setInternalQuantity(normalizedQuantity);
    }

    onChange?.(normalizedQuantity);
  };

  return (
    <div className="product-detail-quantity" aria-label={ariaLabel}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => updateQuantity(quantity - 1)}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => updateQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
