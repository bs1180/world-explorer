# World Explorer

See live: https://react-world-explorer.vercel.app
## What choices did you make and why?
- I used [Next.js](https://nextjs.org/) as a framework, because I'm familar with it and it provides a sensible starting point.
- The main autocomplete component is built on [Reach UI](https://reach.tech/combobox), and is based closely on the Clientside Search example. A good quality autocomplete has several complex behaviours (such as keyboard support and being fully accessible), and this library provides an unstyled, well tested component to use.
- [React Query](https://github.com/tannerlinsley/react-query) and [GraphQL request](https://github.com/prisma-labs/graphql-request) are used for the HTTP requests, because I like the hook based approach.
- [Tailwind](https://tailwindcss.com/) takes care of the styling, which I love because it has no runtime overhead (unlike CSS-in-JS solutions) and avoids creating extravenous intermediate components (eg. "Container" or "Stack" just to hold styles).
- [Vercel](https://vercel.com) is used for hosting for convenience.
- I use [Ramda](https://ramdajs.com/) for the filtering of search results - although it may be slightly unfamilar at first, I'm a firm believer than composing simple functors together is the best way to manipulate data.

## What challenges did you face?
I initially thought I'd impress by writing an autocomplete from scratch, then realised just how many edges cases there are!
Ramda has terrible support for Typescript unfortunately, due to TS having poor support for generics.

I'd forgotten how awkward setting up Jest with Typescript was :scream:

## What tradeoffs did you choose?
I fetch all the countries up front and perform the filtering on the client. This is due to limitations of the API but is acceptable given the small result set. Alternatively this data could be hardcoded (countries rarely come and go!) or, if more complex searching is required, could take place on the server.

## What do you like and not like about your solution?
It's quite boring asthetically - I'm not the best designer!

I think the architecture is sensible - the two main components (`Search` and `CountryInfo`) are independent of each other and independent of the Next framework, so could be reused elsewhere with minimal work.

The URL is used as the source of truth for the selected country (rather than, say, internal component state) - this is useful for sharing results. 

There are unit tests for the most important behaviours.
## What areas would you work on next?
The searching is quite simple, just case-insensitive filtering of the country names. This could be improved by better ordering of suggestions (so results that match the start of the country name comes first) or even handling misspellings etc.

I skipped integration testing with the API, and tests for the hooks since they're mainly wrappers for React Query. However there is some untested behaviour, due to time constraints.

---

Illustration is from https://illlustrations.co/