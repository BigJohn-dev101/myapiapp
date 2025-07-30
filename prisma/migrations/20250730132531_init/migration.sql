-- CreateTable
CREATE TABLE "public"."Claims" (
    "id" SERIAL NOT NULL,
    "claimID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "claimPerson" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contacts" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Claims_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Claims_claimID_key" ON "public"."Claims"("claimID");
