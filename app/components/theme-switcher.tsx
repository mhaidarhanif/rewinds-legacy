import { Popover, RadioGroup, Transition } from '@headlessui/react';
import { AdjustmentsIcon } from '@heroicons/react/solid';
import { Divider, Switch, Select, IconButton, Icon } from '@vechaiui/react';
import * as React from 'react';

import { useTheme, ThemeContextType } from '~/components/theme-provider';
import { configAvailableThemes, configAvailableRadiuses } from '~/configs';
import { useToast } from '~/hooks';
import { clsx } from '~/utils';

export const ThemeSwitcher = () => {
  const {
    colorScheme,
    cursorPointer,
    radius,
    setRadius,
    setCursorPointer,
    setColorScheme,
    setDensity,
    density,
  } = useTheme();
  const toast = useToast();

  const changeColorScheme = (value: string) => {
    setColorScheme(value);
    toast({ message: `Changed theme to ${value}` });
  };

  return (
    <Popover className="relative select-none">
      {({ open }) => {
        return (
          <>
            <Popover.Button
              as={IconButton}
              size="md"
              color="primary"
              variant="solid"
            >
              <Icon
                as={AdjustmentsIcon}
                label="Preferences"
                className="h-4 w-4"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute left-0 z-50 mt-2 w-64 origin-top-left rounded-md border border-neutral-300 bg-white py-2 px-2 text-neutral-900 shadow-sm outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
                <div className="flow-root">
                  <span className="text-md flex items-center font-medium">
                    Theme Appearance
                  </span>
                </div>

                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />

                <section role="group">
                  <div className="flex w-full flex-shrink-0 cursor-base flex-col space-y-2 text-left text-sm focus:outline-none">
                    <span className="text-smm">
                      Color Scheme: {colorScheme}
                    </span>
                    <RadioGroup
                      value={colorScheme}
                      onChange={changeColorScheme}
                    >
                      <RadioGroup.Label className="sr-only">
                        Color
                      </RadioGroup.Label>
                      <div className="flex max-w-[180px] flex-wrap">
                        {configAvailableThemes.map((theme: any) => {
                          return (
                            <RadioGroup.Option
                              key={theme.id}
                              value={theme.id}
                              style={{ backgroundColor: theme.backgroundColor }}
                              className={({ checked }) => {
                                return clsx(
                                  'mr-2 mb-2 flex h-5 w-5 items-center justify-center rounded-full border-2 p-0',
                                  `${
                                    checked
                                      ? 'border-primary-500'
                                      : 'border-transparent'
                                  }`
                                );
                              }}
                            >
                              <span
                                style={{ backgroundColor: theme.primaryColor }}
                                className="-m-1 flex h-2.5 w-2.5 items-center justify-center rounded-full"
                              />
                            </RadioGroup.Option>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>
                </section>

                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />

                <section role="group">
                  <div className="flex w-full flex-shrink-0 cursor-base flex-col space-y-2 rounded-base text-left text-sm focus:outline-none">
                    <span className="text-smm">Border Radius: {radius}</span>
                    <RadioGroup value={radius} onChange={setRadius}>
                      <RadioGroup.Label className="sr-only">
                        Radius
                      </RadioGroup.Label>
                      <div className="inline-flex space-x-0 rounded-base bg-neutral-200 p-0.5 dark:bg-neutral-700">
                        {configAvailableRadiuses.map((item) => {
                          return (
                            <RadioGroup.Option
                              key={item.name}
                              value={item.value}
                              className={({ checked }) => {
                                return clsx(
                                  'relative inline-flex min-w-[35px] select-none appearance-none items-center justify-center whitespace-nowrap rounded-base px-0.5 py-0.5 align-middle text-xs font-semibold',
                                  `${
                                    checked
                                      ? 'bg-white text-neutral-900 shadow dark:bg-neutral-800 dark:text-white'
                                      : 'text-neutral-600 dark:text-neutral-400'
                                  }
                          `
                                );
                              }}
                            >
                              {item.name}
                            </RadioGroup.Option>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>
                </section>

                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />

                <section role="group">
                  <div className="flex h-8 w-full flex-shrink-0 cursor-base items-center justify-between space-x-6 rounded text-left text-sm focus:outline-none">
                    <span className="text-smm">Density</span>
                    <Select
                      value={density}
                      size="xs"
                      onChange={(e) => {
                        setDensity(
                          e.target.value as ThemeContextType['density']
                        );
                      }}
                    >
                      <option value="compact">Compact</option>
                      <option value="comfortable">Comfortable</option>
                    </Select>
                  </div>
                </section>

                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />

                <section role="group">
                  <div className="flex h-8 w-full flex-shrink-0 cursor-base items-center justify-between rounded text-left text-sm focus:outline-none">
                    <span className="text-smm">Pointer Cursors</span>
                    <Switch
                      size="md"
                      checked={cursorPointer}
                      onChange={() => {
                        return setCursorPointer(!cursorPointer);
                      }}
                    />
                  </div>
                </section>
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};
