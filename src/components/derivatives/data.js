export const AccordionData = [
  {
    que: "What is a weather derivative contract?",
    ans: "Weather derivatives are financial contracts that allow individuals or businesses to hedge against the risk of financial loss due to adverse weather conditions. The buyer pays a premium to the seller, who agrees to make a payout if certain weather conditions occur.",
  },
  {
    que: "What is HDD ?",
    ans: "HDD (Heating Degree Day) : A heating degree day (HDD) is a measurement designed to quantify the demand for energy needed to heat a building. It is the number of degrees that a day's average temperature is below 65° Fahrenheit (18° Celsius), which is the temperature below which buildings need to be heated. The price of weather derivatives traded in the winter is based on an index made up of monthly HDD values.ngs. It is the number of degrees that a day's average temperature is above 65° Fahrenheit (18° Celsius).",
  },
  {
    que: "What is CDD?",
    ans: " CDD (Cooling Degree Day): A cooling degree day (CDD) is a measurement designed to quantify the demand for energy needed to cool buildings. It is the number of degrees that a day's average temperature is above 65° Fahrenheit (18° Celsius).",
  },
  {
    que: "How are HDD calculated?",
    ans: "HDD (Heating Degree Day) :  Subtract the average of a day's high and low temperatures from 65. For example, if the day's average temperature is 50° F, its HDD is 15. If that day's average is above 65, the result is set to zero. If every day in a 30-day month had an average temperature of 50° F, the month's HDD value would be 450 (15 x 30)",
  },
  {
    que: "How are CDD calculated?",
    ans:
      "CDD (Cooling Degree Day) : " +
      "Subtract 65 from the average of a day's high and low temperatures. For example, if the day's average temperature is 75° F, its CDD is 10. If that day's average is below 65, the result is set to zero. Meanwhile, if every day in a 30-day month had an average temperature of 75° F, the month's CDD value would be 300 (10 x 30).",
  },
  {
    que: "What is the strike value?",
    ans: "A strike value is a reference level in a weather derivative contract that is used to determine the payout. A higher strike price will make the contract more expensive, but it will also protect you from more losses if the weather is unexpectedly warm. A lower strike price will make the contract cheaper, but you will also be exposed to more losses if the weather is unexpectedly cold.",
  },
  // {
  //     que:"7. How to get test USDC and USDC allowance?",
  //     ans:'You can get the test USDC from{" "}' +
  //     <a href="https://faucet.circle.com/" target="_blank">
  //       here
  //     </a> + "After getting USDCs, you can click on the buy button. Firstly, you need to approve the USDC then only you can buy the contract."
  // },
];
