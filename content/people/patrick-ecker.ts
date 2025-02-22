import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Patrick Ecker",
  about:
    "Patrick is a JavaScript Software Engineer and freelancer, mostly known for his contributions to the Flow type checker ecosystem and his recent work at Runtastic, where he spent most of his time working on the Mobile News Feed feature (built in React Native). Most of his Open Source time is dedicated to the ReasonML and OCaml platform to build robust, type-safe JS applications.",
  image: {
    url: "people/patrick.jpg",
  },
  social: {
    homepage: "",
    twitter: "ryyppy",
    github: "ryyppy",
    linkedin: "patrick-stapfer-5ba205a4",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [Keyword.REACT, Keyword.REASON],
  type: [ContactType.SPEAKER],
};

export default person;
