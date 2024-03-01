import Card, { CardContent } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { dashboardData } from "@/base/constants";
import Image from "next/image";

export default function Home() {
  const { cardData } = dashboardData;
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData?.map((data, i) => (
          <Card key={`${data.label}-${i}`} {...data} />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          {/* <BarChart /> */}
        </CardContent>
      </section>
    </div>
  );
}
