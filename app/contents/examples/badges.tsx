import { Badge, H2, H3 } from '~/components';

export const ExampleBadges = () => {
  return (
    <div className="space-y-4">
      <H2>Badges</H2>

      <H3>Badge Variant</H3>
      <div className="flex w-full flex-wrap space-x-2">
        <Badge>Normal</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge color="primary">Normal Primary</Badge>
        <Badge variant="solid" color="primary">
          Solid Primary
        </Badge>
      </div>

      <H3>Badge Size</H3>
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
