const fs = require("fs").promises;

const fileList = [
  "continent.csv",
  "country_full.csv",
  "country.csv",
  "county_uk.csv",
  "industry_sic.csv",
  "locations.csv",
  "province_ca.csv",
  "state_au.csv",
  "state_us.csv",
]

it("Move images", async () => {
  const rootFolders = await fs.readdir("./");

  // images folder exists & pictures folder has been deleted
  expect(rootFolders).toEqual(expect.arrayContaining(["images"]));
  expect(rootFolders).toEqual(expect.not.arrayContaining(["pictures"]));

  const images = await fs.readdir("./images");
  // All images are in new images folder
  expect(images).toEqual(
    expect.arrayContaining(["blackberry.png", "ipod.png", "nokia.png"])
  );
});

it("Copy all data", async () => {
  const rootFolders = await fs.readdir("./");

  // Both data folders exist
  expect(rootFolders).toEqual(expect.arrayContaining(["data", "data_backup"]));


  // Files from original data folder
  const originData = await fs.readdir("./data");
  expect(originData).toEqual(
    expect.arrayContaining(fileList)
  );

  // Files in backup folder
  const targetData = await fs.readdir("./data_backup");

  // Backup folder contains all original data files
  expect(targetData).toEqual(expect.arrayContaining(fileList));
});

it("Move all items to final folder", async () => {
  const rootFolders = await fs.readdir("./");
  expect(rootFolders).toEqual(expect.arrayContaining(["final"]));

  const finalFileList = await fs.readdir("./final");
  expect(finalFileList).toEqual(
    expect.arrayContaining([
      "user_data.txt",
      "archiveToday.js",
      "cache.js",
      "jsonFormatter.js",
    ])
  );
});

it("Enter data in user_data.txt", async () => {
  const fileContents = await fs.readFile("./final/user_data.txt", "utf8");

  // List of line items in user_data.txt contents
  const lineItems = fileContents.split("\n");
  expect(lineItems[0]).toBe("La Capsule");
  expect(lineItems[1]).toMatch(/industry_kpis/i);
});

it("Remove all .js files from scripts folder", async () => {
  const scriptsFolder = await fs.readdir("./scripts");
  const customScriptsFolder = await fs.readdir("./scripts/custom");

  const hasJSFiles = scriptsFolder.some(filePath => /.js/.test(filePath)) || customScriptsFolder.some(filePath => /.js/.test(filePath))
  expect(hasJSFiles).toBeFalsy();
})
