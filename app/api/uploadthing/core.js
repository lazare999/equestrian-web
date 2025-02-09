import { createUploadthing, UploadThingError } from "uploadthing/next";

const f = createUploadthing();

const auth = (req) => ({ id: "admin" }); // Fake auth function

export const ourFileRouter = {
  // Endpoint for uploading other images (up to 10 files)
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 10 }, // Allow up to 10 images
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      return { uploadedBy: metadata.userId };
    }),

  // Endpoint for uploading a single logo image
  logoUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 }, // Only allow one image
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Logo upload complete for userId:", metadata.userId);
      console.log("Logo file url:", file.url);
      return { uploadedBy: metadata.userId };
    }),
};
