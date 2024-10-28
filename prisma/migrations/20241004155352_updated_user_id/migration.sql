/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CheckoutAddress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CheckoutAddress_userId_key" ON "CheckoutAddress"("userId");
