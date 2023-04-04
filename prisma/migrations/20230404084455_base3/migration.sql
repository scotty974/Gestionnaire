/*
  Warnings:

  - You are about to drop the column `data_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `User_id` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_data_id_fkey`;

-- AlterTable
ALTER TABLE `Data` ADD COLUMN `User_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `data_id`;

-- AddForeignKey
ALTER TABLE `Data` ADD CONSTRAINT `Data_User_id_fkey` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
