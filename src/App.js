import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v3.base-borderless.com/api/transactions');
        if (response.data && response.data.data) {
          setData(response.data.data.transactions || []);
        } else {
          setData([]);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
   <header className="d-flex justify-content-center align-items-center" style={{width: '100vw', overflow: 'hidden', background: 'rgba(255, 255, 255, 1)', minHeight: '100vh'}}>
  <div className="row" style={{width: '100%', height: '100%'}}>
    {/* Start: Sidebar */}
    <div className="col-12 col-md-2" style={{height: '100%', paddingTop: 50}}>
      {/* Start: Logo */}
      <div className="row" style={{marginBottom: 50}}>
        <div className="col d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center" style={{width: '50%'}}><img style={{width: '50%'}} src="assets/img/Group%205.png" /></div>
        </div>
      </div>{/* End: Logo */}
      {/* Start: Item */}
      <div className="row">
        <div className="col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
          {/* Start: Icon */}
          <div className="d-flex justify-content-center align-items-center" style={{width: 40, height: 40}}><img style={{width: '50%'}} src="assets/img/home.png" /></div>{/* End: Icon */}
          {/* Start: Title */}
          <h6 className="text-center" style={{marginBottom: 0, width: 63, color: 'rgba(142, 151, 164, 1)'}}>Home</h6>{/* End: Title */}
        </div>
      </div>{/* End: Item */}
      {/* Start: Item */}
      <div className="row">
        <div className="col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
          {/* Start: Icon */}
          <div className="d-flex justify-content-center align-items-center" style={{width: 30, height: 40}}><img style={{width: '50%'}} src="assets/img/bolt.png" width={20} height={16} /></div>{/* End: Icon */}
          {/* Start: Title */}
          <h6 className="text-center" style={{marginBottom: 0, width: 63, color: 'rgba(53, 121, 220, 1)'}}>Activity</h6>{/* End: Title */}
        </div>
      </div>{/* End: Item */}
      {/* Start: Item */}
      <div className="row">
        <div className="col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
          {/* Start: Icon */}
          <div className="d-flex justify-content-center align-items-center" style={{width: 40, height: 40}}><img style={{width: '50%'}} src="assets/img/.png" /></div>{/* End: Icon */}
          {/* Start: Title */}
          <h6 className="text-center" style={{marginBottom: 0, width: 63, color: 'rgba(142, 151, 164, 1)'}}>Discover</h6>{/* End: Title */}
        </div>
      </div>{/* End: Item */}
      {/* Start: Item */}
      <div className="row">
        <div className="col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
          {/* Start: Icon */}
          <div className="d-flex justify-content-center align-items-center" style={{width: 40, height: 40}}><img style={{width: '50%'}} src="assets/img/Cog.png" width={20} height={16} /></div>{/* End: Icon */}
          {/* Start: Title */}
          <h6 className="text-center" style={{marginBottom: 0, width: 63, color: 'rgba(142, 151, 164, 1)'}}>Settings</h6>{/* End: Title */}
        </div>
      </div>{/* End: Item */}
      {/* Start: Ad */}
      <div className="row">
        <div className="col d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" style={{margin: 10}}>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{width: 160, height: 172, background: 'linear-gradient(162.79deg, #3579DC 23.51%, #95D9FF 93.9%)', borderRadius: 10, paddingTop: 20, paddingRight: 7, paddingLeft: 7}}>
            <div className="row">
              <div className="col">
                <h6 style={{color: 'rgba(255, 255, 255, 1)', textAlign: 'center'}}>GET more with PRO</h6>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{color: 'rgba(255, 255, 255, 1)'}}>
                <p className="text-center">Upgrade to pro subscription for $9 / month</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End: Ad */}
    </div>{/* End: Sidebar */}
    {/* Start: Main */}
    <div className="col-12 col-md-7" style={{background: 'rgba(250, 250, 250, 1)', height: '100%', paddingTop: 50}}>
      <div className="row">
        <div className="col" style={{marginBottom: 25}}>
          <h4 className="text-center text-md-start">Trending Topics</h4>
        </div>
      </div>{/* Start: Topics */}
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" style={{background: '#ffffff', borderRadius: 10, marginBottom: 10}}>
          <div className="d-flex justify-content-center align-items-center" style={{height: '100%', width: '100%'}}>
            <div className="col-6 d-flex d-md-flex justify-content-center align-items-center align-items-md-center justify-content-lg-start" style={{boxShadow: '0px 22px 40px 0px rgba(142, 151, 164, 0.19)', borderRadius: 10, padding: 20, width: '100%'}}>
              <div className="row">
                <div className="col-auto d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}><img style={{width: '100%'}} src="assets/img/Group%207.png" /></div>
                </div>
                <div className="col">
                  <div className="row" style={{width: '100%'}}>
                    <div className="col">
                      <h6 style={{color: 'rgba(64, 70, 80, 1)'}}>Hashtag Research</h6>
                    </div>
                  </div>
                  <div className="row" style={{width: '100%'}}>
                    <div className="col">
                      <p style={{color: 'rgba(64, 70, 80, 1)'}}>Upgrage to pro subscription fo $9/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center" style={{background: '#ffffff', borderRadius: 10, marginBottom: 10}}>
          <div className="d-flex justify-content-center align-items-center" style={{height: '100%', width: '100%'}}>
            <div className="col-6 d-flex d-md-flex justify-content-center align-items-center align-items-md-center justify-content-lg-start" style={{boxShadow: '0px 22px 40px 0px rgba(142, 151, 164, 0.19)', borderRadius: 10, padding: 20, width: '100%'}}>
              <div className="row">
                <div className="col-auto d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}><img style={{width: '100%'}} src="assets/img/Group%207.png" /></div>
                </div>
                <div className="col">
                  <div className="row" style={{width: '100%'}}>
                    <div className="col">
                      <h6 style={{color: 'rgba(64, 70, 80, 1)'}}>Hashtag Research</h6>
                    </div>
                  </div>
                  <div className="row" style={{width: '100%'}}>
                    <div className="col">
                      <p style={{color: 'rgba(64, 70, 80, 1)'}}>Upgrage to pro subscription fo $9/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End: Topics */}
      <div className="row d-flex justify-content-center align-items-start" style={{marginTop: 50}}>
        <div className="col-12 col-lg-4 d-none d-md-flex">
          <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: 500}}><img style={{width: '100%'}} src="assets/img/scratching-head.png" /></div>
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col d-flex flex-row justify-content-center align-items-center" style={{borderRadius: 10}}>
              <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: 500}}>
                <div className="col-6 d-flex d-md-flex justify-content-center align-items-start align-items-md-center align-items-lg-start" style={{boxShadow: '0px 22px 40px 0px rgba(142, 151, 164, 0.19)', borderRadius: 10, padding: 20, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 1)'}}>
                  <div className="row" style={{width: '100%'}}>
                    <div className="col-12" style={{width: '100%'}}>
                      <div className="row" style={{width: '100%'}}>
                        <div className="col">
                          <h6>Balances</h6>
                        </div>
                      </div>
                      <div className="row" style={{width: '100%', marginBottom: 25}}>
                        <div className="col">
                          <h4>$ 9,314</h4>
                        </div>
                      </div>{/* Start: Account Item */}
                      <div className="row" style={{width: '100%', borderBottom: '1px solid rgba(241, 244, 245, 1)', marginBottom: 15}}>
                        <div className="col d-flex justify-content-start align-items-center">
                          <p className="text-center" style={{color: 'rgba(64, 70, 80, 1)', marginBottom: 0}}>Main Account</p>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center"><button className="btn btn-primary d-flex justify-content-center align-items-center" type="button" style={{background: 'transparent', borderRadius: '50%', color: 'rgb(64,70,80)', borderColor: 'rgba(205, 210, 212, 1)', borderTopColor: 'rgba(205,', borderRightColor: '210,', borderBottomColor: '212,', borderLeftColor: '1)', width: 28, height: 28, margin: 5}}>+</button>
                          <p className="text-center" style={{color: 'rgba(64, 70, 80, 1)', marginBottom: 0}}>$413</p><button className="btn btn-primary d-flex justify-content-center align-items-center" type="button" style={{background: 'transparent', borderRadius: '50%', color: 'rgb(64,70,80)', borderColor: 'rgba(205, 210, 212, 1)', borderTopColor: 'rgba(205,', borderRightColor: '210,', borderBottomColor: '212,', borderLeftColor: '1)', width: 28, height: 28, margin: 5}}>-</button>
                        </div>
                      </div>{/* End: Account Item */}
                      {/* Start: Transasctions */}
                      <div className="row" style={{height: 300, overflowY: 'scroll'}}>
                        <div className="col">
                          {/* Start: Title */}
                          <div className="row" style={{width: '100%', borderBottom: '1px solid rgba(241, 244, 245, 1)', marginBottom: 15}}>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgb(56,123,221)', fontWeight: 'bold', marginBottom: 0}}>Title</p>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgb(56,123,221)', fontWeight: 'bold', marginBottom: 0}}>Type</p>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgb(56,123,221)', fontWeight: 'bold', marginBottom: 0}}>Amount</p>
                            </div>
                          </div>{/* End: Title */}
                          {/* Start: Transaction */}
                          {data.map((item, index) => (
                          <div className="row" style={{width: '100%', borderBottom: '1px solid rgba(241, 244, 245, 1)', marginBottom: 15}}>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgba(64, 70, 80, 1)', marginBottom: 0}}>{item.title}</p>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgba(64, 70, 80, 1)', marginBottom: 0}}>{item.type}</p>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                              <p className="text-center" style={{color: 'rgba(64, 70, 80, 1)', marginBottom: 0}}>${item.amount}</p>
                            </div>
                          </div>
                          ))}
                        </div>
                      </div>{/* End: Transasctions */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* End: Main */}
    {/* Start: History */}
    <div className="col-12 col-md-3" style={{height: '100%', paddingTop: 50}}>
      <div className="row" style={{marginBottom: 30}}>
        <div className="col">
          <h4 className="text-start">History</h4>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-xl-center">
          <div className="d-flex justify-content-center align-items-center" style={{width: 27, height: 27, background: 'rgba(53, 121, 220, 1)', borderRadius: 50}}><img style={{width: 11, height: 11}} src="assets/img/envelope-open.png" width={11} height={11} /></div>
          <div style={{height: 100, width: 0, border: '0.5px dashed rgba(205, 210, 212, 1)'}} />
        </div>
        <div className="col">
          <h6 style={{color: 'rgb(56,123,221)', marginBottom: 0}}>Email Opened</h6>
          <p style={{borderColor: 'rgba(136, 144, 156, 1)', borderTopColor: 'rgba(136,', borderRightColor: '144,', borderBottomColor: '156,', borderLeftColor: '1)'}}>July 2, 2021 8am</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-xl-center">
          <div className="d-flex justify-content-center align-items-center" style={{width: 27, height: 27, background: 'rgba(255, 255, 255, 1)', borderRadius: 50, borderWidth: 1, borderStyle: 'solid'}}><img style={{width: 11, height: 11}} src="assets/img/envelope.png" width={11} height={11} /></div>
          <div style={{height: 100, width: 0, border: '0.5px dashed rgba(205, 210, 212, 1)'}} />
        </div>
        <div className="col">
          <h6 style={{marginBottom: 0}}>Email Opened</h6>
          <p style={{borderColor: 'rgba(136, 144, 156, 1)', borderTopColor: 'rgba(136,', borderRightColor: '144,', borderBottomColor: '156,', borderLeftColor: '1)'}}>July 2, 2021 8am</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-xl-center">
          <div className="d-flex justify-content-center align-items-center" style={{width: 27, height: 27, background: 'rgba(255, 255, 255, 1)', borderRadius: 50}}><img style={{width: 11, height: 11}} src="assets/img/envelope.png" width={11} height={11} /></div>
          <div style={{height: 100, width: 0, border: '0.5px dashed rgba(205, 210, 212, 1)'}} />
        </div>
        <div className="col">
          <h6 style={{marginBottom: 0}}>Email Opened</h6>
          <p style={{borderColor: 'rgba(136, 144, 156, 1)', borderTopColor: 'rgba(136,', borderRightColor: '144,', borderBottomColor: '156,', borderLeftColor: '1)'}}>July 2, 2021 8am</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-xl-center">
          <div className="d-flex justify-content-center align-items-center" style={{width: 27, height: 27, background: 'rgba(255, 255, 255, 1)', borderRadius: 50, borderWidth: 1, borderStyle: 'solid'}}><img style={{width: 11, height: 11}} src="assets/img/envelope.png" width={11} height={11} /></div>
          <div style={{height: 100, width: 0, border: '0.5px dashed rgba(205, 210, 212, 1)'}} />
        </div>
        <div className="col">
          <h6 style={{marginBottom: 0}}>Email Opened</h6>
          <p style={{borderColor: 'rgba(136, 144, 156, 1)', borderTopColor: 'rgba(136,', borderRightColor: '144,', borderBottomColor: '156,', borderLeftColor: '1)'}}>July 2, 2021 8am</p>
        </div>
      </div>
    </div>{/* End: History */}
  </div>
</header>




  );
}

export default App;
