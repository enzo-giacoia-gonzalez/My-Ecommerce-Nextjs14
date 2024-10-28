/*
  Warnings:

  - Added the required column `address` to the `CheckoutAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CheckoutAddress" ADD COLUMN     "address" TEXT NOT NULL;
