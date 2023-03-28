const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Create virtual DOM
const virtualPage = new JSDOM(html);
const document = virtualPage.window.document;

it('Mobile styles: image', () => {
  const images = document.querySelectorAll("img");

  for (const image of images) {
    // Width
    expect(image.className).toMatch(/w-24/);

    // Height
    expect(image.className).toMatch(/h-24/);

    // Top offset
    expect(image.className).toMatch(/-mt-16/);

    // Ring
    expect(image.className).toMatch(/ring-/);

    // Round
    expect(image.className).toMatch(/rounded-full/);

  }
});

it("Mobile styles: text", () => {
  const textBlocks = document.querySelectorAll(".text-block");

  expect(textBlocks).toHaveLength(3);

  for (const div of textBlocks) {
    expect(div.className).toMatch("text-center");

    const quote = div.querySelector(".quote-text");
    const name = div.querySelector('.name-text');
    const desc = div.querySelector('.desc-text');

    expect(quote.className).toMatch("text-sky-100");
    expect(name.className).toMatch("text-sky-500");
    expect(desc.className).toMatch("text-slate-700");
  }
})

it("Large screen styles: image", () => {
  const images = document.querySelectorAll("img");

  for (const image of images) {
    // Width
    expect(image.className).toMatch(/:w-full/);

    // Height
    expect(image.className).toMatch(/:h-48/);

    // Top offset
    expect(image.className).toMatch(/:-mt-0/);

    // Ring
    expect(image.className).toMatch(/:ring-0/);

    // Round
    expect(image.className).toMatch(/:rounded-t-/);
  }
})

it("Large screen styles: text", () => {
  const textBlocks = document.querySelectorAll(".text-block");

  for (const div of textBlocks) {
    expect(div.className).toMatch(":text-left");
  }
})