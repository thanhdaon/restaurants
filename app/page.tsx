import { Calendar, Home, Menu, MessageCircle, Search } from "lucide-react";
import { RestaurantList } from "~/components/restaurant-list";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { STORE_CATEGORY, textByStoreCategory } from "~/constants/categories";
import { cn } from "~/lib/utils";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="max-w-md h-dvh flex flex-col mx-auto">
        <TopBar />
        <RestaurantList />
        <BottomNavigation />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="맛집 이름을 검색해보세요"
          className="w-full bg-white/25 rounded-lg pl-10 pr-4 py-2 shadow-md"
        />
      </div>
      <Categories />
    </div>
  );
}

function Categories() {
  return (
    <ScrollArea className="w-full whitespace-nowrap mt-4">
      <div className="flex space-x-4 px-4">
        {Object.values(STORE_CATEGORY).map((category, i) => (
          <span key={category} className={cn({ "font-bold": i === 1 })}>
            {textByStoreCategory[category as STORE_CATEGORY]}
          </span>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function BottomNavigation() {
  return (
    <div className="flex justify-between items-center p-4 border-t">
      <Button variant="ghost">
        <div className="flex flex-col items-center gap-1">
          <Home className="h-6 w-6" />
          <span className="text-xxs">홈</span>
        </div>
      </Button>
      <Button variant="ghost">
        <div className="flex flex-col items-center gap-1 text-orange-500">
          <Search className="h-6 w-6 " />
          <span className="text-xxs">검색</span>
        </div>
      </Button>
      <Button variant="ghost">
        <div className="flex flex-col items-center gap-1">
          <MessageCircle className="h-6 w-6" />
          <span className="text-xxs">피드</span>
        </div>
      </Button>
      <Button variant="ghost">
        <div className="flex flex-col items-center gap-1">
          <Calendar className="h-6 w-6" />
          <span className="text-xxs">내 예약</span>
        </div>
      </Button>
      <Button variant="ghost" size="icon">
        <div className="flex flex-col items-center gap-1">
          <Menu className="h-6 w-6" />
          <span className="text-xxs">메뉴</span>
        </div>
      </Button>
    </div>
  );
}
