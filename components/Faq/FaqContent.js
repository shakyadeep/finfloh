import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = (props) => {
  return (
    <>
      <section className="faq-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-team content_box">
                <div className="tag">Frequently asked questions</div>
                <h3 className="sub_text pb-3">
                  What would you like <br /> to know about FinFloh?
                </h3>

                <p>
                  <a className="link_btn" onClick={props.openModal}>
                    Get Started <img src="/images/whiteuparrow.svg" />{" "}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What does FinFloh do?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        FinFloh is an Invoice-to-Cash platform that enables
                        sellers Finance Teams to get their postpaid receivables
                        from customers (buyers) on time and have better control
                        over their buyers through automated workflows,
                        data-driven insights and AI solve for accounts
                        receivables, credit risk and its gap with treasury.
                      </p>
                      <p>
                        Collaborative communication is at the center of
                        FinFloh's technology, bringing seller internal teams
                        (Finance, sales, KAM and Customer Support)and buyers to
                        help resolve issues and disputes efficiently.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can FinFloh integrate with Netsuite?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, FinFloh is ERP agnostic and can integrate with any
                        ERP/accounting system, including Netsuite, SAP,
                        Microsoft Dynamics 365, Oracle and more.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can FinFloh help me find the gaps in my current A/R
                        process?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can reach out to us by email at hello@finfloh.com or
                        call us directly at +91-7680953111.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the pricing for FinFloh?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We have a simple pricing model with an annual
                        subscription fee for our basic product and a
                        pay-as-you-go model for additional features and
                        customizations We can discuss your requirements during a
                        call.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can FinFloh help me reduce payment delays?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        By using FinFloh's platform, seller teams and buyers can
                        communicate and collaborate to ensure receivables are
                        received on time without delays due to disputes, errors
                        or confusions. In addition, you can take advantage of
                        our prioritized collection worklist, multi-channel
                        payment reminders, predefined dunning templates and
                        real-time risk alerts to stay on top of unpaid invoices,
                        reduce payment delays, and decrease DSO.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long does it take for me to go live with FinFloh?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>It usualy takes one week for us to take you live</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
