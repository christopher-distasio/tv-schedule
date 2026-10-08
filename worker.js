export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname === '/api') {
      if (request.method === 'GET') {
        const data = await env.TV_SCHEDULE.get('scheduleData');
        return new Response(data || 'null', {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      if (request.method === 'POST') {
        const body = await request.text();
        await env.TV_SCHEDULE.put('scheduleData', body);
        return new Response('ok');
      }
    }

    // All other requests: serve static assets
    return env.ASSETS.fetch(request);
  }
};
