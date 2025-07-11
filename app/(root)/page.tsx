import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'Ashraf', lastName: 'Kawooya', email: 'ashrafk1@umbc.edu'};
  return (
    <div>
      <section className="home">
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.45}
            />
          </header>

          RECENT TRANSACTIONS
        </div>
        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 123.50},{currentBalance: 500.38}]}
        />
      </section>
    </div>
  )
}

export default Home
