export async function onRequestGet({ env }) {
  const data = await env.TV_SCHEDULE.get('scheduleData');
  return new Response(data || 'null', {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPost({ request, env }) {
  const body = await request.text();
  await env.TV_SCHEDULE.put('scheduleData', body);
  return new Response('ok');
}
