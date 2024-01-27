import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import PhotoGrid from "@/components/PhotoGrid";
import PhotoUploader from "@/components/PhotoUploader";
import React from "react";

function Photos() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Photos</PageHeaderHeading>
        <PageHeaderDescription>
          Upload photos to add to your webpages
        </PageHeaderDescription>
      </PageHeader>
      <PhotoUploader />
      <PhotoGrid />
    </div>
  );
}

export default Photos;
