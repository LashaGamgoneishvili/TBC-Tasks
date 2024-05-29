import { BlogObject } from "../../types/types";
import ProductList from "../mainPage/ProductList";

export default function Content({
  data,
  righteous,
}: {
  data: BlogObject;
  righteous: any;
}) {
  return (
    <section
      className={`flex flex-col justify-around gap-4 bg-[#f0f0f2] dark:bg-[#21252b]   overflow-x-hidden overflow-y-auto ${righteous.className}`}
    >
      <ProductList data={data} />
    </section>
  );
}