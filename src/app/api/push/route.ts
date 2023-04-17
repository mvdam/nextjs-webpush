export async function POST(request: Request) {
  const responseJson = JSON.stringify({
    url: request.url,
  });
  return new Response(responseJson);
}
