'use client'

import {SiAlfaromeo, SiAstonmartin, SiAudi, SiBentley, SiBmw, SiBugatti, SiChevrolet, SiFerrari, SiFiat, SiFord, SiHonda, SiHyundai, SiInfiniti, SiJaguar, SiJeep, SiKia, SiLamborghini, SiLandrover, SiMaserati, SiMazda, SiMclaren, SiMercedes, SiMini, SiMitsubishi, SiNissan, SiPorsche, SiRam, SiRollsroyce, SiSubaru, SiSuzuki, SiTesla, SiToyota, SiVolkswagen, SiVolvo} from "react-icons/si"
import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export const carBrands = [
  {
    label: "Alfa Romeo",
    icon: SiAlfaromeo,
    description: "Alfa Romeo",
  },
  {
    label: "Aston Martin",
    icon: SiAstonmartin,
    description: "Aston Martin",
  },
  {
    label: "Audi",
    icon: SiAudi,
    description: "Audi",
  },
  {
    label: "Bentley",
    icon: SiBentley,
    description: "Bentley",
  },
  {
    label: "BMW",
    icon: SiBmw,
    description: "BMW",
  },
  {
    label: "Bugatti",
    icon: SiBugatti,
    description: "What color is your Bugatti?",
  },
  {
    label: "Chevy",
    icon: SiChevrolet,
    description: "Chevy",
  },
  {
    label: "Ferrari",
    icon: SiFerrari,
    description: "Ferrari",
  },
  {
    label: "Fiat",
    icon: SiFiat,
    description: "Fiat",
  },
  {
    label: "Ford",
    icon: SiFord,
    description: "Ford",
  },
  {
    label: "Honda",
    icon: SiHonda,
    description: "Honda",
  },
  {
    label: "Hyundai",
    icon: SiHyundai,
    description: "Hyundai",
  },
  {
    label: "Infiniti",
    icon: SiInfiniti,
    description: "Infiniti",
  },
  {
    label: "Jaguar",
    icon: SiJaguar,
    description: "Jaguar",
  },
  {
    label: "Jeep",
    icon: SiJeep,
    description: "Jeep",
  },
  {
    label: "Kia",
    icon: SiKia,
    description: "Kia",
  },
  {
    label: "Lamborghini",
    icon: SiLamborghini,
    description: "Lamborghini",
  },
  {
    label: "Land Rover",
    icon: SiLandrover,
    description: "Land Rover",
  },
  {
    label: "Maserati",
    icon: SiMaserati,
    description: "Maserati",
  },
  {
    label: "Mazda",
    icon: SiMazda,
    description: "Mazda",
  },
  {
    label: "McLaren",
    icon: SiMclaren,
    description: "McLaren",
  },
  {
    label: "Mercedes",
    icon: SiMercedes,
    description: "Mercedes",
  },
  {
    label: "Mini",
    icon: SiMini,
    description: "Mini",
  },
  {
    label: "Mitsubishi",
    icon: SiMitsubishi,
    description: "Mitsubishi",
  },
  {
    label: "Nissan",
    icon: SiNissan,
    description: "Nissan",
  },
  {
    label: "Porsche",
    icon: SiPorsche,
    description: "Porsche",
  },
  {
    label: "Ram",
    icon: SiRam,
    description: "Ram",
  },
  {
    label: "Rolls-Royce",
    icon: SiRollsroyce,
    description: "Rolls-Royce",
  },
  {
    label: "Subaru",
    icon: SiSubaru,
    description: "Subaru",
  },
  {
    label: "Suzuki",
    icon: SiSuzuki,
    description: "Suzuki",
  },
  {
    label: "Tesla",
    icon: SiTesla,
    description: "Tesla",
  },
  {
    label: "Toyota",
    icon: SiToyota,
    description: "Toyota",
  },
  {
    label: "Volkswagen",
    icon: SiVolkswagen,
    description: "Volkswagen",
  },
  {
    label: "Volvo",
    icon: SiVolvo,
    description: "Volvo",
  },
];

const Categories = () => {

  const params = useSearchParams()
  const category = params?.get("category")
  const pathname = usePathname()

  const isMainPage = pathname == "/"

  if(!isMainPage) {
    return null
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {carBrands.map((brand) => (
          <CategoryBox key={brand.label} label={brand.label} icon={brand.icon} selected={category == brand.label} />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;