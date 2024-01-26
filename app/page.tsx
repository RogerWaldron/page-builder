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
        <PageHeaderHeading>Build your web page</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can drag and drop.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/login" className={cn(buttonVariants())}>
            Sign Up. It's Free!
          </Link>
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Learn More
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
