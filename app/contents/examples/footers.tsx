import { Footer, H2 } from "~/components";

export const ExampleFooters = () => {
  return (
    <div className="space-y-8">
      <H2>Footer Common</H2>
      <div className="example-box">
        <Footer variant="common" />
      </div>

      <H2>Footer Complex</H2>
      <div className="example-box">
        <Footer variant="complex" />
      </div>
    </div>
  );
};
