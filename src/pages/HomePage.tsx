import { FC } from "react";
import { Container } from "../components/Container";
import { BenefitsItem, BenefitsList, H1, H2, P } from "./HomePage.styled";

export const HomePage: FC = () => {
  return (
    <main>
      <Container>
        <H1>About Rental car</H1>
        <H2>Comfort of movement!</H2>
        <P>
          Car rental is a popular service in both large and small cities,
          offering convenience and flexibility to individuals and businesses
          alike. Whether you need a car for the day or for an extended period,
          there are many reasons to consider renting. From family outings to
          business trips, a rental car gives you the freedom to explore, attend
          important events, or simply go the distance when your own car isn't
          available.
        </P>
        <P>
          Mono-rent has been providing reliable car rental services in Lviv for
          over 5 years, guaranteeing our customers quality service and
          round-the-clock technical support. Our large fleet boasts a wide
          selection of modern vehicles equipped with features and amenities that
          will satisfy even the most demanding customers.
        </P>
        <H2>
          Here are the benefits of choosing Rental car for your car rental
          needs:
        </H2>
        <BenefitsList>
          <BenefitsItem>
            <P>
              Wide selection of vehicles: We offer a wide selection of makes and
              models, giving you the option of choosing a different vehicle
              every day if you want. Enjoy driving different vehicles and find
              the perfect one for your preferences.
            </P>
          </BenefitsItem>
          <BenefitsItem>
            <P>
              Maintenance and repair: Entrust the maintenance of your car to us.
              Our professional team ensures that all vehicles are properly
              maintained, so you don't have to worry about any maintenance or
              repair tasks
            </P>
          </BenefitsItem>
          <BenefitsItem>
            <P>
              Comprehensive Accident Insurance: Your safety and peace of mind
              are our top priorities. Choosing our Full Coverage option provides
              complete protection in the event of a road traffic accident,
              minimizing your personal liability to zero. Drive with confidence
              knowing you are fully protected.
            </P>
          </BenefitsItem>
          <BenefitsItem>
            <P>
              Convenient delivery: save time and effort with our car rental
              service. Instead of coming to the office, we can bring the car to
              the addressough our website or by phone, and we'll take care of
              the rest. you specified within the city. Simply place your order
              remotely thr
            </P>
          </BenefitsItem>
          <BenefitsItem>
            <P>
              Extras: Personalize your rental experience by choosing from a
              range of extras, including child seats, booster seats, phone
              holders, chargers and Wi-Fi routers. We strive to meet your needs
              and ensure a comfortable trip.
            </P>
          </BenefitsItem>
          <BenefitsItem>
            <P>
              Comfort and flexibility: enjoy the convenience and flexibility of
              your own transport. Compared to public transport or a taxi, a
              rental car offers a more comfortable and personalized journey.
              Customize your route and departure/arrival times to suit your
              schedule without worrying about the disadvantages of public
              transport.
            </P>
          </BenefitsItem>
        </BenefitsList>
      </Container>
    </main>
  );
};
