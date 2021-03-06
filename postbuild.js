import fs from 'fs'
import Config from './src/Config.js'
import { join } from 'path'

// Open index.html
const index_html = fs.readFileSync(
    join("build", "index.html"),
    "utf8"
)

const year = Config.year

// Set year in index.html (twice to make sure it replaces all of {year}s) and write it
let modified_index_html = index_html.replace("{year}", year)
modified_index_html = modified_index_html.replace("{year}", year)
fs.writeFileSync(
    join("build", "index.html"), 
    modified_index_html
)

try {
    // Delete asset-manifest.json (this is a production build, we don't need it)
    fs.unlinkSync(join("build", "asset-manifest.json"))
}
catch(e){
    // ignore
}
