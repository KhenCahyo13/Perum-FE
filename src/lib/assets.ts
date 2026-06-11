export type Illustration =
    | 'empty'
    | 'error'
    | 'image'
    | 'page-not-found'
    | 'unauthorized';
export type Logo = 'only-logo';

export const getLogo = (name: Logo): string => {
    return `/assets/logos/${name}.png`;
};

export function getIllustration(name: Illustration): string {
    return `/assets/illustrations/${name}.svg`;
}
