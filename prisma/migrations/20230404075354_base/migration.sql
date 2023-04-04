-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(191) NULL,
    `Password` VARCHAR(191) NOT NULL,
    `data_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `WebSite` VARCHAR(191) NOT NULL,
    `Account` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_data_id_fkey` FOREIGN KEY (`data_id`) REFERENCES `Data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
