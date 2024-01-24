interface Announcement {
  title: string;
  date: string;
  text: string[];
  link?: string;
  linkText?: string;
}

export const announcements: Announcement[] = [
  {
    title: "Nagradna igra",
    date: "14.12.2023",
    text: [
      "Tokrat smo se pri Medičini odločili, da vas obdarujemo z nečim sladkim!\
       Sodelujte v naši nagradni igri in osvojite enega izmed treh okusnih\
        kozarcev našega vrhunskega medu.",

      "Kako sodelovati:",
      "1. Sledite našemu profilu.",
      "2.Všečkajte to objavo.",
      "3. Delite to objavo",
    ],
    link: "/",
    linkText: "Za sodelovanje obiščite naš Instagram",
  },
  {
    title: "Novo v ponudbi!",
    date: "12.10.2023",
    text: [
      "Sveče iz čebeljega voska",
      "Z veseljem vam sporočamo,da smo danes stopili na novo potovanje svetlobe\
       in topline z našo svežo kolekcijo sveč iz čebeljega voska! Naše sveče\
        so izdelane z ljubeznijo, spoštovanjem do okolja in strastjo do \
        ustvarjanja prijetnih trenutkov.",
      "Obiščite našo spletno stran ali nas kontaktirajte za več informacij.\
      Hvala, ker ste del naše sveče skupnosti! ",
    ],
  },
];
