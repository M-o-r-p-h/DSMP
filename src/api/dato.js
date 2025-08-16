import { SiteClient } from 'datocms-client';

const client = new SiteClient('de8fdc240d7f3e1b94936a2bb43fb6');

export async function fetchNodes() {
    // Replace 'node' with your actual model API key if different
    return await client.items.all({ filter: { type: 'node' } });
}
