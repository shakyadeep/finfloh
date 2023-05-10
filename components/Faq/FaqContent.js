import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
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
                    <a href="#" className="link_btn">
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
                          FinFloh is a global accounts receivables automation
                          platform that enables B2B finance teams to improve
                          their collections process by collecting receivables
                          faster, reducing DSO, disputes, and bad debt, and
                          enhancing overall collections efficiency.
                          Collaborative communication is at the center of
                          FinFloh's technology, bringing together finance,
                          sales, and customer support teams to help resolve
                          issues and disputes efficiently, which ultimately
                          leads to increased cash flow.
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
                          Yes, FinFloh is ERP agnostic and can integrate with
                          any ERP/accounting system, including Netsuite, SAP,
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
                          Absolutely! Yes, we would be happy to schedule a call
                          with you to understand your current accounts
                          receivables process, identify areas of improvement,
                          and suggest appropriate solutions. You can reach out
                          to us by email at hello@finfloh.com or call us
                          directly at +91-0000000000.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the Pricing for FinFloh?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Our pricing usually comprises of two components,
                          including a one-time setup fee and an annual recurring
                          platform fee. We offer customized pricing tailored to
                          your specific business needs, and you can discuss your
                          requirements with us during a call.
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
                          By using FinFloh's collaborative collections platform,
                          you can integrate finance, sales, and customer support
                          teams to ensure that no information falls through the
                          cracks. In addition, you can take advantage of our
                          prioritized collection worklist, multi-channel payment
                          reminders, predefined dunning templates and real-time
                          risk alerts to stay on top of unpaid invoices, reduce
                          payment delays, and decrease DSO.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How long does it take to get started and implement
                          FinFloh for my organization?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          It completely depends on the complexity of scope.
                          Typically it takes us 2-6 weeks for the complete setup
                          and go-live.
                        </p>
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
  }
}

export default FaqContent;
