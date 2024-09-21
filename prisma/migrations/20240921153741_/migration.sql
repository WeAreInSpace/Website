-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "ZiraCloud" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workspaceName" TEXT NOT NULL,

    CONSTRAINT "ZiraCloud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZiraFavLink" (
    "id" TEXT NOT NULL,
    "ziraCloudId" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ZiraFavLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZiraDocs" (
    "id" TEXT NOT NULL,
    "ziraCloudId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ZiraDocs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZiraDocsPage" (
    "id" TEXT NOT NULL,
    "ziraDocsId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL,

    CONSTRAINT "ZiraDocsPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZiraDocsUserAllow" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "permission" TEXT NOT NULL,
    "ziraDocsPageId" TEXT NOT NULL,

    CONSTRAINT "ZiraDocsUserAllow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "ZiraCloud_userId_key" ON "ZiraCloud"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ZiraDocs_ziraCloudId_key" ON "ZiraDocs"("ziraCloudId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraCloud" ADD CONSTRAINT "ZiraCloud_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraFavLink" ADD CONSTRAINT "ZiraFavLink_ziraCloudId_fkey" FOREIGN KEY ("ziraCloudId") REFERENCES "ZiraCloud"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraDocs" ADD CONSTRAINT "ZiraDocs_ziraCloudId_fkey" FOREIGN KEY ("ziraCloudId") REFERENCES "ZiraCloud"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraDocsPage" ADD CONSTRAINT "ZiraDocsPage_ziraDocsId_fkey" FOREIGN KEY ("ziraDocsId") REFERENCES "ZiraDocs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraDocsUserAllow" ADD CONSTRAINT "ZiraDocsUserAllow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZiraDocsUserAllow" ADD CONSTRAINT "ZiraDocsUserAllow_ziraDocsPageId_fkey" FOREIGN KEY ("ziraDocsPageId") REFERENCES "ZiraDocsPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;