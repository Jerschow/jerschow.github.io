import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = path.join(root, "dist", "client");

test("renders the academic homepage with site-specific metadata", async () => {
  const html = await readFile(path.join(output, "index.html"), "utf8");

  assert.match(html, /Alexander \(Sasha\) Jerschow/);
  assert.match(html, /Alexander Jerschow \| Mathematics/);
  assert.match(html, /Interested in RMT methods in neural networks/i);
  assert.doesNotMatch(html, /My Framer Site|Made with Framer|framerusercontent/);
});

test("pre-renders every retained public route", async () => {
  const routes = [
    "studies-en",
    "wiki-en",
    "teaching-en",
    "bachelor-thesis-en",
    "CV-en",
    "old-home",
    "home-de",
    "home-ru",
    "home-ja",
    "bachelor-thesis-de",
    "bachelor-thesis-ru",
    "CV-de",
    "CV-ru",
    "CV-ja",
  ];

  await Promise.all(
    routes.map((route) => access(path.join(output, route, "index.html"))),
  );
});

test("bundles first-party image and document assets", async () => {
  const assets = [
    "images/alexander-mountain.png",
    "documents/another-proof-free-convolution.pdf",
    "documents/r-transform-reference.pdf",
    "documents/research-report-1-ja.pdf",
    "documents/complex-analysis-solutions-ja.pdf",
    "documents/cv-en.pdf",
  ];

  await Promise.all(assets.map((asset) => access(path.join(output, asset))));
});
