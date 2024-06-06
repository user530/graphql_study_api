/*
  Warnings:

  - Added the required column `categoryId` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goal` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locale` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published_at` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studyFormat` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StudyFormat" AS ENUM ('online', 'campus', 'blended');

-- CreateEnum
CREATE TYPE "StickerType" AS ENUM ('finalAttestation', 'fullTimeModuleInMoscow', 'practiceModulesAndFinalAttestation');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('ru');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('mini', 'executive', 'profession', 'course', 'mba');

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "copyToKk" BOOLEAN,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "employment" BOOLEAN,
ADD COLUMN     "frdo" BOOLEAN,
ADD COLUMN     "goal" TEXT NOT NULL,
ADD COLUMN     "hit" BOOLEAN,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "locale" "Locale" NOT NULL,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "new" BOOLEAN,
ADD COLUMN     "pictureId" INTEGER,
ADD COLUMN     "price" BIGINT,
ADD COLUMN     "published_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "showInMenu" BOOLEAN,
ADD COLUMN     "specSubjectsAddonId" INTEGER,
ADD COLUMN     "studyFormat" "StudyFormat" NOT NULL,
ADD COLUMN     "study_field_id" INTEGER,
ADD COLUMN     "subjectsStickerType" "StickerType",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "StudyField" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "copyToKk" BOOLEAN,
    "slug" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "type" "CategoryType" NOT NULL,
    "slug" TEXT NOT NULL,
    "copyToKk" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "labelCasesId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabelCase" (
    "id" SERIAL NOT NULL,
    "singular" TEXT NOT NULL,
    "plural" TEXT NOT NULL,

    CONSTRAINT "LabelCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "string" TEXT,
    "title" TEXT,
    "duration" INTEGER,
    "new" BOOLEAN,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "string" TEXT,
    "new" BOOLEAN,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillsOnSubjects" (
    "subjectId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillsOnSubjects_pkey" PRIMARY KEY ("skillId","subjectId")
);

-- CreateTable
CREATE TABLE "WhatWillYouLearn" (
    "programId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "WhatWillYouLearn_pkey" PRIMARY KEY ("programId","subjectId")
);

-- CreateTable
CREATE TABLE "SpecializedSubject" (
    "programId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "SpecializedSubject_pkey" PRIMARY KEY ("programId","subjectId")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" SERIAL NOT NULL,
    "studyHours" TEXT,
    "minStudyMonths" DOUBLE PRECISION,
    "practicalLessons" INTEGER,
    "workshops" INTEGER,
    "modulesDescription" TEXT,
    "modulesResult" TEXT,
    "videomaterials" INTEGER,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleTool" (
    "id" SERIAL NOT NULL,
    "tool" TEXT NOT NULL,

    CONSTRAINT "ModuleTool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleToolsOnDuration" (
    "moduleToolId" INTEGER NOT NULL,
    "durationId" INTEGER NOT NULL,

    CONSTRAINT "ModuleToolsOnDuration_pkey" PRIMARY KEY ("moduleToolId","durationId")
);

-- CreateTable
CREATE TABLE "BaseSubject" (
    "programId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "BaseSubject_pkey" PRIMARY KEY ("programId","subjectId")
);

-- CreateTable
CREATE TABLE "ProgramModulesCounter" (
    "id" SERIAL NOT NULL,
    "leftCounter" TEXT,
    "rightCounter" TEXT,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "ProgramModulesCounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diploma" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Diploma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiplomaOnProgram" (
    "diplomaId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "DiplomaOnProgram_pkey" PRIMARY KEY ("diplomaId","programId")
);

-- CreateTable
CREATE TABLE "PotentialCandidat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PotentialCandidat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PotentialCandidatOnProgram" (
    "candidatId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "PotentialCandidatOnProgram_pkey" PRIMARY KEY ("candidatId","programId")
);

-- CreateTable
CREATE TABLE "SubjectAddon" (
    "id" SERIAL NOT NULL,
    "Practice" BOOLEAN NOT NULL,
    "OfflineModule" BOOLEAN,
    "diplomaProtection" BOOLEAN,

    CONSTRAINT "SubjectAddon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActualInformation" (
    "id" SERIAL NOT NULL,
    "paragraph" TEXT,
    "description" TEXT NOT NULL,
    "photo1Id" INTEGER,
    "photo2Id" INTEGER,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "ActualInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alternativeText" TEXT NOT NULL DEFAULT '',
    "caption" TEXT NOT NULL DEFAULT '',
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "formats" JSONB NOT NULL,
    "hash" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "previewUrl" TEXT,
    "provider" TEXT NOT NULL,
    "provider_metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonusSubject" (
    "programId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "BonusSubject_pkey" PRIMARY KEY ("programId","subjectId")
);

-- CreateTable
CREATE TABLE "HeroAdvantage" (
    "id" SERIAL NOT NULL,
    "string" TEXT NOT NULL,

    CONSTRAINT "HeroAdvantage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroAdvantageOnProgram" (
    "heroAdvantageId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "HeroAdvantageOnProgram_pkey" PRIMARY KEY ("heroAdvantageId","programId")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "studentName" TEXT NOT NULL,
    "studentReview" TEXT NOT NULL,
    "photoId" INTEGER,
    "programId" INTEGER,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaqOnProgram" (
    "faqId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "FaqOnProgram_pkey" PRIMARY KEY ("faqId","programId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Duration_programId_key" ON "Duration"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramModulesCounter_programId_key" ON "ProgramModulesCounter"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "ActualInformation_programId_key" ON "ActualInformation"("programId");

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_study_field_id_fkey" FOREIGN KEY ("study_field_id") REFERENCES "StudyField"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_specSubjectsAddonId_fkey" FOREIGN KEY ("specSubjectsAddonId") REFERENCES "SubjectAddon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_labelCasesId_fkey" FOREIGN KEY ("labelCasesId") REFERENCES "LabelCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnSubjects" ADD CONSTRAINT "SkillsOnSubjects_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnSubjects" ADD CONSTRAINT "SkillsOnSubjects_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatWillYouLearn" ADD CONSTRAINT "WhatWillYouLearn_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatWillYouLearn" ADD CONSTRAINT "WhatWillYouLearn_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecializedSubject" ADD CONSTRAINT "SpecializedSubject_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecializedSubject" ADD CONSTRAINT "SpecializedSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duration" ADD CONSTRAINT "Duration_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleToolsOnDuration" ADD CONSTRAINT "ModuleToolsOnDuration_moduleToolId_fkey" FOREIGN KEY ("moduleToolId") REFERENCES "ModuleTool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleToolsOnDuration" ADD CONSTRAINT "ModuleToolsOnDuration_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseSubject" ADD CONSTRAINT "BaseSubject_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseSubject" ADD CONSTRAINT "BaseSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramModulesCounter" ADD CONSTRAINT "ProgramModulesCounter_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiplomaOnProgram" ADD CONSTRAINT "DiplomaOnProgram_diplomaId_fkey" FOREIGN KEY ("diplomaId") REFERENCES "Diploma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiplomaOnProgram" ADD CONSTRAINT "DiplomaOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PotentialCandidatOnProgram" ADD CONSTRAINT "PotentialCandidatOnProgram_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "PotentialCandidat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PotentialCandidatOnProgram" ADD CONSTRAINT "PotentialCandidatOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActualInformation" ADD CONSTRAINT "ActualInformation_photo1Id_fkey" FOREIGN KEY ("photo1Id") REFERENCES "Picture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActualInformation" ADD CONSTRAINT "ActualInformation_photo2Id_fkey" FOREIGN KEY ("photo2Id") REFERENCES "Picture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActualInformation" ADD CONSTRAINT "ActualInformation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonusSubject" ADD CONSTRAINT "BonusSubject_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonusSubject" ADD CONSTRAINT "BonusSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroAdvantageOnProgram" ADD CONSTRAINT "HeroAdvantageOnProgram_heroAdvantageId_fkey" FOREIGN KEY ("heroAdvantageId") REFERENCES "HeroAdvantage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroAdvantageOnProgram" ADD CONSTRAINT "HeroAdvantageOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Picture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaqOnProgram" ADD CONSTRAINT "FaqOnProgram_faqId_fkey" FOREIGN KEY ("faqId") REFERENCES "Faq"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaqOnProgram" ADD CONSTRAINT "FaqOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
