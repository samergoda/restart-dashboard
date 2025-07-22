import { ProductsProvider } from "@/components/context/ProductsContext";

export default function RootProviders({ children }: { children: React.ReactNode }) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
