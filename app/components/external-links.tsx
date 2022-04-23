import { Anchor, Icon } from '~/components';
import { configExternalLinks } from '~/configs';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ExternalLinksProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

export const ExternalLinks: FunctionComponent<ExternalLinksProps> = ({
  className,
}) => {
  return (
    <div className={classx('flex gap-3 text-2xl', className)}>
      {configExternalLinks.map((item) => {
        return (
          <Anchor
            key={item.name}
            href={item.url}
            className="transition-colors hover:text-primary-500"
          >
            <Icon name={item.name.toLowerCase()} />
          </Anchor>
        );
      })}
    </div>
  );
};
