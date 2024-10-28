-- CreateTable
CREATE TABLE "CheckoutAddress" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "countryorregion" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CheckoutAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckoutAddress_email_key" ON "CheckoutAddress"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CheckoutAddress_userId_key" ON "CheckoutAddress"("userId");
