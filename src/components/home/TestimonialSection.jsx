import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Mihai",
    country: "România",
    date: "2024-08-05",
    rating: 10,
    title: "Excepţional",
    description:
      "Proprietatea este situată într-o zonă unde te poți bucura de liniște cu o priveliște deosebită. Aceasta este dotată cu toate facilitățile de care ai nevoie inclusiv cu o cameră cu jucării pentru cei mici. Camerele sunt mari cu paturi confortabile iar curățenia este făcută cu simț de răspundere. Un mare plus este acordat gazdei, foarte atentă la detalii și dornică să ajute cu cerințele pe care le poți avea. O proprietate de luat în considerare unde cu siguranță vei reveni cu drag.",
  },
  {
    name: "Cristina",
    country: "România",
    date: "2024-06-24",
    rating: 10,
    title: "Distracție nelimitată într-un spațiu super decorat și aranjat",
    description:
      "Ne-a plăcut tare mult locația, a fost ceva special, nu am mai stat la o cazare așa modernă și curată! A fost liniște, mult spațiu, iar design ul casei a fost wow din toate punctele de vedere! Ne-am distrat la maxim, sperăm ca am lăsat totul în ordine și vă mulțumim ca ne-ați primit! 🙏🏻🥰 O să revenim cu siguranță, cu altă ocazie de petrecut 🥳 Nu există ceva să nu ne fi plăcut",
  },
  {
    name: "Diana",
    country: "România",
    date: "2024-06-02",
    rating: 10,
    title: "Un weekend de vis la Kassa!",
    description:
      "Am petrecut un weekend minunat la Kassa alături de prieteni și ne-am simțit excelent! Pensiunea este situată într-un peisaj montan spectaculos, oferind o priveliște de neuitat asupra munților. Designul pensiunii este deosebit de frumos și exact ca în poze, cu un decor modern care creează o atmosferă caldă și primitoare. Camerele sunt confortabile și curate, iar atenția la detalii se vede în fiecare colț. Gazdele au fost extrem de ospitaliere și au făcut tot posibilul pentru a ne asigura că ne simțim ca acasă. În plus, am profitat din plin de facilitățile pensiunii: grătarul în aer liber si terasa unde ne-am bucurat de cafeaua de dimineață. Recomandăm cu căldură Kassa pentru oricine dorește să se bucure de o escapadă la munte, într-un loc liniștit și frumos. Cu siguranță vom reveni!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <span className="testimonial-country">
                  {testimonial.country}
                </span>
              </div>
              <span className="testimonial-date">{testimonial.date}</span>
            </div>
            <div className="testimonial-rating">
              Score: {testimonial.rating}/10
            </div>
            <h4 className="testimonial-title">{testimonial.title}</h4>
            <p className="testimonial-description">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
