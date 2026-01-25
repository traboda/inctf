import fs from "fs";
import path from "path";
import YAML from "yaml";

/**
 * Load and parse a YAML file at build time.
 * This function runs only on the server during getStaticProps/getStaticPaths.
 * 
 * @param relativePath - Path relative to project root (e.g., 'src/data/writeups/1030.yaml')
 * @returns Parsed YAML content as a typed object
 * 
 * @example
 * export async function getStaticProps() {
 *   const writeup = loadYaml<Writeup>('src/data/writeups/1030.yaml');
 *   return { props: { writeup } };
 * }
 */
export function loadYaml<T>(relativePath: string): T {
    const filePath = path.join(process.cwd(), relativePath);
    const file = fs.readFileSync(filePath, "utf8");
    return YAML.parse(file);
}
