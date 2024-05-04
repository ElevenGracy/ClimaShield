// import icon1 from '../../assets/icon 1.png'
import award from '../../assets/CardIcon/award.png'
import WeatherPlatformImage from '../../assets/homeAbout/stockChart.jpg';

import { mainnet } from 'wagmi';

import icon1 from '../../assets/cards/No Kyc.svg'
import icon2 from '../../assets/cards/Cashback.svg'
import icon3 from '../../assets/cards/Free bets.svg'
import icon4 from '../../assets/cards/Giveaways.svg'


import about1 from '../../assets/homeAbout/about1.webp'
import about2 from '../../assets/homeAbout/about2.webp'
import about3 from '../../assets/homeAbout/about3.webp'
import about4 from '../../assets/homeAbout/about4.webp'


export const works=[
    {
        icon:icon1,
        title:"No KYC",
        description:"Start by connecting your Web3 wallet securely",
    },
    {
        icon:icon2,
        title:"Buy Contract",
        description:"Purchase a Weather Derivative Contract based on your research and strategy",
    },
    {
        icon:icon3,
        title:"Wait for Result",
        description:"Hold the contract until its expiry date, monitoring weather conditions",
    },
    {
        icon:icon4,
        title:"Get Reward",
        description:"Receive rewards directly in your wallet if the outcome is favorable",
    },
    
]


export const cards=[
    {
        img: about1,
        description:"ClimaShield offers a state-of-the-art weather derivatives trading platform, empowering users to hedge effectively against weather-related financial risks, minimizing exposure to unpredictable elements.",
    },
    {
        img: about2,
        description:"Our platform facilitates the creation and listing of hedging contracts, simplifying the purchasing process for users who pay the specified premium. Funds from buyers are securely stored, mitigating risk and ensuring peace of mind.",
    },
    {
        img: about3,
        description:"Through advanced technology, ClimaShield continuously monitors relevant weather data to assess contract conditions, enabling precise risk management tailored to each user's needs.",
    },
    {
        img: about4,
        description:"Upon meeting predetermined conditions, ClimaShield automatically calculates and distributes payouts to buyers, providing a transparent and secure method to hedge against the unpredictability of weather, safeguarding your investments.",
    },
]

export const slides=[
    {
        title:"Contract Creation :",
        description:  "The platform owner creates weather derivative contracts, specifying contract terms, premium amounts, conditions and % Returns after completion of the contract (e.g9 based on weather data like temperature or rainfall)."
    },
    {
        title:"Contract Listing :",
        description:  "Newly created contracts are listed on a platform for potential buyers to browse and purchase."
    },
    {
        title:"Contract Purchase :",
        description:  "Buyers can choose and purchase contracts listed by the platform Each buyer pays the specified premium amount."
    },
    {
        title:"Payout Calculation :",
        description:  "When the conditions are met, the platform calculates the payout for each buyer based on the contract terms"
    },
    {
        title:"Data Monitoring :",
        description:  "Our Platform continuously mon itors relevant weather data or external data feeds to determine if the contract conditions have been rnet."
    },
    {
        title:"Vault Management : ",
        description:  "The total Funds collected from all buyers for a specific contract are stored in a secure vault."
    },
    {
        title:"Payout from Vault :",
        description:  "Payouts are automatically distributed to the wallets of the buyers from the vault. The smart con tract ensures a fair and secure distribution of funds."
    },
    {
        title:"Contract Completion :",
        description:  "Once the conditions are met and payouts are made, the contract is considered complete and it may be closed or expired"
    },
    {
        title:"Platform Fees :",
        description:  "Platform charges Will be collected from the users. when they pay the premium."
    },
    
]


