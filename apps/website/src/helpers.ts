export type FormatDateOptions = {
  locality?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
};

const DEFAULT_FORMAT_OPTIONS = { month: 'long', year: 'numeric' } as const;
export function formatDate(date: Date, options?: FormatDateOptions) {
  return date.toLocaleDateString(
    options?.locality ?? 'en-us',
    options?.formatOptions ?? DEFAULT_FORMAT_OPTIONS,
  );
}

export function makePossessive(noun: string) {
  if (noun.endsWith('s')) {
    return noun + "'";
  }
  return noun + "'s";
}

export function makeId(...text: string[]) {
  return text
    .join('-')
    .replace(/[^0-9a-zA-Z]/g, '-')
    .toLowerCase();
}

export type TailwindColor =
  | `${TailwindColorName}-${TailwindColorValue}`
  | 'white';

type TailwindColorName =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'rose';

type TailwindColorValue =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type TailwindMarginType = 'm' | 'mb' | 'ml' | 'mr' | 'mt' | 'mx' | 'my';

export type TailwindSize =
  | `${TailwindNumber}`
  | 'px'
  | 'auto'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'screen'
  | 'min'
  | 'max'
  | 'fit';

export type TailwindNumber =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;
