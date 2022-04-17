import MainNav from '@/components/MainNav/MainNav';


const HomepageLayout = ({ children }) => {
  return (
    <div>
      <MainNav />
      { children }
    </div>
  );
}

export default HomepageLayout;