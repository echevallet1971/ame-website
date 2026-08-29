import 'server-only';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const MANIFEST_DIR = path.join(process.cwd(), 'system-manifests', 'base');
const MANIFEST_FILENAME_REGEX = /^system-base-v(\d+)\.(\d+)\.(\d+)\.yml$/i;
const SYSTEM_VERSION_REGEX = /^system_version:\s*(v\d+\.\d+\.\d+)\s*$/im;

type VersionParts = {
  major: number;
  minor: number;
  patch: number;
  version: string;
  filename: string;
};

function compareVersionParts(a: VersionParts, b: VersionParts): number {
  if (a.major !== b.major) return b.major - a.major;
  if (a.minor !== b.minor) return b.minor - a.minor;
  return b.patch - a.patch;
}

function parseVersionFromFilename(filename: string): VersionParts | null {
  const match = filename.match(MANIFEST_FILENAME_REGEX);
  if (!match) return null;

  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]);

  return {
    major,
    minor,
    patch,
    version: `v${major}.${minor}.${patch}`,
    filename,
  };
}

export async function getWebsiteVersionLabel(): Promise<string> {
  try {
    const files = await readdir(MANIFEST_DIR);
    const manifestVersions = files
      .map(parseVersionFromFilename)
      .filter((entry): entry is VersionParts => entry !== null)
      .sort(compareVersionParts);

    if (manifestVersions.length === 0) {
      return 'version unknown';
    }

    const latestManifest = manifestVersions[0];
    const manifestPath = path.join(MANIFEST_DIR, latestManifest.filename);
    const manifestContent = await readFile(manifestPath, 'utf-8');
    const systemVersionMatch = manifestContent.match(SYSTEM_VERSION_REGEX);
    const systemVersion = systemVersionMatch?.[1] ?? latestManifest.version;

    return `version ${systemVersion}`;
  } catch {
    return 'version unknown';
  }
}
