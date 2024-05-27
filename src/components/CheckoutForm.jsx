import React from "react";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardBody,
  Input,
  h1,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Dialog,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function CheckoutForm() {
  const [open, setOpen] = React.useState(false);
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  const formatCardNumber = (number) => {
    // Format card number logic here
    return number;
  };

  const formatExpires = (expires) => {
    // Format expires date logic here
    return expires;
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <h1 onClick={handleOpen}>Ask Question</h1>
      <Dialog open={open} handler={handleOpen} size="sm">
        <Card className="w-full max-w-[24rem]">
          
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0">
                <Tab value="card" onClick={() => setType("card")}>
                  Add Question
                </Tab>
                <Tab value="paypal" onClick={() => setType("paypal")}>
                  Create Post
                </Tab>
              </TabsHeader>
              <div className="bg-blue-300 m-5 p-2">Tips on getting good answers quickly
                <ul>
                  <li>Make sure your question has not been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammar and spelling</li>
                </ul>
              </div>
              
                <TabPanel value="paypal" className="p-0">
                  <form className="mt-12 flex flex-col gap-4">
                    <div>
                      <h1 variant="paragraph" color="blue-gray" className="mb-4 font-medium">
                        Personal Details
                      </h1>
                      <h1 variant="small" color="blue-gray" className="mb-2 font-medium">
                        Your Email
                      </h1>
                      <Input
                        type="email"
                        placeholder="name@mail.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>

                    <div className="my-6">
                      <h1 variant="paragraph" color="blue-gray" className="mb-4 font-medium">
                        Billing Address
                      </h1>
                      <h1 variant="small" color="blue-gray" className="mb-2 font-medium">
                        Country
                      </h1>
                      <Select
                        placeholder="USA"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-48" }}
                      >
                        {countries.map(({ name, flags }) => (
                          <Option key={name} value={name}>
                            <div className="flex items-center gap-x-2">
                              <img
                                src={flags.svg}
                                alt={name}
                                className="h-4 w-4 rounded-full object-cover"
                              />
                              {name}
                            </div>
                          </Option>
                        ))}
                      </Select>
                      <h1 variant="small" color="blue-gray" className="mt-4 -mb-2 font-medium">
                        Postal Code
                      </h1>
                      <Input
                        placeholder="0000"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{ className: "mt-4" }}
                      />
                    </div>
                    <h1 size="lg">Pay with PayPal</h1>
                    <h1
                      variant="small"
                      color="gray"
                      className="flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are secure and
                      encrypted
                    </h1>
                  </form>
                </TabPanel>
              
            </Tabs>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}