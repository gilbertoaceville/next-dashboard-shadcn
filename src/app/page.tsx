import Card, { CardContent } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { dashboardData } from "@/base/constants";
import BarChart from "@/components/BarChart";
import SalesCard from "@/components/SalesCard";
import { TurnOffDefaultPropsWarning } from "@/components/TurnOffDPWarning";

export default function Home() {
  const { cardData, salesData } = dashboardData;
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData?.map((data, i) => (
          <Card key={`${data.label}-${i}`} {...data} />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 mt-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
          <TurnOffDefaultPropsWarning />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {salesData.map((data, i) => (
            <SalesCard
            key={`${data.name}-${i}`}
              {...data}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
