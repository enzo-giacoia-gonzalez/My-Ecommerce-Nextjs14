/*
  Warnings:

  - You are about to drop the column `countryorregion` on the `CheckoutAddress` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `CheckoutAddress` table. All the data in the column will be lost.
  - Added the required column `countryORregion` to the `CheckoutAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `CheckoutAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CheckoutAddress" DROP COLUMN "countryorregion",
DROP COLUMN "fullname",
ADD COLUMN     "countryORregion" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;
