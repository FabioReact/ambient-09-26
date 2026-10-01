import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const HeroCardSkeleton = () => (
  <Card
    role="status"
    aria-label="Loading hero"
    className="w-full max-w-xs gap-0 overflow-hidden py-0 shadow-sm animate-pulse motion-reduce:animate-none"
  >
    <div className="h-80 bg-muted" />
    <CardHeader className="pt-4">
      <CardTitle className="h-6 w-36 rounded bg-muted" />
      <CardDescription className="h-5 w-28 rounded bg-muted" />
      <CardAction className="h-5 w-10 rounded bg-muted" />
    </CardHeader>
    <CardContent className="mt-3 flex flex-wrap gap-1.5 border-t py-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="h-6 w-14 rounded-full bg-muted" />
      ))}
    </CardContent>
    <CardContent className="border-t py-3">
      <div className="h-9 w-full rounded-md bg-muted" />
    </CardContent>
  </Card>
);
