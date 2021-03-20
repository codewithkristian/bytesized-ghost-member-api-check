Simple API route to handle member checking for Bytesized

I'd like to document this better but it's super hacky... so for anyone also trying to do simple JWT/member validation with their Ghost blog, here's what you should know:

1. You can get authed member info for your Ghost blog by making a GET request to `/members/api/member`
2. This codebase has a hard redirect to `/resources` when unauthorized
3. A corresponding worker on a different site should redirect to this endpoint with a `back` search param, and then handle the corresponding response back. In my example, I send `uuid` back from this endpoint, and store it as a simple cookie to indicate "logged in" status for my auth-required site.
