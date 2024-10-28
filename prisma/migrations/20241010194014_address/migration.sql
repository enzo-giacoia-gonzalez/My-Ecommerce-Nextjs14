/*
  Warnings:

  - Added the required column `paymentIntentId` to the `ProductPaymentCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductPaymentCart" ADD COLUMN     "paymentIntentId" TEXT NOT NULL;
