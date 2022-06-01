import { Badge } from "~/components";

export const ExampleBadges = () => {
  return (
    <div className="space-y-4">
      <h2>Badges</h2>

      <h3>Badge Variant</h3>
      <div className="flex w-full flex-wrap space-x-2">
        <Badge>Normal</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge color="primary">Normal Primary</Badge>
        <Badge variant="solid" color="primary">
          Solid Primary
        </Badge>
      </div>

      <h3>Badge Size</h3>
      <div className="flex w-full flex-wrap space-x-2">
        <Badge size="sm" variant="solid" color="primary">
          Small
        </Badge>
        <Badge size="md" variant="solid" color="primary">
          Medium
        </Badge>
      </div>
    </div>
  );
};
