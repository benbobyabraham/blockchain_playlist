
import logo from './logo.png';
import './App.css';
import { useEffect,useState } from 'react';
import { ethers } from 'ethers';
 
function App() {
  const [account,setAccount] = useState('')

  const fetchAccount = async () => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
    const account =  ethers.utils.getAddress(accounts[0])
    setAccount(account)
    console.log(account)
  }

  useEffect(() => {
    new ethers.providers.Web3Provider(window.ethereum)
    fetchAccount()

  })

  const content = () => {
    return (
      <div className="content mx-auto mt-5">
      <a
        href="http://www.dappuniversity.com/bootcamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} className="App-logo" alt="logo"/>
      </a>
      <h1 className= "mt-5">Welcome to my awesome Dapp</h1>
      <p>
        Edit <code>src/frontend/components/App.js</code> and save to reload.
      </p>
     
      <p>You are connected with following account: {account}</p>
    </div>
    )
  }

  const connect = () => {
    return(
      <div className="content mx-auto mt-5">
      <a
        href="http://www.dappuniversity.com/bootcamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} className="App-logo" alt="logo"/>
      </a>
      <h1 className= "mt-5">Please connect your wallet</h1>
      <p>
       Please connect to your wallet to see supplies, borrowings and open positions
      </p>
      <button type="button" className="btn btn-primary" onClick={fetchAccount}>Connect</button>
    </div>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dapp University
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            {account? content() : connect()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

