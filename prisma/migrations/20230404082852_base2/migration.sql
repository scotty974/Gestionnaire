/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `Email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `Email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Email_key` ON `User`(`Email`);
