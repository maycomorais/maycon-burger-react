import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { ProductsProvider } from "./products";
import { CategoriesProvider } from "./categories";
import theme from "../assets/styles/theme";
import { TablesProvider } from "./tables";
import { UsersProvider } from "./users";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UsersProvider>
            <CategoriesProvider>
              <ProductsProvider>
                <TablesProvider>{children}</TablesProvider>
              </ProductsProvider>
            </CategoriesProvider>
          </UsersProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
