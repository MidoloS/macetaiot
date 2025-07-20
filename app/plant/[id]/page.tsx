import Image from "next/image";
import { TempPie } from "@/app/components/Pie/Temp";
import { LightPie } from "@/app/components/Pie/Light";
import { WaterPie } from "@/app/components/Pie/Water";
import MeasureHistory from "@/app/components/MeasureHistory";
import { mockMeasures } from "@/app/utils/mock-data";

export default async function Plant({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <header>
        <small>Cuidando</small>
        <h1 className="text-xl font-bold">Tomate Cherry</h1>
      </header>
      <main className="flex flex-col gap-2 items-center justify-center">
        <div className="h-[300px] w-[300px] bg-zinc-100 border-zinc-300 border-2 rounded-xl shadow-[0_0_100px_0_rgba(0,0,0,0.15)] flex items-center justify-center">
          <img
            src="/images/TOMATO.png"
            alt="Cacto"
            width={300}
            height={300}
            className="w-[150px] h-[150px] "
          />
        </div>
        <section className="flex ">
          <LightPie />
          <TempPie />
          <WaterPie />
        </section>
      </main>
      <footer className="w-full">
        <MeasureHistory
          title="Horas de Luz"
          data={mockMeasures}
          color="#FFC107"
        />
      </footer>
    </div>
  );
}
