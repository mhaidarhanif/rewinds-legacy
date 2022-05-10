/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Anchor,
  Button,
  ExternalLinks,
  H4,
  Input,
  Logo,
  RemixLink,
} from '~/components';
import { configMeta } from '~/configs';

import type { FunctionComponent } from 'react';

const date = new Date();
const year = date.getFullYear();

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer flex justify-center border-t border-slate-200 dark:border-slate-200/5">
      <div className="flex flex-col items-center gap-2 py-8">
        <ExternalLinks />
        <p className="container-active space-x-1">
          <span>&copy;</span>
          <span>{year}</span>
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            {configMeta.name}
          </Anchor>
          <span>by</span>
          <Anchor href={configMeta.author.url}>{configMeta.author.name}</Anchor>
        </p>
      </div>
    </footer>
  );
};

export const FooterComplex: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer bg-neutral-200 dark:bg-neutral-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="space-y-4 text-neutral-900 dark:text-neutral-100">
            <RemixLink to="/">
              <Logo />
            </RemixLink>
            <div>
              <ExternalLinks />
            </div>
          </div>

          <div className="container-active mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold">Get some updates</h2>

                <p className="mt-6">{configMeta.description}</p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="gap-2 sm:flex sm:items-center">
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    size="lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    variant="solid"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>

            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <H4 className="font-bold">Services</H4>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                <a className="inline-block" href="https://domain.com">
                  1on1 Coaching
                </a>
                <a className="inline-block" href="https://domain.com">
                  Company Review
                </a>
                <a className="inline-block" href="https://domain.com">
                  Accounts Review
                </a>
                <a className="inline-block" href="https://domain.com">
                  HR Consulting
                </a>
                <a className="inline-block" href="https://domain.com">
                  SEO Optimisation
                </a>
              </nav>
            </div>

            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <H4 className="font-bold">Company</H4>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                <a className="inline-block" href="https://domain.com">
                  About
                </a>
                <a className="inline-block" href="https://domain.com">
                  Meet the Team
                </a>
                <a className="inline-block" href="https://domain.com">
                  History
                </a>
                <a className="inline-block" href="https://domain.com">
                  Careers
                </a>
              </nav>
            </div>

            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <H4 className="font-bold">Helpful Links</H4>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                <a className="inline-block" href="https://domain.com">
                  Contact
                </a>
                <a className="inline-block" href="https://domain.com">
                  FAQs
                </a>
                <a className="inline-block" href="https://domain.com">
                  Live Chat
                </a>
              </nav>
            </div>

            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <H4 className="font-bold">Legal</H4>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                <a className="inline-block" href="https://domain.com">
                  Accessibility
                </a>
                <a className="inline-block" href="https://domain.com">
                  Returns Policy
                </a>
                <a className="inline-block" href="https://domain.com">
                  Refund Policy
                </a>
                <a className="inline-block" href="https://domain.com">
                  Hiring Statistics
                </a>
              </nav>
            </div>

            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <H4 className="font-bold">Downloads</H4>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                <a className="inline-block" href="https://domain.com">
                  Marketing Calendar
                </a>
                <a className="inline-block" href="https://domain.com">
                  SEO Infographics
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <p className="container-active space-x-1 text-center text-sm text-gray-400 lg:text-left">
              <span>&copy;</span>
              <span>{year}</span>
              <Anchor href="https://github.com/mhaidarhanif/rewinds">
                {configMeta.name}
              </Anchor>
              <span>by</span>
              <Anchor href={configMeta.author.url}>
                {configMeta.author.name}
              </Anchor>
            </p>

            <nav className="container-active flex justify-center space-x-4 text-sm text-gray-400 lg:justify-end">
              <RemixLink to="/terms">Terms &amp; Conditions</RemixLink>
              <RemixLink to="/terms">Privacy Policy</RemixLink>
              <RemixLink to="/terms">Cookies</RemixLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
