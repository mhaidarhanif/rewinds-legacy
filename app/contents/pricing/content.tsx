import { Button, ButtonGroup, RemixLinkButton } from "~/components";
import { configPricingPlans } from "~/configs";
import { useState } from "~/hooks";

import type { Currencies, CurrencySymbol } from "~/types";

interface PricingTableProps {
  symbol: CurrencySymbol;
}

export const PricingContent = () => {
  const [symbol, setCurrency] = useState<CurrencySymbol>("USD");

  const currencies: Currencies = [
    { symbol: "USD", name: "$ US Dollar" },
    { symbol: "EUR", name: "€ Euro" },
    { symbol: "GBP", name: "£ British Pound" },
    { symbol: "CAD", name: "$ Canadian Dollar" },
    { symbol: "SGD", name: "$ Singapore Dollar" },
    { symbol: "MYR", name: "RM Malaysian Ringgit" },
    { symbol: "IDR", name: "Rp Indonesian Rupiah" },
  ];

  const changeCurrency = (currencySymbol: CurrencySymbol) => {
    setCurrency(currencySymbol);
  };

  return (
    <div className="stack-v items-center gap-10">
      <ButtonGroup className="justify-center">
        {currencies.map((item) => {
          return (
            <Button
              key={item.symbol}
              color={item.symbol === symbol ? "primary" : "none"}
              variant={item.symbol === symbol ? "solid" : "outline"}
              onClick={() => {
                return changeCurrency(item.symbol);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </ButtonGroup>

      <PricingPlans symbol={symbol} />
    </div>
  );
};

export const PricingPlans = ({ symbol }: PricingTableProps) => {
  return (
    <div className="grid min-h-[500px] w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {configPricingPlans.map((plan) => {
        const price = plan.price[symbol];
        const priceText = `${symbol} ${price}`;

        return (
          <div
            key={plan.name}
            className="bg-panel border-panel stack-v w-full gap-5 rounded-base p-5"
          >
            <div className="stack-v gap-1">
              <span className="text-lg font-bold">{plan.name}</span>
              <span className="text-4xl font-bold text-primary-500">
                {price ? priceText : "Contact Us"}
              </span>
              <span>{price ? "/project/month" : "Contract"}</span>
            </div>

            <div className="flex-1">
              <span className="font-bold">{plan.info}</span>
              <ul className="ul-checklist mt-5">
                {plan.benefits.map((benefit) => {
                  return <li key={benefit}>{benefit}</li>;
                })}
              </ul>
            </div>

            <div>
              {plan.button?.to ? (
                <RemixLinkButton
                  to={plan.button.to}
                  size="lg"
                  className="w-full"
                >
                  {plan.button.text}
                </RemixLinkButton>
              ) : (
                <Button disabled size="lg" className="w-full">
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
