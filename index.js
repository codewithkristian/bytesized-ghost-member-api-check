addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  const back = url.searchParams.get("back")
  url.searchParams.delete("back")
  url.pathname = "/members/api/member"

  const req = new Request(url.toString(), request)
  const memberResp = await fetch(req)

  if (memberResp.status === 200) {
    const { uuid } = await memberResp.json()
    const newUrl = new URL(back)
    newUrl.searchParams.set("uuid", uuid)
    return Response.redirect(newUrl)
  } else {
    url.pathname = "/resources"
    return Response.redirect(url.toString())
  }
}
