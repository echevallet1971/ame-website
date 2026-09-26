import { NextResponse } from 'next/server';

/**
 * MCP Registry HTTP domain verification.
 * @see https://modelcontextprotocol.io/registry/authentication
 *
 * Preferred setup:
 * - Set MCP_REGISTRY_AUTH_PUBLIC_KEY to the base64 public key only.
 *
 * Backward-compatible setup:
 * - MCP_REGISTRY_AUTH_RECORD can still be provided as the full record.
 * - If MCP_REGISTRY_AUTH_RECORD contains only a key, it is normalized.
 */
export async function GET() {
  const publicKey = process.env.MCP_REGISTRY_AUTH_PUBLIC_KEY?.trim();
  const rawRecord = process.env.MCP_REGISTRY_AUTH_RECORD?.trim();

  const record =
    publicKey
      ? `v=MCPv1; k=ed25519; p=${publicKey}`
      : rawRecord
        ? rawRecord.includes(';')
          ? rawRecord
          : `v=MCPv1; k=ed25519; p=${rawRecord}`
        : '';

  if (!record) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(record, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
