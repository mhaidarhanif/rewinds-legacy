import { Button, ButtonGroup } from "~/components";
import { useState } from "~/hooks";

import type { Currencies, CurrencySymbol } from "~/types";

interface PricingTableProps {
  symbol: CurrencySymbol;
}

export const PricingContent = () => {
  const [symbol, setCurrency] = useState<CurrencySymbol>("USD");

  const currencies: Currencies = [
    { symbol: "USD", name: "$ US Dollars" },
    { symbol: "EUR", name: "€ Euros" },
    { symbol: "GBP", name: "£ British Pounds" },
  ];

  const changeCurrency = (currencySymbol: CurrencySymbol) => {
    setCurrency(currencySymbol);
  };

  return (
    <div className="stack-v h-[600px] items-center gap-10">
      <ButtonGroup attached color="primary">
        {currencies.map((item) => {
          return (
            <Button
              key={item.symbol}
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
    <div>
      <code>{symbol}</code>
    </div>
  );
};
