import { Footer } from "~/components";

export const ExampleFooters = () => {
  return (
    <div className="space-y-8 px-4">
      <h2>Footer Common</h2>
      <div className="example-box">
        <Footer variant="common" />
      </div>

      <h2>Footer Complex</h2>
      <div className="example-box">
        <Footer variant="complex" />
      </div>
    </div>
  );
};
