import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  // Demo subscription status
  const isActive = false;

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Premium Plan

          {isActive && <Badge>Active</Badge>}
        </CardTitle>

        <CardDescription>
          {isActive
            ? "Your premium subscription is active."
            : "Unlock every premium story, cancel anytime."}
        </CardDescription>

        {/* Price */}
        <div className="pt-4">
          <span className="text-4xl font-bold">$9.99</span>
          <span className="ml-1 text-sm text-muted-foreground">
            / month
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features */}
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            Unlimited premium articles
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            Early access to new stories
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            Support independent journalism
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            Ad-free reading experience
          </li>
        </ul>

        {/* Demo Payment Button */}
        {!isActive && (
          <Button className="w-full">
            <CreditCard className="mr-2 size-4" />
            Subscribe Now
          </Button>
        )}

        {isActive && (
          <Button variant="outline" className="w-full">
            Manage Subscription
          </Button>
        )}
      </CardContent>
    </Card>
  );
}