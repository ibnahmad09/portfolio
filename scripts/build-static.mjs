import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const buildDir = join(publicDir, 'build');
const distDir = join(root, 'dist');

const SITE_TITLE = 'Website Developer Team - WDT';
const PAGE_COMPONENT = 'welcome';
const COPY_TO_ROOT = [
    'favicon.ico',
    'favicon.png',
    'favicon.svg',
    'apple-touch-icon.png',
    'robots.txt',
];

const manifest = JSON.parse(
    await readFile(join(buildDir, 'manifest.json'), 'utf8'),
);
const fontsManifest = JSON.parse(
    await readFile(join(buildDir, 'fonts-manifest.json'), 'utf8'),
);

const entryFile = (source) => {
    const entry = manifest[source];
    if (!entry) {
        throw new Error(`Missing manifest entry for "${source}"`);
    }
    return `/build/${entry.file}`;
};

const appCss = entryFile('resources/css/app.css');
const appJs = entryFile('resources/js/app.tsx');
const fontsCss = `/build/${fontsManifest.style.file}`;
const preloads = fontsManifest.preloads ?? [];

const escapeHtml = (value) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const page = {
    component: PAGE_COMPONENT,
    props: {},
    url: '/',
    version: null,
};

const pageJson = JSON.stringify(page).replace(/</g, '\\u003c');

const preloadTags = preloads
    .map(
        (preload) =>
            `    <link rel="preload" as="font" type="${preload.type}" href="/build/${preload.file}" crossorigin="anonymous">`,
    )
    .join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="/favicon.png?v=3">
    <link rel="apple-touch-icon" href="/favicon.png?v=3">

${preloadTags}
    <link rel="stylesheet" href="${fontsCss}">
    <link rel="stylesheet" href="${appCss}">

    <title>${escapeHtml(SITE_TITLE)}</title>
</head>
<body class="font-sans antialiased">
    <script data-page="app" type="application/json">${pageJson}</script>
    <div id="app"></div>
    <script type="module" src="${appJs}"></script>
</body>
</html>
`;

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

const skipJunk = (source) => !source.endsWith('.DS_Store');

await cp(buildDir, join(distDir, 'build'), {
    recursive: true,
    filter: skipJunk,
});
await cp(join(publicDir, 'images'), join(distDir, 'images'), {
    recursive: true,
    filter: skipJunk,
});

for (const file of COPY_TO_ROOT) {
    await cp(join(publicDir, file), join(distDir, file));
}

await writeFile(join(distDir, 'index.html'), html, 'utf8');

console.log('Static site built:');
console.log(`  index.html  -> ${appJs}, ${appCss}, ${fontsCss}`);
console.log(`  assets      -> dist/build, dist/images, ${COPY_TO_ROOT.join(', ')}`);
