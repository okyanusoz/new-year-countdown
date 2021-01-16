import fs from 'fs'
import Config from './src/Config.js'
import { join } from 'path'

// Open index.html
const index_html = fs.readFileSync(
    join("build", "index.html"),
    "utf8"
)

const year = Config.year

// Set year in index.html and write it
const modified_index_html = index_html.replace("{year}", year)
fs.writeFileSync(
    join("build", "index.html"), 
    modified_index_html
)

// Delete asset-manifest.json (this is a production build, we don't need it)
fs.unlinkSync("asset-manifest.json")