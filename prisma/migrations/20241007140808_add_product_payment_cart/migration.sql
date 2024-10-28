-- CreateTable
CREATE TABLE "ProductPaymentCart" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" "Size" NOT NULL,
    "checkoutAddressId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductPaymentCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductPaymentCart" ADD CONSTRAINT "ProductPaymentCart_checkoutAddressId_fkey" FOREIGN KEY ("checkoutAddressId") REFERENCES "CheckoutAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPaymentCart" ADD CONSTRAINT "ProductPaymentCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
