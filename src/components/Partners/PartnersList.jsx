import { partners } from "@/data/partnersData";
import PartnerItem from "./ui/PartnerItem";
import { Accordion } from "../ui/accordion";
import { SidebarTrigger } from "../ui/sidebar";

const PartnersList = () => {
  return (
    <section className="~mt-[5.5rem]/24">
      <h2 className="text-center font-heading font-bold ~text-2xl/[2.625rem] ~mb-4/8">
        Our Partners
      </h2>

      <Accordion
        type="single"
        collapsible
        className="divide-y divide-light-grey border-y border-light-grey"
      >
        {partners.map((partner) => {
          let children = null;
          let children2 = null
          let children3 = null
          if (partner.name === "Greenpoint Psychotherapy") {
            children = (
              <>
                {/* link for green point referral */}
                <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg ~mt-4/8">
                  Refer a patient
                </h4>
                <a className="underline" href="https://docs.google.com/forms/d/13Q6OZGpfuEHaOPJY8lRFaUP76cBCe4nORppurFeoDzU/edit">
                  To Greenpoint Psychotherapy
                </a>
              </>
            );
          }

          if(partner.name === "NOCD") {
            children2 = (
              <>
                {/* Treatment category if its there */}
                <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg">Treatment categories</h4>
                <p className="~mb-4/8">{partner.Treatment_categories}</p>
              </>
            )

            children3 = (
              <>
                {/* link for green point referral */}
                <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg ~mt-4/8">
                  Refer a patient
                </h4>
                <a className="underline" href="https://docs.google.com/forms/d/13Q6OZGpfuEHaOPJY8lRFaUP76cBCe4nORppurFeoDzU/edit">
                  To Greenpoint Psychotherapy
                </a>
              </>
            )
          }
          

          return (
            <PartnerItem
              key={partner.id}
              partner={partner}
              children={children}
              children2={children2}
            />
          );
        })}
      </Accordion>
    </section>
  );
};
export default PartnersList;
