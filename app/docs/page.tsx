import PageActions from "@/components/PageActions";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Documentation</PageHeaderHeading>
        <PageHeaderDescription>
          Brief overview of components that you can drag and drop.
        </PageHeaderDescription>
      </PageHeader>
    </div>
  );
}
