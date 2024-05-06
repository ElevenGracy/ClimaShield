import React, { useState, useEffect , useRef} from "react";
import "../../styles/profile/Profile.css";
import { ethers } from "ethers";
import { derivativeInstance } from "../Contract";
import { useAccount } from "wagmi";
import { ClipLoader } from "react-spinners";
// import temp from "../../assets/temp.jpg";
import { DERIVATIVE_ADDRESS } from "../Contract";
// import Navbar from "../navbar/Navbar";


function ProfilePage() {
  const [allUserContracts, setAllUserContracts] = useState([]);
  const { address } = useAccount();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    // Enable Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Clean up when the component unmounts
    return () => {
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        const tooltip = window.bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltip) {
          tooltip.dispose();
        }
      });
    };
  });

  const allDerivativeData = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await derivativeInstance();
        const getDerivativeDetails = await con.getContractBoughtByUser(address);
        setAllUserContracts(getDerivativeDetails);
        console.log("Derivatives: ", allUserContracts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDerivativeContracts = async () => {
    if (isWalletConnected) {
      await allDerivativeData();
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    async function checkWalletConnection() {
      const { ethereum } = window;
      if (ethereum && ethereum.selectedAddress) {
        setIsWalletConnected(true);
        await fetchDerivativeContracts();
      } else {
        setIsWalletConnected(false);
      }
    }

    checkWalletConnection();
  }, []);

  useEffect(() => {
    fetchDerivativeContracts();
  }, [isWalletConnected]);

  const withdrawAmount = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await derivativeInstance();
        const getDerivativeDetails = await con.withdrawMoney();
      }
    } catch (error) {
      console.log(error);
    }
  };

  function hexToTimestamp(hex) {
    const unixTimestamp = parseInt(hex, 16);
    const date = new Date(unixTimestamp * 1000);
    const localDate = date.toLocaleString("en-US");
    return localDate;
  }

  const transferAmount = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionResponse = await signer.sendTransaction({
          to: "0x8ca6d6Ef50AD8fcC38358845C76d9606d5d67D07",
          value: ethers.utils.parseEther("1"),
        });
        await transactionResponse.wait();
        alert(`Transaction successful with hash: ${transactionResponse.hash}`);
      } else {
        throw new Error("Ethereum provider not found");
      }
    } catch (error) {
      alert(`Transaction failed with error: ${error.message}`);
    }
  };

  const [loadingText, setLoadingText] = useState("Coming Soon");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case "Coming Soon":
            return "Coming Soon.";
          case "Coming Soon.":
            return "Coming Soon..";
          case "Coming Soon..":
            return "Coming Soon...";
          case "Coming Soon...":
            return "Coming Soon ";
          default:
            return "Coming Soon";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  

  return (<>
    {/* <Navbar/> */}
    <div className="p-titleContainer">
      <h1 className="p-profile">Profile</h1>
    </div>
    <div className="main-profile-page">
      {/* Withdraw */}
      {/* <div className="d-flex py-4 col-11 mx-auto align-items-center"> */}
      <div className="p-container">
        
        
            {/* <div className="d-flex col-6 align-items-center">
              <div className="">
                {" "}
                <h2 className="text-light">Withdraw Amount:</h2>
              </div>
              <div className="px-3">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Withdraw Here
                </button>
                <span className="text-white"> (Coming Soon)</span>
              </div>
            </div> */}
        <div className="p-withdraw" >
          <div className="p-t-c">
            {" "}
            <h2 className="p-title">Withdraw Amount:</h2>
          </div>
          {/* <div className="p-btn-container"> */}
            <button
              type="button"
              className="p-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Withdraw Here
            </button>
          {/* </div> */}
            <span className="p-text"> {loadingText}</span>
            
        </div>


        <div className="p-withdraw p-stack" >
          <div className="p-t-c">
            {/* {" "} */}
            <h2 className="p-title">Stake Amount to Vault:</h2>
          </div>
          {/* <div className="p-btn-container"> */}
            <button
              type="button"
              className="p-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Stake Here
            </button>
            {/* </div> */}
            <span className="p-text"> {loadingText}</span>
            
            

            <div
              className="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content p-alert" >
                  <div className="modal-header p-title-al" style={{border:"1px solid #79ffe7"}}>
                    <h5 className="modal-title p-alert-title" id="exampleModalLabel" >
                      Alert Message
                    </h5>
                    <div data-bs-theme="dark" className="p-button-alert">

                    <button
                      type="button"
                      className="btn-close p-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      ></button>
                      </div>
                  </div>
                  <div
                    className="modal-body p-alert-body"
                    style={{ fontSize: "1.3rem", fontWeight: "300" , border:"1px solid #79ffe7"}}
                  >
                    Hang Tight! Work is in Progress!📈
                  </div>
                  
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        {/* <div className="d-flex col-6">
          <div className="d-flex">Total amount spent :</div>
          <div className="px-3">
            <input type="text" />
          </div>
        </div> */}
      </div>

      {/* Contracts bought */}
      <div>
        <div className="p-titleContainer p-titleCont">
          {" "}
          <h2 className="p-profile">Contracts Bought</h2>
        </div>

        <div className="row col-12 px-0 user-contracts-main mt-4 py-3 px-sm-3 justify-content-around">
          <div className="d-flex justify-content-center">
            {/* <ClipLoader color="#4250ff" /> */}
          </div>
          {!isWalletConnected ? (
            <div
              style={{
                color: "white",
                fontSize: "1.4rem",
                fontWeight: "600",
                height: "15vh",
              }}
            >
              Connect your Wallet or change the chain to see the bought
              Contracts
            </div>
          ) : isPageLoading ? (
            <div>
              <ClipLoader color="#5cd200" />
            </div>
          ) : allUserContracts.length > 0 ? (
            allUserContracts.map((item, key) => (
              <div
                className="temp-derivative-main col-md-5 col-sm-7 col-11 mx-1 mb-5"
                index={key}
              >
                <div className="derivative-img-div">
                  <img
                    src={`https://ipfs.io/ipfs/${item.image}`}
                    // src={temp}
                    className="derivative-img"
                    alt="image not found"
                  ></img>
                </div>
                <div className="derivative-details">
                  <div className="py-1">
                    <div className="derivative-title">
                      Contract Name &nbsp;&nbsp;{" "}
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="This field displays the type of the contract."
                        className="icon-link"
                      >
                        <i className="fas fa-info-circle head-info"></i>
                      </a>
                    </div>
                    <div className="d-details">{item.name}</div>
                  </div>
                  <div className="py-1">
                    <div className="derivative-title">
                      Contract description &nbsp;&nbsp;{" "}
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="A short summary that tells you the basic details and what the contract is all about."
                        className="icon-link"
                      >
                        <i className="fas fa-info-circle head-info"></i>
                      </a>
                    </div>
                    <div className="d-details">{item.description}</div>
                  </div>

                  <div className="py-1">
                  <div className="derivative-title">
                    Location &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The place where the HDD/CDD of the given contract are based on."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>{" "}
                  </div>
                    <div className="d-details">{item.location}</div>
                  </div>
                  <div className="py-1">
                  <div className="derivative-title">
                    Coverage Start Date &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The day when the contract's execution begins."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>
                  </div>
                  <div className="d-details">{hexToTimestamp(item.coverageStartDate._hex)}</div>
                </div>
                <div className="py-1">
                  <div className="derivative-title">
                    Coverage End Date &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The day when the contract is terminated."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>{" "}
                  </div>
                  <div className="d-details">{hexToTimestamp(item.coverageEndDate._hex)}</div>
                </div>

                  <div className="py-1">
                  <div className="derivative-title">
                    Strike Value &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="It is a threshold value above which it is expected that HDD/CDD will not exceed."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>
                  </div>
                  <div className="d-details">{parseInt(item.strikeValue._hex, 16)} HDD</div>
                </div>

                  <div className="py-1">
                  <div className="derivative-title">
                    Premium Amount &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The amount you pay at the beginning to buy the contract."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>
                  </div>
                  <div className="d-details">
                    {parseInt(item.premiumAmount._hex, 16) / 1000000} USDC
                  </div>
                </div>

                <div className="py-1">
                  <div className="derivative-title">
                    Payout Amount &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The amount you can get after contract reaches its expiration date and the contract is settled."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>
                  </div>
                  <div className="d-details">
                    {parseInt(item.payoutAmount._hex, 16) / 1000000} USDC
                  </div>
                </div>


                <div className="py-1">
                  <div className="derivative-title">
                    Maximum Buyers &nbsp;&nbsp;{" "}
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="The most people allowed to have this contract, so you know how many others can join in."
                      className="icon-link"
                    >
                      <i className="fas fa-info-circle head-info"></i>
                    </a>
                  </div>
                  <div className="d-details">{parseInt(item.maxBuyers._hex, 16)}</div>
                </div>
              </div>

              </div>
            ))
          ) : (
            <div
              style={{
                color: "white",
                fontSize: "1.4rem",
                fontWeight: "600",
                height: "40vh",
              }}
            >
              No Contracts Bought
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
