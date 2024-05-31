/*
  Warnings:

  - The primary key for the `article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `article` table. All the data in the column will be lost.
  - The primary key for the `categorie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cat_id` on the `categorie` table. All the data in the column will be lost.
  - The primary key for the `commentaires` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `commentaires` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `commentaires` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `commentaires` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`title`);

-- AlterTable
ALTER TABLE `categorie` DROP PRIMARY KEY,
    DROP COLUMN `cat_id`,
    ADD PRIMARY KEY (`name`);

-- AlterTable
ALTER TABLE `commentaires` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `user_email`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `art_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`name`);

-- CreateTable
CREATE TABLE `_articleTocategorie` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_articleTocategorie_AB_unique`(`A`, `B`),
    INDEX `_articleTocategorie_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_user_email_fkey` FOREIGN KEY (`user_email`) REFERENCES `utilisateur`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentaires` ADD CONSTRAINT `commentaires_art_id_fkey` FOREIGN KEY (`art_id`) REFERENCES `article`(`title`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_articleTocategorie` ADD CONSTRAINT `_articleTocategorie_A_fkey` FOREIGN KEY (`A`) REFERENCES `article`(`title`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_articleTocategorie` ADD CONSTRAINT `_articleTocategorie_B_fkey` FOREIGN KEY (`B`) REFERENCES `categorie`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
